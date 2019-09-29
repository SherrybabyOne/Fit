import Ajax from './../../utils/request';
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.hasUserInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (!this.data.canIUse) {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          app.globalData.hasUserInfo = true
        }
      })
    }
  },
  // 用户授权
  onGetUserInfo: function( e ) {
    // 用户没有授权,授权失败
    if (!e.detail.userInfo) {
      console.log('用户拒绝授权!')
    } else {
      // 用户授权成功
      // 调用wx.login拿到token存在storage里
      wx.login({
        timeout:10000,
        success: (res)=>{
          if (res.code) {
            // 发送网络请求
            Ajax({
              url: 'user/code2session',
              method: 'POST',
              data: {
                code: res.code
              }
            }).then(res => {
              // 获取token
              const { token } = res
              // token存到storage里
              wx.setStorage({
                key: "token",
                data: token
              })
              // 获取衣服列表
              Ajax({
                url: 'clothes/clothes',
                method: 'GET',
                header: {
                  token
                }
              }).then(res => {
                console.log(res)
              })
            })
          } else {
            console.log('登录失败!' + res.errMsg)
          }
        },
        fail: ()=>{
          console.log('接口调用失败')
        }
      });      

      const userInfo = e.detail.userInfo
      app.globalData.userInfo = userInfo
      app.globalData.hasUserInfo = true
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  // 我的发布
  myRelease: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 我的喜欢
  myLikes: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 搭配请求
  collocationRequest: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 我的请求
  myRequest: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 修改资料
  updateUser: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 常见问题
  commonProblems: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 建议反馈
  suggestedFeedback: function () {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录用户！',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '页面未开发',
        showCancel: false,
        confirmText: '再见'
      })
    }
  },
  // 用户退出
  handleLogOut: function () {
    wx.showModal({
      title: '您确定要退出🐎',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        // 用户确认退出
        console.log(this)
        if(result.confirm){
          wx.clearStorage();
          this.setData({
            userInfo: {},
            hasUserInfo: false
          })
          app.globalData.userInfo = null;
          app.globalData.hasUserInfo = false
        }
      }
    })
  }
})