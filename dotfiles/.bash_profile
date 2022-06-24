# Load the shell dotfiles
for file in "$HOME/.{aliases,bash_prompt,exports,path}"; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file

# Autocorrect cd typos
shopt -s cdspell

# Start terminal in Server directory when not in VS Code and using macOS
directory="/Volumes/Data/Server"
if [[ "$(uname)" == "Darwin" ]] && [[ "$TERM_PROGRAM" != "vscode" ]] && [[ -d "$directory" ]]; then
    cd "$directory"
fi
