{
  description = "よく使う Markdown の記法をまとめた静的サイト";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
            pnpm
          ];

          shellHook = ''
            echo "markdown docs devShell"
            echo "  node: $(node -v)"
            echo "  pnpm: $(pnpm -v)"
          '';
        };
      }
    );
}
