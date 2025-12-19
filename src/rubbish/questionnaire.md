---
title: アンケート調査の結果
icon: question
---

総回答留学生人数：110人

## 分析的なまとめ

留学生にとって、日本の生活で「ごみ出し」は大きな壁になっています。「言葉がわからなくても、イラストで直感的にわかる仕組み」や「スマホで簡単に検索できるツール」があれば、留学生はもっと安心して日本で生活できるようになると考えられます。


## 国籍（複数回答）

::: echarts

```json
{
  "tooltip": {
    "trigger": "item",
    "formatter": "{a} <br/>{b}: {c} ({d}%)"
  },
  "legend": {
    "orient": "vertical",
    "left": "left",
    "bottom": "0",
    "data": ["中国（台湾含む）", "東南アジア", "欧米"]
  },
  "series": [
    {
      "name": "人数",
      "type": "pie",
      "radius": "50%",
      "data": [
        { "value": 77, "name": "中国（台湾含む）" },
        { "value": 28, "name": "東南アジア" },
        { "value": 5, "name": "欧米" }
      ],
      "emphasis": {
        "itemStyle": {
          "shadowBlur": 10,
          "shadowOffsetX": 0,
          "shadowColor": "rgba(0, 0, 0, 0.5)"
        }
      },
      "label": {
        "show": true,
        "formatter": "{b}: {c}"
      }
    }
  ]
}
```

:::

## 来日期間
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "bottom": "0",
        "left": "left",
        "data": [
            "三か月未満",
            "三〜六か月",
            "半年〜一年",
            "一年以上"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 28,
                    "name": "三か月未満"
                },
                {
                    "value": 34,
                    "name": "三〜六か月"
                },
                {
                    "value": 26,
                    "name": "半年〜一年"
                },
                {
                    "value": 22,
                    "name": "一年以上"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 居住形態（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "bottom": "0",
        "left": "left",
        "data": [
            "学生寮",
            "自分で賃貸"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 33,
                    "name": "学生寮"
                },
                {
                    "value": 77,
                    "name": "自分で賃貸"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 日本語レベル
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "初級",
            "中級",
            "上級"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 22,
                    "name": "初級"
                },
                {
                    "value": 66,
                    "name": "中級"
                },
                {
                    "value": 22,
                    "name": "上級"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 母国にごみ分別制度はありますか
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "制度がある",
            "制度がない",
            "あるが運用がゆるい"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 32,
                    "name": "制度がある"
                },
                {
                    "value": 45,
                    "name": "制度がない"
                },
                {
                    "value": 33,
                    "name": "あるが運用がゆるい"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 母国で一般的な分別（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "可燃ごみ",
            "不燃ごみ",
            "プラスチック",
            "びん・かん・紙",
            "有害ごみ"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 61,
                    "name": "可燃ごみ"
                },
                {
                    "value": 48,
                    "name": "不燃ごみ"
                },
                {
                    "value": 55,
                    "name": "プラスチック"
                },
                {
                    "value": 52,
                    "name": "びん・かん・紙"
                },
                {
                    "value": 29,
                    "name": "有害ごみ"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 母国の分別制度への満足度
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "とても不満",
            "不満",
            "どちらとも言えない",
            "満足",
            "とても満足"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 20,
                    "name": "とても不満"
                },
                {
                    "value": 26,
                    "name": "不満"
                },
                {
                    "value": 34,
                    "name": "どちらとも言えない"
                },
                {
                    "value": 22,
                    "name": "満足"
                },
                {
                    "value": 8,
                    "name": "とても満足"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 母国でのごみ分別の複雑さ
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "まったく複雑ではない",
            "あまり複雑ではない",
            "普通",
            "やや複雑",
            "とても複雑"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 46,
                    "name": "まったく複雑ではない"
                },
                {
                    "value": 38,
                    "name": "あまり複雑ではない"
                },
                {
                    "value": 18,
                    "name": "普通"
                },
                {
                    "value": 6,
                    "name": "やや複雑"
                },
                {
                    "value": 2,
                    "name": "とても複雑"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 母国のごみ分別の課題（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "分別ルールの周知が弱い",
            "住民の参加意識が低い",
            "地域によって基準がバラバラ",
            "分別の案内が実用的ではない",
            "後工程が不透明／不十分"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 62,
                    "name": "分別ルールの周知が弱い"
                },
                {
                    "value": 58,
                    "name": "住民の参加意識が低い"
                },
                {
                    "value": 51,
                    "name": "地域によって基準がバラバラ"
                },
                {
                    "value": 46,
                    "name": "分別の案内が実用的ではない"
                },
                {
                    "value": 39,
                    "name": "後工程が不透明／不十分"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 日本のごみ分別の難しさ
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "簡単",
            "普通",
            "難しい",
            "とても難しい"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 5,
                    "name": "簡単"
                },
                {
                    "value": 26,
                    "name": "普通"
                },
                {
                    "value": 56,
                    "name": "難しい"
                },
                {
                    "value": 23,
                    "name": "とても難しい"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 日本のごみ分別で最も困る点（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "ルールが細かすぎる",
            "市区町村で基準が異なる",
            "回収日が多く覚えにくい",
            "日本語の説明が分かりにくい",
            "包装を洗浄する必要がある",
            "特に困っていない"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 38,
                    "name": "ルールが細かすぎる"
                },
                {
                    "value": 34,
                    "name": "市区町村で基準が異なる"
                },
                {
                    "value": 30,
                    "name": "回収日が多く覚えにくい"
                },
                {
                    "value": 28,
                    "name": "日本語の説明が分かりにくい"
                },
                {
                    "value": 22,
                    "name": "包装を洗浄する必要がある"
                },
                {
                    "value": 6,
                    "name": "特に困っていない"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 分別ミスで注意された経験
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "ある",
            "ない"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 67,
                    "name": "ある"
                },
                {
                    "value": 43,
                    "name": "ない"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 分別ルールの情報源（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "ネット検索",
            "市役所のごみ分別冊子",
            "学校のオリエンテーション",
            "友人・同級生",
            "管理会社／大家",
            "よく分からないまま出している"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 76,
                    "name": "ネット検索"
                },
                {
                    "value": 61,
                    "name": "市役所のごみ分別冊子"
                },
                {
                    "value": 54,
                    "name": "学校のオリエンテーション"
                },
                {
                    "value": 48,
                    "name": "友人・同級生"
                },
                {
                    "value": 42,
                    "name": "管理会社／大家"
                },
                {
                    "value": 15,
                    "name": "よく分からないまま出している"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 日本のごみ分別についての自由意見（要約）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "情報が分散しており初心者には分かりにくい",
            "慣れるまで正解に自信が持てない",
            "外国人向けのガイドが不足している"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 72,
                    "name": "情報が分散しており初心者には分かりにくい"
                },
                {
                    "value": 64,
                    "name": "慣れるまで正解に自信が持てない"
                },
                {
                    "value": 58,
                    "name": "外国人向けのガイドが不足している"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## 新規留学生に必要な支援（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "中国語／英語の簡潔なルール説明",
            "イラスト付き分別表",
            "ウェブで地域ルールを確認できる",
            "動画での解説",
            "個別サポート"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 88,
                    "name": "中国語／英語の簡潔なルール説明"
                },
                {
                    "value": 84,
                    "name": "イラスト付き分別表"
                },
                {
                    "value": 79,
                    "name": "ウェブで地域ルールを確認できる"
                },
                {
                    "value": 55,
                    "name": "動画での解説"
                },
                {
                    "value": 32,
                    "name": "個別サポート"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## サイトに入れてほしい機能（複数回答）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "『これは何ごみ？』検索機能",
            "多言語対応",
            "市区町村ごとのルール差分",
            "回収日カレンダー／通知",
            "よくある間違い事例",
            "粗大ごみの手順・連絡先"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 92,
                    "name": "『これは何ごみ？』検索機能"
                },
                {
                    "value": 89,
                    "name": "多言語対応"
                },
                {
                    "value": 86,
                    "name": "市区町村ごとのルール差分"
                },
                {
                    "value": 81,
                    "name": "回収日カレンダー／通知"
                },
                {
                    "value": 73,
                    "name": "よくある間違い事例"
                },
                {
                    "value": 66,
                    "name": "粗大ごみの手順・連絡先"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::

## サイトへの自由提案（要約）
::: echarts

```json
{
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "vertical",
        "left": "left",
        "bottom": "0",
        "data": [
            "地域選択でルールが即表示される仕組み",
            "写真付きの検索・事例説明",
            "初心者向けクイックガイド"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "人数",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 61,
                    "name": "地域選択でルールが即表示される仕組み"
                },
                {
                    "value": 57,
                    "name": "写真付きの検索・事例説明"
                },
                {
                    "value": 49,
                    "name": "初心者向けクイックガイド"
                }
            ],
            "emphasis": {
                "itemStyle": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }
    ]
}
```

:::