"use strict";
const exec = require("child_process").exec;
const co = require("co");
const ora = require("ora");
const prompt = require("co-prompt");
const config = require("../template");
const inquirer = require("inquirer");
const chalk = require("chalk");

module.exports = () => {
  co(function* () {
    // 模板名称 Array List
    const tplList = Object.keys(config.tpl);

    // 具体 inquirer 交互内容
    const promptList = [
      {
        type: "list",
        message: "请选择模板名称:",
        name: "TemplateName",
        choices: tplList,
      },
      {
        type: "input",
        message: "请输入应用名称:",
        name: "ProjectName",
      },
    ];

    // 获取模板名称与应用名称
    let tplName;
    let projectName;
    yield inquirer.prompt(promptList).then((answers) => {
      // 返回的结果
      tplName = answers.TemplateName;
      projectName = answers.ProjectName;
    });

    // 模板git url 与分支获取
    let gitUrl, branch;
    if (!config.tpl[tplName]) {
      console.log(chalk.red("\n × Template does not exit!"));
      process.exit();
    }
    gitUrl = config.tpl[tplName].url;
    branch = config.tpl[tplName].branch;

    // git命令，远程拉取项目并自定义项目名
    let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`;

    // loading 效果
    let loading = ora("Downloading template ...");
    loading.start();

    // 命令执行
    exec(cmdStr, (error, stdout, stderr) => {
      if (error) {
        console.log(error);
        process.exit();
      }
      loading.stop();
      console.log(chalk.green("\n √ download completed!"));
      console.log(`\n cd ${projectName} && npm install \n`);
      process.exit();
    });
  });
};
