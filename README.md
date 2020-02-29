# 🔧 dotfiles

## Usage

### ⚡️ Install

Clone the repository onto your local machine and run:

```bash
git clone https://github.com/jamesblanksby/dotfiles.git && cd dotfiles && source bootstrap
```

The bootstrap script will pull in the latest version and copy the files to your home folder.

### 💎 Update

To update, `cd` into your local `dotfiles` repository and then:

```bash
./bootstrap
```

### 🍎 macOS defaults

Set personalised defaults, run the following:

```bash
./macos
```

### 🍺 Homebrew formulae

Install Homebrew and commonly used formulae, run the following:

```bash
./brew
```

### 🧶 Yarn package manager

Install Yarn via Homebrew and the required packages for development, run the following:
```bash
./yarn
```

### 📁 Specify the `$PATH`

`~/.path` will be sourced along with the other files. Here is an example of the file that adds `/usr/local/bin` to the `$PATH`:

```bash
export PATH="/usr/local/bin:$PATH"
```
