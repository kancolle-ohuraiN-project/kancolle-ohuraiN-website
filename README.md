# offline-colle-website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```
（请注意，如果使用Windows出现`GIT_USER不是命令或程序`这种的请在环境变量->用户变量添加`GIT_USER`环境变量，且在此变量中添加`自己GitHub用户名`后重启即可）

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
