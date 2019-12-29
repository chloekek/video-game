let
    pkgs = import ./nix/pkgs.nix {};
in
    [
        pkgs.coreutils
        pkgs.gnumake
        pkgs.nodePackages.typescript
    ]
