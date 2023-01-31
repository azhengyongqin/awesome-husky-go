module.exports = {
    types: [
        {value: 'feat', name: '✨  feat:     新功能', emoji: '✨',},
        {value: 'fix', name: '🐞  fix:      修复', emoji: '🪲',},
        {value: 'docs', name: '📚  docs:     文档变更', emoji: '📝',},
        {value: 'style', name: '🎨  style:    代码格式(不影响代码运行的变动)', emoji: '🎨',},
        {value: 'refactor', name: '💡  refactor: 重构(对代码和项目结构的重构)', emoji: '💡',},
        {value: 'perf', name: '⚡️  perf:     性能优化', emoji: '⚡️',},
        {value: 'test', name: '📌  test:     增加测试', emoji: '📌',},
        {value: 'chore', name: '🤖  chore:    构建过程或辅助工具的变动', emoji: '🤖',},
        {value: 'revert', name: '🔙  revert:   回退', emoji: '🔙'},
        {value: 'build', name: '🛠️  build:    打包', emoji: '🛠️'},
        {value: 'ci', name: '🎡  ci:    与CI有关的变化', emoji: '🎡'},
        {value: 'release', name: '🚩  release:    创建一个发布提交', emoji: '🚩',},
    ],
    scopes: [],
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // 消息步骤
    messages: {
        type: '请选择提交类型:',
        scope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填):',
        body: '请输入详细描述(可选):',
        footer: '请输入要关闭的issue，例如："fix #123" "re #123" (可选):',
        confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
    },
}
