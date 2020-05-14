import React from 'react'
import { Menu,Card,Col,Row} from 'antd';
import { FileTextOutlined, EditOutlined } from '@ant-design/icons';
//import {Router , Route , Link} from 'react-router';
import './index.css'



class Content extends React.Component{

    handle = e =>{
        console.log('click',e);
        this.setState({
            current:e.key,
        });
    };

    constructor(props) {
        super(props);
    
        this.state = {
          current :[],
        };
      }

      componentDidMount() {
            fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles")
             .then((res) => res.json())
             .then(data => {
             console.log(data);
             let content = '';
             let imgSrc = '';
             let time = '';
             let author = '';
             let title = '';
             data.forEach((user) => {
                 if(user.id==="1"){
              content += `${user.content}`;
              time += `${user.createdAt}`;
              imgSrc = `${user.avatar}`;
              author =`${user.author}`;
              title = `${user.title}`;
                 }
             })
             document.getElementById('content1').innerHTML = content;
             document.getElementById('time1').innerHTML = time;
             document.getElementById('img1').src = imgSrc;
             document.getElementById('author1').innerHTML='author:'+author;
             document.getElementById('card1').title=title;
             })
             .catch(err => console.log(err));
    
      }

      componentWillMount(){
        fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles")
        .then((res) => res.json())
        .then(data => {
        console.log(data);
        let content = '';
        let imgSrc = '';
        let time = '';
        let author = '';
        let title = '';
        data.forEach((user) => {
            if(user.id==="2"){
         content += `<li>${user.content}</li>`;
         time += `<li>${user.createdAt}</li>`;
         imgSrc = `${user.avatar}`;
         author =`${user.author}`;
         title = `${user.title}`;
            }
        })
        document.getElementById('content2').innerHTML = content;
        document.getElementById('time2').innerHTML = time;
        document.getElementById('img2').src = imgSrc;
        document.getElementById('author2').innerHTML='author:'+author;
        document.getElementById('card2').title=title;
        })
        .catch(err => console.log(err));
      }

    render() {

        return (
        <div>
        <header className="header">
          <Menu onclick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
              <Menu.Item key='post'>
              <FileTextOutlined />
                  帖子
              </Menu.Item>
              <Menu.Item key="publish">
              <EditOutlined />
                  发布
              </Menu.Item>
          </Menu>
        </header> 
        <div>
            <div className="card-container">
                <Row gutter={16}>
                    <Col span={6}>
                        <Card title="Title1" className="card" id="card1">
                            <p className="time" id="time1">2020-2-24 18:30</p>
                            <img id="img1" src="" alt='这有一张图片' height='50px' width='50px'></img>
                            <p id="author1"></p>
                            <p id="content1">content1</p>
                            
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Title2" className="card" id="card2">
                            <p className="time" id="time2">2020-2-24 18:30</p>
                            <img id="img2" src="" alt='这有一张图片' height='50px' width='50px'></img>
                            <p id="author2"></p>
                            <p id="content2">content1</p>
                            
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Title3" className="card" id="card3">
                            <p className="time">2020-2-24 18:30</p>
                            content3
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card title="Title4" className="card" id="card4">
                            <p className="time">2020-2-24 18:30</p>
                            content4
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        </div>
        );
    }
}

/*var xhr = '';
if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest();
} else {
    //xhr = new ActiveXObject('Microsoft.XMLHttp');
}
window.onload = function () {
        xhr.open('get','https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles',true);

        //xhr.send( 'memberId='+ username + '&&password=' + password );
        xhr.onreadystatechange = function () {
            // readyState: 
            //     0: 请求未初始化
//                 1: 服务器连接已建立
//                 2: 请求已接收
//                 3: 请求处理中
//                 4: 请求已完成，且响应已就绪
//             status:
//                 200: 'ok'
//                 404: 未找到页面或接口
//                 xhr.responseText: 后端返回的数据
                if(xhr.readyState === 4 && xhr.status === 200 ) {
                    document.getElementById('card1').innerHTML = xhr.responseText;
                    var json = JSON.parse(xhr.responseText);
                    console.log(json);
                }

        }

}*/


/*window.onload = function(){getExternal1();getExternal2();}

function getExternal1(){
 fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles")
  .then((res) => res.json())
  .then(data => {
  console.log(data);
  let content = '';
  let imgSrc = '';
  let time = '';
  let author = '';
  let title = '';
  data.forEach((user) => {
      if(user.id==="1"){
   content += `<li>${user.content}</li>`;
   time += `<li>${user.createdAt}</li>`;
   imgSrc = `${user.avatar}`;
   author =`${user.author}`;
   title = `${user.title}`;
      }
  })
  document.getElementById('content1').innerHTML = content;
  document.getElementById('time1').innerHTML = time;
  document.getElementById('img1').src = imgSrc;
  document.getElementById('author1').innerHTML='author:'+author;
  document.getElementById('card1').title=title;
  })
  .catch(err => console.log(err));
}



function getExternal2(){
    fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles")
     .then((res) => res.json())
     .then(data => {
     console.log(data);
     let content = '';
     let imgSrc = '';
     let time = '';
     let author = '';
     let title = '';
     data.forEach((user) => {
         if(user.id==="2"){
      content += `<li>${user.content}</li>`;
      time += `<li>${user.createdAt}</li>`;
      imgSrc = `${user.avatar}`;
      author =`${user.author}`;
      title = `${user.title}`;
         }
     })
     document.getElementById('content2').innerHTML = content;
     document.getElementById('time2').innerHTML = time;
     document.getElementById('img2').src = imgSrc;
     document.getElementById('author2').innerHTML='author:'+author;
     document.getElementById('card2').title=title;
     })
     .catch(err => console.log(err));
   }*/






export default Content;











