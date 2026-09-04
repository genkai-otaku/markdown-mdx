# markdown-mdx

よく使う Markdown の記法を短くまとめた静的サイトです。ページは `.mdx` で、見た目のほとんどは Markdown です。React コンポーネントを動かす説明だけ、ブラウザで島として動かします。Astro がビルド時に HTML を生成します。

## 技術スタック

- Astro 7（静的出力）
- TypeScript
- MDX（`@astrojs/mdx`）
- React 19（動く部品だけ。`@astrojs/react`）
- Nix flake + direnv（Node.js / pnpm）

## ディレクトリ構成

```
.
├── flake.nix
├── astro.config.ts
├── src/
│   ├── layouts/        # 共通レイアウト
│   ├── components/     # Preview / Callout（Astro）、Counter / LikeButton（React）
│   ├── pages/
│   │   ├── index.mdx          # マークダウンの書き方
│   │   ├── 404.astro
│   │   └── mdx/
│   │       ├── index.mdx      # MDX とは
│   │       ├── syntax.mdx     # MDX の記法
│   │       └── components.mdx # コンポーネントの埋め込み
│   └── styles/
└── public/
```

## セットアップ

このディレクトリに入ると direnv が devShell を有効にします。初回だけ許可が必要です。

```sh
direnv allow
pnpm install
```

Nix を使わない場合は、Node.js 22.12 以降と pnpm を用意して `pnpm install` してください。

## コマンド

### 開発

```sh
pnpm dev
```

ブラウザで http://localhost:4321 を開きます。`src/pages/` の `.mdx` を保存するとすぐ反映されます。

### 型チェック

```sh
pnpm typecheck
```

### ビルド

```sh
pnpm build
pnpm preview
```

`pnpm build` は型チェックのあと、静的 HTML を `dist/` に出力します。`pnpm preview` はその成果物を確認します。
