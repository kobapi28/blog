---
layout: '../../layouts/PostLayout.astro'
title: 'astro でブログつくりました'
pubDate: 2024-01-20
description: 'astro blog 作るまでに設定したやつメモ'
author: 'Astro学習者'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["astro", "ブログ", "公開学習"]
---
# astro でブログつくりました

## import エイリアスの設定
別に astro に限ったことじゃないけど

初期生成時に tsconfig.json が生成されるので、そこに以下を付け足す。
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

## TODO: ビルド時に ts の型チェックをする
astro のビルド時に ts の型チェックをするようにする。
```json
{
  "scripts": {
    "build": "astro check && tsc --noEmit && astro build"
  }
}
```
