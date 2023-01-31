```shell
yarn add -D commitizen cz-customizable @commitlint/config-conventional @commitlint/cli
```

1.安装
```shell
yarn add -D standard-version
```
2.命令，添加到 scripts 中
```json
{
  "release:peek": "standard-version --dry-run",
  "release:major": "standard-version --release-as major",
  "release:minor": "standard-version --release-as minor",
  "release:patch": "standard-version --release-as patch",
  "release:pre": "standard-version --prerelease alpha",
  "release:first": "standard-version --first-release",
}
```
```
  // peek：临时在命令行中看一下生成记录（不会有任何影响）
  // major、minor、patch：分别对应主版本、此版本和补丁版本，可以根据提交情况手动指定
  // pre：预览版本（抢先版本），可以指定前缀，示例中为 alpha
  // first：第一次生成，不会增加版本号
  // 运行相关命令后，会自动打tag、生成changelog以及进行一次提交
```
