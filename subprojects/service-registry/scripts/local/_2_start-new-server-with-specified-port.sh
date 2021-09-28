#!/bin/bash

if [ -n $ZSH_VERSION ]; then
    printf $'\e[32m\n\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎    start new server    ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n\n'
    else
    echo -e '\n◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎     start new server     ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎\n'
fi
echo -e "▶︎ new server info\n"
echo -e " ︎ port: $PORT_LIST\n"

export SERVER_PORT=$PORT_LIST
ts-node -r tsconfig-paths/register --files bin/www.ts | bunyan -o short & echo -e "  process: $(expr $! - 1)"
unset SERVER_PORT

if [ -n $ZSH_VERSION ]; then
    echo -e $'\e[0m'
fi
