// @flow
import React from 'react'
import {Form, Input, Button} from 'antd';
import './login.scss'
import { login }  from '../../api/user'
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: {
        userName: 'lyf233',
        password: '123123'
      }
    }
    this.inputChange = this.inputChange.bind(this)
    this.finish = this.finish.bind(this)
  }

  inputChange(e) {
    console.log('name ===> ', e, 'value ===> ', e.target.value)
    const _formData = this.state.formData
    _formData[e.target.id] = e.target.value
    this.setState({
      formData: _formData
    })
    console.log('input change state ===> ', this.state.formData)
  }

  finish(e) {
    console.log('login ===> ', e)
    console.log('formData ===> ', this.state.formData)
    console.log('process env ===> ', process.env )
    const params = new FormData()
    params.append('userName', e.userName)
    params.append('password', e.password)
    login(params).then(res => {
      const data = res.data
      if (data.code === 200) {
        this.props.history.push({
          pathname: '/',
          state: {
            type: 678
          }
        })
      } else {
        alert(data.message)
      }
      console.log('login success => ', data)
    }).catch(err => {
      console.log('login error => ', err)
    })
  }

  render() {
    return (
      <div className={'login'}>
        <div className={'form-box'}>
          <div className={'form-title'}>
            登录管理系统
          </div>
          <Form labelCol={{span: 6}} labelAlign={'left'} wrapperCol={{span: 18}} initialValues={this.state.formData} onFinish={this.finish}>
            <Form.Item label={'用户名'} name={'userName'}  rules={[{required: true, message: '用户名不能为空'}]}>
              <Input type={'text'} placeholder={'请输入用户名'} onChange={this.inputChange}/>
            </Form.Item>
            <Form.Item label={'密码'} name={'password'}  rules={[{required: true, message: '密码不能为空'}]}>
              <Input type={'password'} placeholder={'请输入密码'} onChange={this.inputChange}/>
            </Form.Item>
            <Button className={'login-btn'} type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login
