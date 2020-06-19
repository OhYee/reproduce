const fs = require('fs');
const path = require('path');
const { generateTheme, getLessVars, isValidColor } = require('antd-theme-generator');

async function main() {
    var themes = {};
    const files = fs.readdirSync(path.join(__dirname, './node_modules/antd/lib', 'style/themes'));
    const reg = /(.*)\.less/;
    files.map((file) => {
        const res = reg.exec(file);
        if (!!res && res[1] !== 'index') {
            const name = res[1];
            const filepath = path.join(__dirname, './node_modules/antd/lib', 'style/themes', file);
            themes[name] = getLessVars(filepath);
        }
    });

    const keys = Object.keys(themes.dark);
    console.log(keys);

    const args = {
        antDir: path.join(__dirname, './node_modules/antd'),
        antdStylesDir: undefined,
        stylesDir: path.join(__dirname, './theme'),
        varFile: path.join(__dirname, './theme/vars.less'),
        outputFilePath: path.join(__dirname, './color.less'),
        cssModules: false,
        themeVariables: keys,
        customColorRegexArray: [],
    };
    await generateTheme(args);

    const data = await fs.readFileSync("./color.less");
    console.log("\n");
    console.log("👇These backgrond color are unexcepted");
    console.log(data.toString().split("\n").filter(line => /ant-tag-.*colorPalette/.test(line)).join("\n"))
}
main()