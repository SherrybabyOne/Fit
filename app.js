import Ajax from './utils/request'
//app.js
App({
  onLaunch: function () {
    wx.checkSession({
      // session_key未过期
      success: (res)=>{
        try {
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
          }
        } catch (e) {
          console.log(e)
        }
      },
      // session_key已过期
      fail: ()=>{
        // 跳转到登录窗口
        wx.switchTab({
          url: '/pages/mine/mine'
        })
        // // 登录
        // wx.login({
        //   timeout:10000,
        //   success: (res)=>{
        //     if (res.code) {
        //       // 发送网络请求
        //       Ajax({
        //         url: 'user/code2session',
        //         method: 'POST',
        //         data: {
        //           code: res.code
        //         }
        //       }).then(res => {
        //         const { token } = res
        //         wx.setStorage({
        //           key: "token",
        //           data: token
        //         })
        //       })
        //     } else {
        //       console.log('登录失败!' + res.errMsg)
        //     }
        //   },
        //   fail: ()=>{
        //     console.log('接口调用失败')
        //   }
        // });
      }
    });
  },
  onHide: function () {
    if (!this.globalData.hasUserInfo) {
      wx.clearStorage();
    }
  },
  globalData: {
    userInfo: null,
    hasUserInfo: false
  }
})