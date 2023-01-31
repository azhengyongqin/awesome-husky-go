
## 1. git commit 提交流程
严格按照 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范进行commit message编写。
```shell
#示例
git commit -m "feat(nike): 增加查单功能"
git commit -m "fix(Akamai): 修复xxx"
git commit -m "docs: 更新API文档"
```

> 使用 [git cz](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) 替换 git commit命令。
```shell
git add . 
git cz
```

![](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

## 2. 进行发版提取commit更新记录
选择运行下面的命令

```shell
#peek：临时在命令行中看一下生成记录（不会有任何影响）
yarn run release:peek

#major、minor、patch：分别对应主版本、此版本和补丁版本，可以根据提交情况手动指定
yarn run release:major
yarn run release:minor
yarn run release:patch

#pre：预览版本（抢先版本），可以指定前缀，示例中为 alpha
yarn run release:pre

#first：第一次生成，不会增加版本号
yarn run release:first
```

运行相关命令后，会自动打上对应版本的tag，并且在文件：[CHANGELOG.md](CHANGELOG.md) 会生成对应的changelogs。

版本号是按 [semver](https://semver.org/lang/zh-CN/) 语义化生成的。



