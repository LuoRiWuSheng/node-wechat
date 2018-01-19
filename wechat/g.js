const sha1 = require("sha1");
const Wechat = require('./wechat');
const getRawBody = require('raw-body');
const util = require('./util');

module.exports = function (ops) {
    let wechat = new Wechat(ops);
    return function* (next) {
        let that = this;
        let token = ops.token;
        let signature = this.query.signature;
        let nonce = this.query.nonce;
        let timestamp = this.query.timestamp;
        let echostr = this.query.echostr;
        let str = [token, timestamp, nonce].sort().join("");
        let sha = sha1(str);
        console.log(this.query);
        let method = String(this.method).toUpperCase();
        if (method === 'GET') {
            if (sha === signature) {
                this.body = echostr + "";
            } else {
                this.body = "wrong";
            }
        } else if (method === 'POST') {
            if (sha !== signature) {
                this.body = "wrong";
                return false;
            } else {
                let data = yield getRawBody(this.req, {
                    length: this.length,
                    limit: '1mb',
                    encoding: this.charset
                });
                let content = yield util.parseXMLAsync(data);
                let message = util.formatMessage(content.xml);
                console.log('message');
                console.log(message);
                if (message.MsgType === 'event') {
                    if (message.Event === 'subscribe') {
                        console.log('debugger line-----')
                        let now = new Date().getTime();
                        let backMessage = 'ennnn, 。。。。。';
                        that.status = 200;
                        that.type = 'application/xml';
                        that.body = '<xml>\n' +
'                                        <ToUserName><![CDATA[' + message.FromUserName + ']]></ToUserName>\n' +
'                                        <FromUserName><![CDATA[' + message.ToUserName + ']]></FromUserName>\n' +
'                                        <CreateTime>' + now + '</CreateTime>\n' +
'                                        <MsgType><![CDATA[text]]></MsgType>\n' +
'                                        <Content><![CDATA['+ backMessage + ']]></Content>\n' +
'                                    </xml>';
                    }
                }
            }
        }
    }
};