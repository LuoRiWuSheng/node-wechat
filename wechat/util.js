const xml2js = require('xml2js');
const Promise = require('bluebird');

exports.parseXMLAsync = function (xml) {
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, {trim: true}, (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        })
    })
};

function formatMessage(result) {
    const message = {};
    if (typeof result === 'object') {
        let keys = Object.keys(result);
        // console.log('============= test line  one =============');
        // console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            // console.log('============= test line  two =============');
            let item = result[keys[i]];
            let key = keys[i];
            // console.log('==========test line key ===============');
            // console.log(key);
            // console.log('==========test line item ===============');
            // console.log(item);
            if ((item instanceof Array) || (item.length === 0)) {
                if (item.length === 1) {
                    let val = item[0];
                    // console.log('val');
                    // console.log(val);
                    if (typeof val === 'object') {
                        message[key] = formatMessage(val)
                    } else {
                        message[key] = (val || '').trim();
                    }
                } else {
                    message[key] = [];
                    for (let j = 0; j < item.length; j++) {
                        message[key].push(formatMessage(item[j]));
                    }
                }
            }
            // console.log('============= test line  three =============');
        }
    }
    return message;
}

exports.formatMessage = formatMessage;