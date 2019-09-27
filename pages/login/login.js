import Ajax from './../../utils/request'

const app = getApp();

Page({
  onLoad: function() {

  },
  onShow: function() {

  },
  data: {
    inputNumber: null,
    inputVerify: null,
    disabled: false,
    verifyText: '获取验证码'
  },
  // 手机号输入监听
  bindKeyInput: function(e) {
    this.setData({
      inputNumber: e.detail.value
    })
  },
  // 手机验证码验证函数
  bindVerify: function() {
    this.setData({
      verifyText: '60s',
      disabled: true
    })
    let time = 60
    const set = setInterval(() => {
      time--
      this.setData({
        verifyText: time + 's'
      })
    }, 1000)
    setTimeout(() => {
      this.setData({
        verifyText: '重新获取验证码',
        disabled: false
      })
      clearInterval(set)
    }, 60000)
    Ajax({
      url: 'user/getVCode',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: {
        phone: this.data.inputNumber
      }
    }).then(res => {
      console.log(res, 'res')
    })
  },
  // 手机验证码输入监听
  bindVerifyInput: function(e) {
    this.setData({
      inputVerify: e.detail.value
    })
  },
  // 登录监听函数
  bindLogin: function() {
    const { inputNumber, inputVerify } = this.data
    Ajax({
      url: 'user/registerByVCode',
      data: {
        phone: inputNumber,
        VCode: inputVerify
      },
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
    })
  }
})
