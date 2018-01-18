const Koa = require("koa");
const path = require('path');
const wechat = require('./wechat/g');
const util = require('./libs/util');
const wechat_file = path.join(__dirname, './config/wechat.txt');

const config = {
    wechat: {
        appID: "******", // 你的appID
        appSecret: "*******", // 你的appSecret
        token: "weixinxuexiceshi",
        getAccessToken: function () {
            return util.readFileAsync(wechat_file);
        },
        saveAccessToken: function (data) {
            data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file, data);
        }
    }
};

const app = new Koa();

app.use(wechat(config.wechat));

app.listen(80);
console.log("the koa server is running at localhost:80");