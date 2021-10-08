// @flow
import React from 'react'
import {Button, DatePicker, Form, Input, Radio} from 'antd'
import './index.scss'
import moment from 'moment'
import 'moment/locale/zh-cn'
import locale from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd/es';
import cartoon from '../../assets/image/cartoon.jpg'
class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '茉莉花',
      time: '',
      sexOptions: [
        {
          label: '男',
          value: '1'
        },{
          label: '女',
          value: '0'
        }
      ],
      formData: {
        date: moment(new Date()).format('YYYY-MM-DD'),
        name: '',
        sex: '1'
      }
    }
  }

  componentDidMount() {
    const params = this.props.history.location.state
    console.log('componentDidMount', params)
  }

  flowerFunc() {
    if (this.state.name === '茉莉花') {
      this.setState({
        name: '玫瑰花'
      })
    } else if (this.state.name === '玫瑰花') {
      this.setState({
        name: '牵牛花'
      })
    } else if (this.state.name === '牵牛花') {
      this.setState({
        name: '茉莉花'
      })
    }
    console.log()
  }

  finish(e) {
    console.log('form submit ===> ', e)
  }

  dateChange(e,str) {
    const formData = this.state.formData
    formData.date = str
    this.setState({
      formData: formData
    })
    console.log('date change ===> ', this.state.date, '------', str)
    console.log('date change state ===> ', this.state.formData)
  }

  textChange(e) {
    const formData = this.state.formData
    formData.name = e.target.value
    this.setState({
      formData: formData
    })
    console.log('text change ===> ', e.target.value)
    console.log('text change state ===> ', this.state.formData)
  }

  radioChange(e) {
    console.log('radio change ===> ', e.target.value)
  }

  render() {
    return (
      <div className={'index'}>
        <div className={'page-title'}>首页</div>
        <img src={cartoon}/>
        <div id={'clack'}>
          <Form className={'search-form'}
                labelCol={8}
                wrapperCol={16}
                initialValues={this.state.formData}
                onFinish={this.finish}
            >
            <Form.Item label={'日期'} name={'date'} rules={[{required: true, message: '请选择日期'}]}>
              <ConfigProvider locale={locale}>
                <DatePicker
                  className={'input-datepicker'}
                  placeholder={'请输入'}
                  picker={'date'}
                  format={'YYYY-MM-DD'}
                  defaultValue={moment(this.state.formData.date, 'YYYY-MM-DD')}
                  onChange={this.dateChange.bind(this)}/>
              </ConfigProvider>
            </Form.Item>
            <Form.Item label={'姓名'} name={'name'} rules={[{required: true, message: '请填写姓名'}]}>
              <Input className={'input-text'} placeholder={'请输入'} onChange={this.textChange.bind(this)}/>
            </Form.Item>
            <Form.Item label={'性别'} name={'sex'}>
              <Radio.Group options={this.state.sexOptions} onChange={this.radioChange.bind(this)}></Radio.Group>
            </Form.Item>
            <Button className={'search-btn'} type={'primary'} htmlType={'submit'}>提交</Button>
          </Form>
        </div>
      </div>
    )
  }
}


export default Index
