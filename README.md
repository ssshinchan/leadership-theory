# 京都ゴミ分別先生（Kyoto Garbage Sorting Guide）

京都市の留学生向けに作成した、ごみ分別ガイドの静的サイトです。  
VuePress 2 を使用し、日本語・英語・中国語の 3 言語で情報を提供します。

- 公開想定 URL: `https://group64.compile.ac.cn`
- 対応ロケール: `/`（日本語）, `/en/`（英語）, `/zh/`（中国語）

## このプロジェクトで提供している内容

このサイトでは、京都市で生活する留学生が「何を、どの区分で、どう出すか」をすぐ確認できるように、次の情報を整理しています。

- 分別大辞典（品目別の分別区分・出し方）
- ごみ袋使用規範（指定袋の種類・サイズ・価格）
- 廃棄物処理プロセス（収集から処理までの流れ）
- AI に分別を聞く（テキスト/画像入力対応のサポート）
- アンケート調査結果（留学生向け調査の可視化）
- 公式情報まとめ（京都市・京都府の公式リンク集）

## 想定読者

- 京都市で生活する留学生
- 学内プロジェクトの開発・保守担当者
- 多言語の情報発信を担当する運用メンバー

## 技術スタック

- VuePress 2
- vuepress-theme-hope
- Vue 3 + TypeScript（`ES2022` / `NodeNext`）

## セットアップ

Node.js と npm が利用できる環境で、以下を実行してください。

```bash
npm install
```

## 開発・ビルド手順

```bash
# 開発サーバー起動
npm run docs:dev

# キャッシュクリア付き開発サーバー起動
npm run docs:clean-dev

# 本番ビルド
npm run docs:build

# VuePress 関連パッケージ更新
npm run docs:update-package
```

運用時の基本フローは次のとおりです。

1. `npm run docs:dev` で画面確認しながら編集
2. 必要に応じて 3 ロケール（`/`, `/en/`, `/zh/`）を同期更新
3. `npm run docs:build` でビルドエラーがないことを確認

## ディレクトリ構成

```text
leadership-theory/
├── src/
│   ├── .vuepress/
│   │   ├── config.ts          # サイト設定（base, locales, head, plugins）
│   │   ├── theme.ts           # テーマ設定（navbar, sidebar, markdown, plugins）
│   │   ├── client.ts          # クライアント設定（グローバルコンポーネント登録）
│   │   ├── components/        # カスタム Vue コンポーネント
│   │   ├── navbar/            # ナビゲーション（言語別）
│   │   └── sidebar/           # サイドバー（言語別）
│   ├── README.md              # 日本語トップ
│   ├── rubbish/               # 日本語コンテンツ
│   ├── en/                    # 英語ロケール
│   └── zh/                    # 中国語ロケール
├── AGENTS.md                  # AI コーディングエージェント向け規約
├── package.json
└── tsconfig.json
```

## 多言語コンテンツ運用ルール

- 日本語（`src/`）をプライマリとして管理
- 英語は `src/en/`、中国語は `src/zh/` で管理
- 新規ページ追加時は、可能な限り 3 言語で同等ページを作成
- ロケール定義は `src/.vuepress/config.ts` の `locales` で一元管理

## よくある変更ポイント

- サイト全体設定を変える: `src/.vuepress/config.ts`
- テーマ/プラグインを調整する: `src/.vuepress/theme.ts`
- ナビゲーションを変更する: `src/.vuepress/navbar/`
- サイドバーを変更する: `src/.vuepress/sidebar/`
- コンポーネントを追加する: `src/.vuepress/components/` と `src/.vuepress/client.ts`

## 補足

- 依存関係を追加・更新した場合は `package-lock.json` もあわせて管理してください。
- 大きな変更を行う前に、まず対象ロケールと関連設定（navbar/sidebar/config）を確認すると差分管理がしやすくなります。

