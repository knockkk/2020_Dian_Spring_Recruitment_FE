import React from 'react';
import './index.css';
import Recorder from 'js-audio-recorder';
import io from 'socket.io-client';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recorder: new Recorder({
                sampleBits: 16,           
                sampleRate: 16000,              
                numChannels: 1,                 
            }),
            content: [{
                client: "hi, I am client !",
                server: "hello, I am server !",
            }],
            recording: false,
        };
    }

    startRecord() {
        if(this.state.recording === false) {
            this.state.recorder.start().then(() => {}, 
            (error) => { console.log(`${error.name} : ${error.message}`); });
            this.setState({
                recording: true,
            });
        }
    }

    endRecord() {
        this.state.recorder.stop();
        var audio = this.state.recorder.getWAVBlob();
        let socket = io('http://127.0.0.1:3001');

        // 建立连接并监测事件
        socket.on('connect', () => {
            console.log('connect server success...');
            socket.emit('audio message', {audio: audio});
        });

        // 接收数据并更新
        socket.on('return message', (data) => {
            var msg = data.msg;
            var content = this.state.content;
            this.setState({
                content: content.concat([{
                    client: msg.client,
                    server: msg.server,
                }]),
                recording: false,
            });
        });

        // 断开连接并提示
        socket.on('disconnect', () => {
            console.log('...disconnect');
        })
    }

    generateContent() {
        var content = [];
        var length = this.state.content.length;
        var i = 0;

        for (i = 0; i < length; i++) {
            content.push(
                <div className="client">
                    <div>
                        {this.state.content[i].client}
                    </div>
                </div>
            );
            content.push(
                <div className="server">
                    <div>
                        {this.state.content[i].server}
                    </div>
                </div>
            );
        }
        return content;
    }
    
    render() {
        var content = this.generateContent();

        return(
            <div>
                <div className="buttons">
                    <button type="button" onClick={() => this.startRecord()}>
                        开始录音
                    </button>
                    <button type="button" onClick={() => this.endRecord()}>
                        结束发送
                    </button>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        );
    }
}

export default Main;