---
title: Questionnaire Results
icon: question
---

Total number of international student respondents: 110

## Analytical Summary

For international students, "taking out the trash" in daily life in Japan is a significant barrier. Providing a system that is "intuitively understandable through illustrations even without knowing the language" and a "simple smartphone-searchable tool" would help international students feel more secure living in Japan.


## Nationality (multiple answers allowed)

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
        "data": ["China (including Taiwan)", "Southeast Asia", "Western countries"]
    },
  "series": [
    {
    "name": "Count",
      "type": "pie",
      "radius": "50%",
      "data": [
        { "value": 77, "name": "China (including Taiwan)" },
        { "value": 28, "name": "Southeast Asia" },
        { "value": 5, "name": "Western countries" }
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

## Length of Stay in Japan
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
            "Less than 3 months",
            "3–6 months",
            "6 months–1 year",
            "More than 1 year"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 28,
                    "name": "Less than 3 months"
                },
                {
                    "value": 34,
                    "name": "3–6 months"
                },
                {
                    "value": 26,
                    "name": "6 months–1 year"
                },
                {
                    "value": 22,
                    "name": "More than 1 year"
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

## Type of Residence (multiple answers allowed)
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
            "Student dormitory",
            "Private rental"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 33,
                    "name": "Student dormitory"
                },
                {
                    "value": 77,
                    "name": "Private rental"
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

## Japanese Language Level
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
            "Beginner",
            "Intermediate",
            "Advanced"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 22,
                    "name": "Beginner"
                },
                {
                    "value": 66,
                    "name": "Intermediate"
                },
                {
                    "value": 22,
                    "name": "Advanced"
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

## Does your home country have a waste separation system?
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
            "Has a system",
            "No system",
            "System exists but loosely enforced"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 32,
                    "name": "Has a system"
                },
                {
                    "value": 45,
                    "name": "No system"
                },
                {
                    "value": 33,
                    "name": "System exists but loosely enforced"
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

## Common waste separation categories in your home country (multiple answers allowed)
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
            "Combustible waste",
            "Non-combustible waste",
            "Plastics",
            "Bottles, cans, paper",
            "Hazardous waste"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 61,
                    "name": "Combustible waste"
                },
                {
                    "value": 48,
                    "name": "Non-combustible waste"
                },
                {
                    "value": 55,
                    "name": "Plastics"
                },
                {
                    "value": 52,
                    "name": "Bottles, cans, paper"
                },
                {
                    "value": 29,
                    "name": "Hazardous waste"
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

## Satisfaction with your home country's separation system
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
            "Very dissatisfied",
            "Dissatisfied",
            "Neutral",
            "Satisfied",
            "Very satisfied"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 20,
                    "name": "Very dissatisfied"
                },
                {
                    "value": 26,
                    "name": "Dissatisfied"
                },
                {
                    "value": 34,
                    "name": "Neutral"
                },
                {
                    "value": 22,
                    "name": "Satisfied"
                },
                {
                    "value": 8,
                    "name": "Very satisfied"
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

## Complexity of waste separation in your home country
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
            "Not complex at all",
            "Not very complex",
            "Average",
            "Somewhat complex",
            "Very complex"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 46,
                    "name": "Not complex at all"
                },
                {
                    "value": 38,
                    "name": "Not very complex"
                },
                {
                    "value": 18,
                    "name": "Average"
                },
                {
                    "value": 6,
                    "name": "Somewhat complex"
                },
                {
                    "value": 2,
                    "name": "Very complex"
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

## Issues with your home country's separation system (multiple answers allowed)
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
            "Poor awareness of separation rules",
            "Low resident participation",
            "Standards vary by area",
            "Practical guidance is lacking",
            "Downstream processes opaque/insufficient"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 62,
                    "name": "Poor awareness of separation rules"
                },
                {
                    "value": 58,
                    "name": "Low resident participation"
                },
                {
                    "value": 51,
                    "name": "Standards vary by area"
                },
                {
                    "value": 46,
                    "name": "Practical guidance is lacking"
                },
                {
                    "value": 39,
                    "name": "Downstream processes opaque/insufficient"
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

## Difficulty of Japan's waste separation
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
            "Easy",
            "Average",
            "Difficult",
            "Very difficult"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 5,
                    "name": "Easy"
                },
                {
                    "value": 26,
                    "name": "Average"
                },
                {
                    "value": 56,
                    "name": "Difficult"
                },
                {
                    "value": 23,
                    "name": "Very difficult"
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

## Biggest problems with Japan's waste separation (multiple answers allowed)
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
            "Rules too detailed",
            "Standards differ by municipality",
            "Too many collection days to remember",
            "Japanese explanations hard to understand",
            "Packaging needs washing",
            "Not particularly troubled"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 38,
                    "name": "Rules too detailed"
                },
                {
                    "value": 34,
                    "name": "Standards differ by municipality"
                },
                {
                    "value": 30,
                    "name": "Too many collection days to remember"
                },
                {
                    "value": 28,
                    "name": "Japanese explanations hard to understand"
                },
                {
                    "value": 22,
                    "name": "Packaging needs washing"
                },
                {
                    "value": 6,
                    "name": "Not particularly troubled"
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

## Experience of being scolded for sorting mistakes
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
            "Yes",
            "No"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 67,
                    "name": "Yes"
                },
                {
                    "value": 43,
                    "name": "No"
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

## Sources of information about sorting rules (multiple answers allowed)
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
            "Internet search",
            "City office waste separation pamphlet",
            "School orientation",
            "Friends/classmates",
            "Property manager/landlord",
            "Put out without really knowing"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 76,
                    "name": "Internet search"
                },
                {
                    "value": 61,
                    "name": "City office waste separation pamphlet"
                },
                {
                    "value": 54,
                    "name": "School orientation"
                },
                {
                    "value": 48,
                    "name": "Friends/classmates"
                },
                {
                    "value": 42,
                    "name": "Property manager/landlord"
                },
                {
                    "value": 15,
                    "name": "Put out without really knowing"
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

## Free comments about Japan's waste separation (summary)
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
            "Information is scattered and hard for beginners",
            "Unsure until accustomed",
            "Lack of guides for foreigners"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 72,
                    "name": "Information is scattered and hard for beginners"
                },
                {
                    "value": 64,
                    "name": "Unsure until accustomed"
                },
                {
                    "value": 58,
                    "name": "Lack of guides for foreigners"
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

## Support Needed for New International Students (multiple answers allowed)
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
            "Concise rules in Chinese/English",
            "Illustrated separation charts",
            "Ability to check local rules online",
            "Video explanations",
            "Individual support"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 88,
                    "name": "Concise rules in Chinese/English"
                },
                {
                    "value": 84,
                    "name": "Illustrated separation charts"
                },
                {
                    "value": 79,
                    "name": "Ability to check local rules online"
                },
                {
                    "value": 55,
                    "name": "Video explanations"
                },
                {
                    "value": 32,
                    "name": "Individual support"
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

## Desired Site Features (multiple answers allowed)
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
            "Search: 'What kind of trash is this?'",
            "Multilingual support",
            "Differences in rules by municipality",
            "Collection day calendar/notifications",
            "Common mistake examples",
            "Bulky waste procedures & contacts"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 92,
                    "name": "Search: 'What kind of trash is this?'"
                },
                {
                    "value": 89,
                    "name": "Multilingual support"
                },
                {
                    "value": 86,
                    "name": "Differences in rules by municipality"
                },
                {
                    "value": 81,
                    "name": "Collection day calendar/notifications"
                },
                {
                    "value": 73,
                    "name": "Common mistake examples"
                },
                {
                    "value": 66,
                    "name": "Bulky waste procedures & contacts"
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

## Free Proposals for the Site (summary)
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
            "Select region and rules appear immediately",
            "Photo-based search and examples",
            "Quick guide for beginners"
        ]
    },
    "series": [
        {
            "label": {
                "show": true,
                "formatter": "{b}: {c}"
            },
            "name": "Count",
            "type": "pie",
            "radius": "50%",
            "data": [
                {
                    "value": 61,
                    "name": "Select region and rules appear immediately"
                },
                {
                    "value": 57,
                    "name": "Photo-based search and examples"
                },
                {
                    "value": 49,
                    "name": "Quick guide for beginners"
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