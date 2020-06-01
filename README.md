# 🔧 dotfiles

These are **my** personalised defaults for macOS and Ubuntu – please review the code accordingly before installing.

## Usage

### ⚡️ Install

⚠️ **Use with caution** – the bootstrap script will copy the latest version into your home directory overwriting any existing files in the process.

Run the following to install on your machine:

```bash
git clone https://github.com/jamesblanksby/dotfiles.git && cd dotfiles && ./bootstrap
```

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
