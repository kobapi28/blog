---
title: '1週間で読んだ記事（2024/03/10）'
publishedAt: 2024/03/10
description: '今週読んだ記事をまとめています。(2024/03/10週)'
tags: ['weekly']
isDraft: false
---

## 今週のまとめ

数読めなかったのでジャンル的にはまとまってないかも

### フロントエンドのディレクトリ設計思想

うちがやってるのと一緒だ、Layer, Feature のどちらかでわけるの結構厳しい気もする？

[フロントエンドのディレクトリ設計思想](https://zenn.dev/mybest_dev/articles/c0570e67978673)

### 技術的負債の発生と返し方の判断基準

その負債がどの区分に入るのかを認識することと、その影響度をふまえていつ解消するのかそもそも残すのかを判断しなきゃいけないなーと思った

技術的負債はビジネスをする上で悪ではないというのは頭に入れておいた方が良い

[技術的負債の発生と返し方の判断基準](https://t.co/1TpuLjKqMj)

### 検索システムのフロントを SSR・Remix で作り直した

直接 Elastic Search 叩くのって一般的なのかな、バックエンドの API 噛ませるイメージあった

でもその層を Remix のサーバーでやるようになったってことか、こういうときバックエンドをきちんと定義しなくても良いのはいいな〜

ローディング時の Search Params 変えただけだとローディング状態にならないのは Next.js でも聞いたことあるような気がする(たぶん)

[検索システムのフロントを SSR・Remix で作り直した - Unyablog.](https://nonylene.hatenablog.jp/entry/2024/02/29/032149)

### **privateメソッドのテストって書かない方がいいんだっけ？**

仕様ではなく詳細を書かないように気をつけなきゃとも思ったけど、詳細が複数あつまり仕様を表現する…？とも思った

自分も本持ってるから読んでみよう

[privateメソッドのテストって書かない方がいいんだっけ？](https://speakerdeck.com/asumikam/private-methods-test)