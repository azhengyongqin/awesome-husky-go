1.安装
[standard-version](https://github.com/conventional-changelog/standard-version)
```shell
yarn add -D standard-version
```
2.命令，添加到 `package.json` scripts 中
```json
{
  "release:peek": "standard-version --dry-run",
  "release:major": "standard-version --release-as major",
  "release:minor": "standard-version --release-as minor",
  "release:patch": "standard-version --release-as patch",
  "release:pre": "standard-version --prerelease alpha",
  "release:first": "standard-version --first-release"
}
```
版本更新迭代规则可以按 [semver](https://semver.org/lang/zh-CN/) 语义化规则来

```
  // peek：临时在命令行中看一下生成记录（不会有任何影响）
  // major、minor、patch：分别对应主版本、此版本和补丁版本，可以根据提交情况手动指定
  // pre：预览版本（抢先版本），可以指定前缀，示例中为 alpha
  // first：第一次生成，不会增加版本号
  // 运行相关命令后，会自动打tag、生成changelog以及进行一次提交
```

## git commit 提交流程
严格按照 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/v1.0.0/) 规范进行commit message编写

**使用 [git cz](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly) 替换 git commit命令**
```shell
git add . 
git cz
```

![](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)