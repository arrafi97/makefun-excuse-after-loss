# The Excuse an Agent Gives After It Loses

Entry for the make.fun Mini of the same name. `main.ts` (Node 22, standard
library only, no network) writes one line of at most 200 characters to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

    mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
