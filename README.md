# 说明

    一键通过指令拉取git上react模板的初级脚手架工具

# 安装

    npm i @wywk/react-cli -g
    *说明：前提npm源是：registry http://registry-npm.wywk.cn/

# npm 源设置

    npm i nrm -g
    nrm add wywk http://registry-npm.wywk.cn/ (新增源：nrm add <源名称> <源地址>)
    nrm use wywk
    nrm ls

# 脚手架使用

    --usages:
        wy-react-cli <command>

    -options:
        -V, --version
        -h, --help

    --command:
        add|a 添加模板
        list|l 列出模板
        delete|d 删除模板
        init|i 初始化一个应用

# 脚手架的更新与发布

    git push & npm login & npm publish

# 项目代码提交规范与 git 日志

    npm run commit -> 代替 git commit -m 'log'
    npm run gitlog -> 添加CHANGELOG.md 日志记录

# 注意

    bin/wywk-react-cli文件 需要添加片段标识符 “#!/usr/bin/env node --harmony”，告知脚本使用Node执行。 --harmony 启用harmony 模式
    没有就会报错：没有应用程序与此操作的指定文件有关联。所在位置 C:\Users\101202\AppData\Roaming\npm\wywk-react-cli.ps1:10 字符: 1- & "$basedir/node_modules/wywk-cli/bin/wywy-react-cli"   $args
