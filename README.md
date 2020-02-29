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

The bootstrap script will set personalised defaults, but if you need set it independently you can run:

```bash
./macos
```

### 🍺 Homebrew formulae

The bootstrap script will install Homebrew and commonly used formulae but if you need to reinstall separately you can run:

```bash
./brew
```

### 🧶 Yarn package manager

The bootstrap script will install Yarn via Homebrew and the required packages for development but if you need to reinstall separately you can run:

```bash
./yarn
```

### 📁 Specify the `$PATH`

`~/.path` will be sourced along with the other files. Here is an example of the file that adds `/usr/local/bin` to the `$PATH`:

```bash
export PATH="/usr/local/bin:$PATH"
```
