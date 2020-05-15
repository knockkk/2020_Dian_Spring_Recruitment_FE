import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
/* 1.用于创建一个实体或收集信息。
2.需要对输入的数据类型进行校验时。 */
import './index.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {/* Login是个返回表单的函数 */
    const onFinish = values => {
        console.log('Success:', values);
        /* onSubmit 事件会在表单中的确认按钮被点击时发生。 */
    };/* onFinish让控制台在提交成功时输出Success:values? */

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };/* onFinishFailed让控制台在提交失败时输出Failed:errorInfo? */
    return (/* return的了一整个表的功能 */
        <div className="container">{/* 建立表单盒子 */}
            <div className='title'>Team Blog</div>
            <Form 
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                onSubmit="this.props.history.push('\Home')"
            >{/* 第一个表格单元的构成 */}
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* 第二个表格单元的构成 */}
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                    {/* 第三个表格单元的构成 */}
                <Form.Item {...tailLayout}>{/* 使用tailLayout样式 */}
                    <Button type="primary" htmlType="submit" >{/* 按钮的样式类型，提交表单，提交啥玩意啊？ */}
                        <Link to="/Home">Submit</Link> 
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
    
};
/* 定义输出接口，以便在其他文件中，复用组件 */
export default Login;
    
