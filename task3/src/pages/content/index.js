import React from 'react'
import { Menu,Card,Col,Row} from 'antd';
import { FileTextOutlined, EditOutlined } from '@ant-design/icons';
import './index.css'



class Content extends React.Component{

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
             let content2 ="";
             let imgSrc = '';
             let imgSrc2='';
             let time = '';
             let time2='';
             let author = '';
             let author2='';
             let title = '';
             let title2='';
             data.forEach((user) => {
                 if(user.id==="1"){
              content += `${user.content}`;
              time += `${user.createdAt}`;
              imgSrc = `${user.avatar}`;
              author =`${user.author}`;
              title = `${user.title}`;
                 }
                 else if(user.id==="2"){
                    content2 += `${user.content}`;
                    time2 += `${user.createdAt}`;
                    imgSrc2 = `${user.avatar}`;
                    author2 =`${user.author}`;
                    title2 = `${user.title}`;
                 }
             })
             document.getElementById('content1').innerHTML = content;
             document.getElementById('time1').innerHTML = time;
             document.getElementById('img1').src = imgSrc;
             document.getElementById('author1').innerHTML='author:'+author;
             document.getElementById('card1').title=title;
             document.getElementById('content2').innerHTML = content2;
             document.getElementById('time2').innerHTML = time2;
             document.getElementById('img2').src = imgSrc2;
             document.getElementById('author2').innerHTML='author:'+author2;
             document.getElementById('card2').title=title2;

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


export default Content;











