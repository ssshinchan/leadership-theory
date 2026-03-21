# AGENTS.md — AI コーディングエージェント向けガイド

このファイルはこのリポジトリで作業する AI コーディングエージェント（Claude、Copilot 等）向けの規約・手順書です。

---

## プロジェクト概要

京都市ごみ分別ガイドの VuePress 2 静的サイト。日本語・英語・中国語の多言語対応。
カスタム Vue コンポーネント（AI ごみ判定チャット）を含む。

- **フレームワーク**: VuePress 2 + vuepress-theme-hope
- **言語**: TypeScript (ES2022, NodeNext)
- **フロントエンド**: Vue 3 Composition API
- **バンドラー**: Vite (`@vuepress/bundler-vite`)
- **スタイル**: Sass/SCSS

---

## ビルド・開発コマンド

```bash
# 開発サーバー起動
npm run docs:dev

# キャッシュクリア付き開発サーバー起動
npm run docs:clean-dev

# 本番ビルド
npm run docs:build

# VuePress パッケージ更新
npm run docs:update-package
```

> **テスト・リントコマンドなし。** テストフレームワーク・ESLint・Prettier の設定ファイルは存在しない。

---

## ディレクトリ構成

```
leadership-theory/
├── src/
│   ├── .vuepress/
│   │   ├── config.ts          # VuePress メイン設定
│   │   ├── theme.ts           # テーマ・プラグイン設定
│   │   ├── client.ts          # クライアントサイド設定（コンポーネント登録）
│   │   ├── components/        # カスタム Vue コンポーネント
│   │   │   └── RubbishOpenAIChat.vue
│   │   ├── sidebar/           # サイドバー設定（言語別）
│   │   └── navbar/            # ナビゲーションバー設定（言語別）
│   ├── README.md              # 日本語トップページ
│   ├── en/README.md           # 英語トップページ
│   └── zh/README.md           # 中国語トップページ
├── package.json
└── tsconfig.json
```

---

## コードスタイルガイドライン

### インポート

- **パッケージ**: 絶対インポート（ダブルクォート）
  ```ts
  import { defineUserConfig } from "vuepress"
  import { hopeTheme } from "vuepress-theme-hope"
  ```
- **ローカルファイル**: 相対パス。TypeScript ファイルは `.js` 拡張子で参照（NodeNext モジュール解決）
  ```ts
  import theme from "./theme.js"
  import { zhSidebar } from "./sidebar/index.js"
  ```
- **エイリアス不使用**。`@/` のようなエイリアスは設定されていない。
- **Vue コンポーネント**: `.vue` 拡張子を明示

### 命名規則

| 対象 | 規則 | 例 |
|---|---|---|
| ファイル（TypeScript） | camelCase | `config.ts`, `theme.ts` |
| ファイル（Vue） | PascalCase | `RubbishOpenAIChat.vue` |
| 関数・変数 | camelCase | `submitQuery`, `inputMode` |
| クラス・コンポーネント | PascalCase | `RubbishOpenAIChat` |
| リアクティブ ref | camelCase | `userInput`, `isLoading` |
| 定数（環境変数等） | UPPER_SNAKE_CASE | `API_KEY` |

### TypeScript

- **`any` 型禁止**。明示的な型注釈を使用する。
- Props には `defineProps<{ ... }>()` のジェネリック構文を使用：
  ```ts
  const props = defineProps<{
    rubbishLabel?: string
  }>()
  ```
- ref にはジェネリック型を付与：
  ```ts
  const inputMode = ref<'text' | 'image'>('text')
  const result = ref<string>('')
  ```
- Union 型で制限された文字列リテラルを使用する。
- `tsconfig.json` 設定：`target: ES2022`, `module: NodeNext`, `moduleResolution: NodeNext`

### Vue コンポーネント

- **Vue 3 Composition API + `<script setup lang="ts">`** を使用：
  ```vue
  <script setup lang="ts">
  import { ref, computed, onUnmounted } from 'vue'

  const isLoading = ref(false)
  const result = ref<string>('')
  </script>
  ```
- `<template>` → `<script setup>` → `<style scoped>` の順序で記述。
- スタイルは `<style scoped>` で局所化する。
- ダークモード対応：CSS カスタムプロパティ or `:root[data-theme='dark']` セレクタを使用。

### エラーハンドリング

- 非同期処理には `try-catch` を使用し、エラーをリアクティブな ref に格納：
  ```ts
  const error = ref<string>('')

  async function submitQuery() {
    try {
      error.value = ''
      // ...処理...
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'エラーが発生しました'
      console.error(err)
    }
  }
  ```
- ユーザー向けメッセージは日本語（メインロケールが日本語のため）。
- デバッグ用 `console.error` / `console.log` は許容されるが、本番コードでは最小限に。

### エクスポートパターン

- メイン設定ファイルはデフォルトエクスポート：
  ```ts
  export default defineUserConfig({ ... })
  ```
- ユーティリティ・設定オブジェクトは名前付きエクスポート：
  ```ts
  export const zhSidebar = sidebar({ ... })
  ```
- インデックスファイルは re-export パターン：
  ```ts
  export { zhSidebar } from "./zh.js"
  export { enSidebar } from "./en.js"
  ```

### コメントスタイル

- 単行コメント `//` を優先。
- セクション区切りにブロックコメントを使用：
  ```ts
  // ===== OpenAI API 設定 =====
  ```
- JSDoc は VuePress/テーマの公開 API のみ（基本不要）。
- 日本語コメントを推奨（プライマリロケールが日本語）。

---

## 多言語コンテンツ規則

- **日本語** (`/`): プライマリロケール。ルートに配置。
- **英語** (`/en/`): セカンダリロケール。
- **中国語** (`/zh/`): 三番目のロケール。
- Markdown コンテンツを追加する際は、対応する全ロケールに同等ページを作成する。
- `config.ts` の `locales` オブジェクトで言語設定を管理。

---

## VuePress 設定の変更

- **プラグイン追加**: `src/.vuepress/theme.ts` の `plugins` セクションを編集。
- **ナビゲーション変更**: `src/.vuepress/navbar/` 配下の言語別ファイルを編集。
- **サイドバー変更**: `src/.vuepress/sidebar/` 配下の言語別ファイルを編集。
- **コンポーネント追加**: `src/.vuepress/components/` に配置し、`client.ts` で登録。

---

## 注意事項

- **テストなし**: テストを書く必要はないが、手動で `npm run docs:dev` 動作確認を推奨。
- **リントなし**: ESLint/Prettier 設定なし。既存コードのスタイルに合わせること。
- **Cursor/Copilot ルールなし**: `.cursor/rules/`、`.cursorrules`、`.github/copilot-instructions.md` は存在しない。
- **コミット前**: `npm run docs:build` でビルドエラーがないことを確認する。
- **依存追加時**: `package-lock.json` も必ずコミットする。
