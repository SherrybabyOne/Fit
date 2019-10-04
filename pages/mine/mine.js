import Ajax from './../../utils/request';
//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    this.setData({
      ...app.globalData
    })
    // if (app.globalData.hasUserInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // }
  },
  // 处理用户登录状态不一致的情况
  onShow: function () {
    if (this.data.hasUserInfo === app.globalData.hasUserInfo ) {
      return null;
    } else {
      const { hasUserInfo, userInfo } = app.globalData
      this.setData({
        userInfo,
        hasUserInfo,
        visible: false
      })
    }
  },

  // 用户点击登录/注册响应事件
  handleOpen: function () {
    this.setData({
      visible: true
    })
  },
  // 用户取消登录
  userLoginCancel: function () {
    this.setData({
      visible: false
    })
  },
  // 用户微信手机号登录
  userLoginWx: function (e) {
    console.log('用户微信绑定手机号登录')
  },
  // 用户使用其它手机号登录
  userLoginPhone: function () {
    wx.navigateTo({
      url: '/pages/mine/login/login'
    });
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
  // 我的设置
  setting: function () {
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
        if(result.confirm) {
          wx.clearStorage();
          this.setData({
            userInfo: null,
            hasUserInfo: false
          })
          app.globalData.userInfo = null;
          app.globalData.hasUserInfo = false
        }
      }
    })
  },
  data: {
    userInfo: null,
    hasUserInfo: false,
    visible: false
  },
})