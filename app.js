import Ajax from './utils/request'
//app.js
App({
  onLaunch: function () {
    wx.checkSession({
      // session_key未过期
      success: ()=>{
        try {
          this.getUserInfo()
        } catch (e) {
          console.log(e)
        }
      },
      // session_key已过期
      fail: ()=>{
        this.getUserInfo()
      }
    });
  },
  // 若用户没有登录退出的时候清除storage
  onHide: function () {
    if (!this.globalData.hasUserInfo) {
      wx.clearStorage();
    }
  },
  // 判断token是否存在,若存在请求用户信息,反之则跳转到我的页面
  getUserInfo: function() {
    const token = wx.getStorageSync('token')
    if (token) {
      // 获取用户userInfo
      Ajax({
        url: 'user/userInfo',
        method: 'GET',
        header: {
          token
        }
      }).then(res => {
        this.globalData.hasUserInfo = true
        this.globalData.userInfo = res
        console.log(res, "后端返回的用户信息")
      })
      // 获取用户clothes
      Ajax({
        url: 'clothes/clothes',
        method: 'GET',
        header: {
          token
        }
      }).then(res => {
        console.log(res)
      })
      // 获取用户搭配
    } else {
      wx.switchTab({
        url: '/pages/mine/mine'
      })
    }
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false
  }
})