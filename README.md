# react-mdx

Markdown と JSX を一つの `.mdx` ファイルに書いたものを、React コンポーネントとして表示する学習用の雛形です。Vite が `.mdx` をコンパイルし、普通のページと同じように描画します。

## 技術スタック

- React 19
- Vite 7
- TypeScript
- MDX 3（`@mdx-js/rollup` / `@mdx-js/react`）
- remark-gfm
- Nix flake + direnv（Node.js / pnpm）

## ディレクトリ構成

```
.
├── flake.nix
├── pnpm-workspace.yaml
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── mdx-components.tsx
│   ├── components/
│   └── pages/          # .mdx の本文
└── index.html
```

## セットアップ

このディレクトリに入ると direnv が devShell を有効にします。初回だけ許可が必要です。

```sh
direnv allow
pnpm install
```

Nix を使わない場合は、Node.js 20 以降と pnpm を用意して `pnpm install` してください。

## コマンド

### 開発

```sh
pnpm dev
```

ブラウザで http://localhost:5173 を開きます。`src/pages/` の `.mdx` を保存するとすぐ反映されます。

### 型チェック

```sh
pnpm typecheck
```

### ビルド

```sh
pnpm build
pnpm preview
```
