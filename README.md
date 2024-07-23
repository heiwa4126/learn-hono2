# learn-hono2

Bun で Hono と Playwright やってみる。

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open <http://localhost:3000>

## Playwright で E2E テスト

「リンクをクリックするとファイルをダウンロード」のテストのサンプルコード
兼
Bun で Playwright のテスト。

```sh
bun run test:e2e
```

## 普通のテスト

```sh
bun test
```

Hono の testClient() の使い方サンプル。
