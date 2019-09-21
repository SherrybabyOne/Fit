import Ajax from './../../utils/request'
const app = getApp()

Page({
  onLoad: function () {

  },
  onShow: function () {
    this.data.hasUserInfo === app.globalData.hasUserInfo ?
      null
        :
      this.setData({
        hasUserInfo: app.globalData.hasUserInfo
      })
    if (app.globalData.hasUserInfo) {
      const token = wx.getStorageSync("token");
      Ajax({
        url: 'moment/moment',
        method: 'GET',
        header: {
          token
        }
      }).then( res => {
        const data = res.data
        this.setData({
          data
        })
      })
    }
  },
  // 发布圈子
  releaseCircle: function () {
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
  data: {
    hasUserInfo: false,
    data: null
  }
})