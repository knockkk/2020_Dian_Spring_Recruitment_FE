import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { FileTextOutlined, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

async function getDate(i){
    const response = await fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles");//它是异步的，需要等待它返回response(一个流)
    const posts = await response.json();//用json函数将它转换为json

        const h2=document.createElement('H2');
        const p=document.createElement('p');
        const p2=document.createElement('p');
        const img=document.createElement('img');
        
        h2.appendChild(document.createTextNode(posts[i].id));
        p.appendChild(document.createTextNode(posts[i].createdAt));
        p2.appendChild(document.createTextNode(posts[i].author));
        if(i==0)
        { document.querySelector('#title').appendChild(h2);
        document.querySelector('#date').appendChild(p);
        document.querySelector('#author').appendChild(p2);
        img.src=posts[i].avatar;
        document.querySelector('#avatar').appendChild(img);}
        else if(i==1){
            document.querySelector('#title2').appendChild(h2);
        document.querySelector('#date2').appendChild(p);
        document.querySelector('#author2').appendChild(p2);
        img.src=posts[i].avatar;
        document.querySelector('#avatar2').appendChild(img);
        }
        else if(i==2)
        {
            document.querySelector('#title3').appendChild(h2);
        document.querySelector('#date3').appendChild(p);
        document.querySelector('#author3').appendChild(p2);
        img.src=posts[i].avatar;
        document.querySelector('#avatar3').appendChild(img);
        }
        else if(i==3)
        { document.querySelector('#title4').appendChild(h2);
        document.querySelector('#date4').appendChild(p);
        document.querySelector('#author4').appendChild(p2);
        img.src=posts[i].avatar;
        document.querySelector('#avatar4').appendChild(img);}
        document.getElementsByClassName('emm')[i].style.display='block';
        document.getElementsByClassName('loader')[i].style.display='none';
        //怎么改昂，待我看看什么row之类的再来改吧。。
}
for(var i=0;i<4;i++)
getDate(i);
class Home extends React.Component {
    render() {
        return (<Layout>
            <Menu selectedKeys={['post']} mode="horizontal" theme="dark">
                <Menu.Item key="post" icon={<FileTextOutlined />}>
                    帖子
                </Menu.Item>
                <Menu.Item key="out" icon={<EditOutlined />}>
                    <Link to="/Page" style={{ color: 'rgb(235, 235, 235,0.65)', }}>发布</Link>
                </Menu.Item>
            </Menu>
            <Content><div className="Block">
                <div txt='1'>
                <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm' >Title&nbsp;</h2>
                        <p id='title'></p>
                    </div>
                    <div id='date'></div>
                    <div id='author'></div>
                    <div id='avatar'></div>
                </div>
                <div txt='1'>
                <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='title2'></p>
                    </div>
                    <div id='date2'></div>
                    <div id='author2'></div>
                    <div id='avatar2'></div>
                </div>
                <div txt='1'>
                <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='title3'></p>
                    </div>
                    <div id='date3'></div>
                    <div id='author3'></div>
                    <div id='avatar3'></div>
                </div>
                <div txt='1'>
                <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='title4'></p>
                    </div>
                    <div id='date4'></div>
                    <div id='author4'></div>
                    <div id='avatar4'></div>
                </div>
            </div>
            </Content>
        </Layout>

        );
    }
}

export default Home;