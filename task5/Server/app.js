let httpServer = require('http').Server();
let io = require('socket.io')(httpServer);
httpServer.listen(3001);
console.log("start...");

io.on('connection', (socket)=>{
    function responseMsg(ask) {
        var response = ask.slice(0, ask.length - 1);
        response = response.replace("你", "我");
        response = response.replace("吗", " ");
        return response;
    }

    function sendToBaidu(audio) {
        var AipSpeechClient = require("baidu-aip-sdk").speech;
    
        var APP_ID = "19891194";  // 你的 App ID
        var API_KEY = "zxIIU4eMa1QaGUGTZbUefXSM";  // 你的 Api Key
        var SECRET_KEY = "7VihbIwf73aTgLzktZpbnsKsbYeYulo2";  // 你的 Secret Key
        var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY);
    
        var HttpClient = require("baidu-aip-sdk").HttpClient;
        HttpClient.setRequestInterceptor(function(requestOptions) {
            console.log('check parameter: ' + requestOptions);
            requestOptions.timeout = 5000;
            return requestOptions;
        });
    
        let voiceBuffer = new Buffer.from(audio);
        client.recognize(voiceBuffer, 'wav', 16000).then(function (result) {
            var returnResult = JSON.stringify(result);
            var r = JSON.parse(returnResult);
            console.log("baidu ai result: " + r.result[0]);

            // 发送数据
            var sendMsg = {
                client: r.result[0],
                server: responseMsg(r.result[0]),
            };
            
            socket.emit('return message', {'msg': sendMsg});
        }, function(err) {
            console.log(err);
        });  
    }

    console.log('connect success...');

    // 建立连接并获取语音数据
    socket.on('audio message', (data) => {
        console.log("receive audio from client");
        sendToBaidu(data.audio)
    });
    
    // 断开连接提示
    socket.on('disconnect', ()=>{
        console.log('...disconnect');
    });
})