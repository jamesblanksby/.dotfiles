# Load the shell dotfiles, and then some:
# * ~/.path can be used to extend $PATH
# * ~/.extra can be used for other settings you don’t want to commit
for file in ~/.{path,bash_prompt,exports,aliases,functions,extras}; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file"
done
unset file

# Autocorrect typos in path names when using cd
shopt -s cdspell

# Start terminal in Server directory when not in VS Code and using Mac OS
directory='/Volumes/Data/Server'
if [[ "$OSTYPE" == "darwin"* ]] && [[ "$TERM_PROGRAM" != "vscode" ]] && [[ -d "$directory" ]]; then
    cd "$directory"
fi
