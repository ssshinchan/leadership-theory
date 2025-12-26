---
title: 问卷调查结果
icon: question
---

留学生答卷总人数：110人

## 分析性总结

对留学生而言，在日本生活中“垃圾投放”是一道很大的门槛。如果能提供“即使不懂语言也能通过插图直观理解的机制”以及“可在手机上轻松检索的工具”，留学生将能更安心地在日本生活。


## 国籍（可多选）

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
    "data": ["中国（含台湾）", "东南亚", "欧美"]
  },
  "series": [
    {
      "name": "人数",
      "type": "pie",
      "radius": "50%",
      "data": [
        { "value": 77, "name": "中国（含台湾）" },
        { "value": 28, "name": "东南亚" },
        { "value": 5, "name": "欧美" }
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

## 来日时间
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
            "不足三个月",
            "三到六个月",
            "半年至一年",
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
                    "name": "不足三个月"
                },
                {
                    "value": 34,
                    "name": "三到六个月"
                },
                {
                    "value": 26,
                    "name": "半年至一年"
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

## 居住形式（可多选）
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
            "学生宿舍",
            "自行租房"
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
                    "name": "学生宿舍"
                },
                {
                    "value": 77,
                    "name": "自行租房"
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

## 日语水平
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
            "初级",
            "中级",
            "高级"
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
                    "name": "初级"
                },
                {
                    "value": 66,
                    "name": "中级"
                },
                {
                    "value": 22,
                    "name": "高级"
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

## 你的母国有垃圾分类制度吗
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
            "有制度",
            "没有制度",
            "有但执行较松"
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
                    "name": "有制度"
                },
                {
                    "value": 45,
                    "name": "没有制度"
                },
                {
                    "value": 33,
                    "name": "有但执行较松"
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

## 母国常见的分类（可多选）
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
            "可燃垃圾",
            "不可燃垃圾",
            "塑料",
            "瓶/罐/纸",
            "有害垃圾"
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
                    "name": "可燃垃圾"
                },
                {
                    "value": 48,
                    "name": "不可燃垃圾"
                },
                {
                    "value": 55,
                    "name": "塑料"
                },
                {
                    "value": 52,
                    "name": "瓶/罐/纸"
                },
                {
                    "value": 29,
                    "name": "有害垃圾"
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

## 对母国垃圾分类制度的满意度
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
            "非常不满意",
            "不满意",
            "说不清",
            "满意",
            "非常满意"
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
                    "name": "非常不满意"
                },
                {
                    "value": 26,
                    "name": "不满意"
                },
                {
                    "value": 34,
                    "name": "说不清"
                },
                {
                    "value": 22,
                    "name": "满意"
                },
                {
                    "value": 8,
                    "name": "非常满意"
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

## 母国垃圾分类的复杂程度
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
            "完全不复杂",
            "不太复杂",
            "一般",
            "有点复杂",
            "非常复杂"
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
                    "name": "完全不复杂"
                },
                {
                    "value": 38,
                    "name": "不太复杂"
                },
                {
                    "value": 18,
                    "name": "一般"
                },
                {
                    "value": 6,
                    "name": "有点复杂"
                },
                {
                    "value": 2,
                    "name": "非常复杂"
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

## 母国垃圾分类的问题（可多选）
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
            "分类规则宣传不足",
            "居民参与意识低",
            "各地区标准不统一",
            "分类指引不够实用",
            "后续处理流程不透明/不充分"
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
                    "name": "分类规则宣传不足"
                },
                {
                    "value": 58,
                    "name": "居民参与意识低"
                },
                {
                    "value": 51,
                    "name": "各地区标准不统一"
                },
                {
                    "value": 46,
                    "name": "分类指引不够实用"
                },
                {
                    "value": 39,
                    "name": "后续处理流程不透明/不充分"
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

## 日本垃圾分类的难度
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
            "容易",
            "一般",
            "困难",
            "非常困难"
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
                    "name": "容易"
                },
                {
                    "value": 26,
                    "name": "一般"
                },
                {
                    "value": 56,
                    "name": "困难"
                },
                {
                    "value": 23,
                    "name": "非常困难"
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

## 日本垃圾分类中最困扰的点（可多选）
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
            "规则过于细致",
            "不同地区（市/区/町/村）标准不同",
            "回收日太多不易记",
            "日语说明难懂",
            "需要清洗包装",
            "没有特别困扰"
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
                    "name": "规则过于细致"
                },
                {
                    "value": 34,
                    "name": "不同地区（市/区/町/村）标准不同"
                },
                {
                    "value": 30,
                    "name": "回收日太多不易记"
                },
                {
                    "value": 28,
                    "name": "日语说明难懂"
                },
                {
                    "value": 22,
                    "name": "需要清洗包装"
                },
                {
                    "value": 6,
                    "name": "没有特别困扰"
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

## 因分类错误被提醒的经历
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
            "有",
            "没有"
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
                    "name": "有"
                },
                {
                    "value": 43,
                    "name": "没有"
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

## 获取分类规则的信息来源（可多选）
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
            "网络搜索",
            "市政府/区政府的垃圾分类手册",
            "学校迎新说明会",
            "朋友/同学",
            "物业管理公司/房东",
            "不太明白就直接丢了"
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
                    "name": "网络搜索"
                },
                {
                    "value": 61,
                    "name": "市政府/区政府的垃圾分类手册"
                },
                {
                    "value": 54,
                    "name": "学校迎新说明会"
                },
                {
                    "value": 48,
                    "name": "朋友/同学"
                },
                {
                    "value": 42,
                    "name": "物业管理公司/房东"
                },
                {
                    "value": 15,
                    "name": "不太明白就直接丢了"
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

## 关于日本垃圾分类的自由意见（摘要）
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
            "信息分散，新手难理解",
            "在熟悉前无法确信是否分类正确",
            "面向外国人的指南不足"
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
                    "name": "信息分散，新手难理解"
                },
                {
                    "value": 64,
                    "name": "在熟悉前无法确信是否分类正确"
                },
                {
                    "value": 58,
                    "name": "面向外国人的指南不足"
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

## 新来留学生需要的支援（可多选）
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
            "中文/英文的简明规则说明",
            "带插图的分类表",
            "可在网页上确认当地规则",
            "视频讲解",
            "一对一支持"
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
                    "name": "中文/英文的简明规则说明"
                },
                {
                    "value": 84,
                    "name": "带插图的分类表"
                },
                {
                    "value": 79,
                    "name": "可在网页上确认当地规则"
                },
                {
                    "value": 55,
                    "name": "视频讲解"
                },
                {
                    "value": 32,
                    "name": "一对一支持"
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

## 希望网站提供的功能（可多选）
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
            "“这是什么垃圾？”检索功能",
            "多语言支持",
            "各地区（市/区/町/村）规则差异",
            "回收日历/通知",
            "常见错误案例",
            "大件垃圾处理流程/联系方式"
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
                    "name": "“这是什么垃圾？”检索功能"
                },
                {
                    "value": 89,
                    "name": "多语言支持"
                },
                {
                    "value": 86,
                    "name": "各地区（市/区/町/村）规则差异"
                },
                {
                    "value": 81,
                    "name": "回收日历/通知"
                },
                {
                    "value": 73,
                    "name": "常见错误案例"
                },
                {
                    "value": 66,
                    "name": "大件垃圾处理流程/联系方式"
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

## 对网站的自由建议（摘要）
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
            "选择地区即可立即显示规则的机制",
            "带照片的检索与案例说明",
            "面向新手的快速指南"
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
                    "name": "选择地区即可立即显示规则的机制"
                },
                {
                    "value": 57,
                    "name": "带照片的检索与案例说明"
                },
                {
                    "value": 49,
                    "name": "面向新手的快速指南"
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