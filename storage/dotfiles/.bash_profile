#!/usr/bin/env bash

shopt -s cdspell

for file in $HOME/.{aliases,bash_prompt,exports,functions,path}; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file

directory="$HOME/Developer"
if [[ "$(uname)" == "Darwin" ]] && [[ "$TERM_PROGRAM" != "vscode" ]] && [[ -d "$directory" ]]; then
    cd "$directory"
fi
