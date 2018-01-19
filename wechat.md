## 1. 订阅公众号（未解析XML格式数据）
+ 验证信息
```
{   signature: 'ed301d6514dec56dfbce6d3e3140c0f1dd7669fd',
    timestamp: '1516371220',
    nonce: '1324322299',
    openid: 'o23CW0iEh882P9udC_tYbNVV84tw' 
}
```
+ 返回的`xml`格式数据
```xml
<xml>
    <ToUserName><![CDATA[gh_59fefa121828]]></ToUserName>
    <FromUserName><![CDATA[o23CW0iEh882P9udC_tYbNVV84tw]]></FromUserName>
    <CreateTime>1516371220</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[subscribe]]></Event>
    <EventKey><![CDATA[]]></EventKey>
</xml>
```
## 2. 取消订阅公众号（未解析XML格式数据）
+ 验证信息
```
{ 
    signature: 'dd339ae94954d793ce7cc7fa8de86e9298cf5945',
    timestamp: '1516371191',
    nonce: '683697494',
    openid: 'o23CW0iEh882P9udC_tYbNVV84tw' 
}
```
+ 返回的`xml`格式数据
```xml
<xml>
    <ToUserName><![CDATA[gh_59fefa121828]]></ToUserName>
    <FromUserName><![CDATA[o23CW0iEh882P9udC_tYbNVV84tw]]></FromUserName>
    <CreateTime>1516371191</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[unsubscribe]]></Event>
    <EventKey><![CDATA[]]></EventKey>
</xml>
```

## 3. 订阅公众号（解析XML格式数据）
+ 验证信息
```
{
    signature: '8a537fdcb6a6877715a66441a64e3934be7a35d2',
    timestamp: '1516371652',
    nonce: '832221384',
    openid: 'o23CW0iEh882P9udC_tYbNVV84tw' 
}
```
+ 返回的`xml`格式数据
```xml
<xml>
    <ToUserName><![CDATA[gh_59fefa121828]]></ToUserName>
    <FromUserName><![CDATA[o23CW0iEh882P9udC_tYbNVV84tw]]></FromUserName>
    <CreateTime>1516371652</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[subscribe]]></Event>
    <EventKey><![CDATA[]]></EventKey>
</xml>
```
+ 解析后的`xml`格式数据
```
{
    xml:
        {
            ToUserName: ['gh_59fefa121828'],
            FromUserName: ['o23CW0iEh882P9udC_tYbNVV84tw'],
            CreateTime: ['1516371652'],
            MsgType: ['event'],
            Event: ['subscribe'],
            EventKey: ['']
        }
}    
```

## 4. 取消订阅公众号（解析XML格式数据）
+ 验证信息
```
{
    signature: 'ca7d831faa7bb3021878ccd085b5e62f38a6f47a',
    timestamp: '1516371641',
    nonce: '359349480',
    openid: 'o23CW0iEh882P9udC_tYbNVV84tw'
}
```     
+ 返回的`xml`格式数据   
```xml
<xml>
    <ToUserName><![CDATA[gh_59fefa121828]]></ToUserName>
    <FromUserName><![CDATA[o23CW0iEh882P9udC_tYbNVV84tw]]></FromUserName>
    <CreateTime>1516371641</CreateTime>
    <MsgType><![CDATA[event]]></MsgType>
    <Event><![CDATA[unsubscribe]]></Event>
    <EventKey><![CDATA[]]></EventKey>
</xml>
```
+ 解析后的`xml`格式数据
```
{
    xml:
        {
            ToUserName: ['gh_59fefa121828'],
            FromUserName: ['o23CW0iEh882P9udC_tYbNVV84tw'],
            CreateTime: ['1516371641'],
            MsgType: ['event'],
            Event: ['unsubscribe'],
            EventKey: ['']
        }
}
```
