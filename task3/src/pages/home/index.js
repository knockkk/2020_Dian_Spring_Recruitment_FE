import React from 'react'
import { Layout, Menu } from 'antd';
import './index.css'
import { FileTextOutlined, EditOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

async function getDate(i) {
    const response = await fetch("https://5e9c0a2810bf9c0016dd2581.mockapi.io/api/articles");//它是异步的，需要等待它返回response(一个流)
    const posts = await response.json();//用json函数将它转换为json

    const h2 = document.createElement('H2');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');

    h2.appendChild(document.createTextNode(posts[i].id));
    p.appendChild(document.createTextNode(posts[i].createdAt));
    p2.appendChild(document.createTextNode(posts[i].author));
    document.getElementById(i).appendChild(h2);
    document.getElementById(i + 4).appendChild(p);
    document.getElementById(i + 8).appendChild(p2);
    img.src = posts[i].avatar;
    document.getElementById(i + 12).appendChild(img);
    document.getElementsByClassName('emm')[i].style.display = 'block';
    document.getElementsByClassName('loader')[i].style.display = 'none';
}
//怎么改昂，待我看看什么row之类的再来改吧。。

for (var i = 0; i < 4; i++)
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
                    <div>
                        <div class='loader'><h1>loading...</h1></div>
                        <div class="content">
                            <h2 class='emm' >Title&nbsp;</h2>
                            <p id='0'></p>
                        </div>
                        <div id='4'></div>
                        <div id='8'></div>
                        <div id='12'></div></div>
                </div>
                <div txt='1'>
                    <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='1'></p>
                    </div>
                    <div id='5'></div>
                    <div id='9'></div>
                    <div id='13'></div>
                </div>
                <div txt='1'>
                    <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='2'></p>
                    </div>
                    <div id='6'></div>
                    <div id='10'></div>
                    <div id='14'></div>
                </div>
                <div txt='1'>
                    <div class='loader'><h1>loading...</h1></div>
                    <div class="content">
                        <h2 class='emm'>Title&nbsp;</h2>
                        <p id='3'></p>
                    </div>
                    <div id='7'></div>
                    <div id='11'></div>
                    <div id='15'></div>
                </div>
            </div>
            </Content>
        </Layout>

        );
    }
}

export default Home;
