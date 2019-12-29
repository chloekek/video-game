let
    pkgs = import ./nix/pkgs.nix {};
in
    [
        pkgs.coreutils
        pkgs.findutils
        pkgs.gnumake
        pkgs.krita
        pkgs.nodePackages.typescript
    ]
