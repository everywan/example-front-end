var _env = "dev"
if(process.env.NODE_ENV==='production'){
    _env = "prod"
}

const envConfigFile = "./" + _env + ".conf.js";
process.stdout.write('INFO: the env config file is '+ envConfigFile +'\n');

// 将require的配置文件原封不动export回出去
module.exports = require(envConfigFile);
