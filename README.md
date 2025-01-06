# 💻 .dotfiles

> A curated collection of my personal dotfiles and configuration files.

> [!IMPORTANT]
> These are my personalised configuration files. Please review the code carefully before installing to ensure compatibility and security.

## 🚀 Installation

Follow these steps to set up the dotfiles on your machine:

1. Clone the repository:

```shell
$ git clone https://github.com/jamesblanksby/.dotfiles.git
```

2. Navigate to the cloned directory:

```shell
$ cd .dotfiles
```

3. Copy the `.env.sample` file to `.env` and update it with your configuration values:

```shell
$ cp .env.sample .env
```

4. Execute the installation script:

> [!NOTE]
The script will create symbolic links from the repository's dotfiles to your home directory. Existing configuration files will be backed up to your Desktop to ensure they are not lost.

```shell
$ ./install
```

5. Restart your shell or open a new terminal session to apply the changes.
