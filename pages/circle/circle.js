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
        console.log(res.data)
        const data = res.data
        this.setData({
          data
        })
      })
    }
  },
  data: {
    hasUserInfo: false,
    data: null
  }
})