---
layout: '../../layouts/PostLayout.astro'
title: 'astro でブログつくりました'
publishedAt: 2024/01/20
description: 'astro blog 作るまでに設定したやつメモ'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ["astro"]
---

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

## やりたいこと

### ブログ内のリンクを OGP と一緒に表示する
カード形式での表示にしたい
→ api いるなら hono 使ってみたいな（調べるところからだが）

### 記事の最初に目次の一覧を出す
note にあるような最初に見出し全部表示したい

### ちゃんとカラーパレット設計する
適当なので

### OGP 自動生成
タイトルを表示する OGP を自動生成する

### linter, ci 周り設定
全然できてないので