import React from 'react'
import './add.scss'

class Add extends React.Component {
    constructor() {
      super();
      this.state = {
        name: '',
        mobile: '',
        sex: ''
      }
      this.inputChange = this.inputChange.bind(this)
      this.submit = this.submit.bind(this)
    }

  inputChange(e) {
      const data = e.target
      this.setState({
        [data.name]: data.value
      })
    console.log(e,'-----', data.value)
  }
  submit() {
      const params = {
        name: this.state.name,
        mobile: this.state.mobile,
        sex: this.state.sex
      }
    console.log('params ===> ', params)
  }
  render() {
    return (
      <div className={'add'}>
        <div className={'form'}>
          <div className={'input-group'}>
            <div className={'label'}>姓名</div>
            <div className={'value'}>
              <input className={'input-text'} placeholder={'请输入'} name={'name'} value={this.state.name} onChange={this.inputChange}/>
            </div>
          </div>
          <div className={'input-group'}>
            <div className={'label'}>手机</div>
            <div className={'value'}>
              <input className={'input-text'} placeholder={'请输入'} name={'mobile'} value={this.state.mobile} onChange={this.inputChange}/>
            </div>
          </div>
          <div className={'input-group'}>
            <div className={'label'}>性别</div>
            <div className={'value'}>
              <input className={'input-text'} placeholder={'请输入'} name={'sex'} value={this.state.sex} onChange={this.inputChange}/>
            </div>
          </div>
          <div className={'btn submit-btn'} onClick={() => this.submit()}>添加</div>
        </div>
      </div>
    )
  }
}

export default Add
