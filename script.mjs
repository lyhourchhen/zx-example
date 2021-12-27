#!/usr/bin/env zx
const fs = require("fs");
const yaml = require("js-yaml");
const { hi, nano } = require("./base");

const main = async () => {
  try {
    await hi();
    console.log(nano);
    let fileContents = fs.readFileSync("./variable.yaml", "utf8");
    let data = yaml.load(fileContents);

    console.log(data.apps);

    const apps = data.apps;
    apps.map((res) => {
      // $`mkdir ${res}`;
      $`echo ${res}`;
    });
    console;
  } catch (e) {
    console.log(e);
  }
};

await main();
