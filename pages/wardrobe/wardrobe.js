// //index.js
// Page({
//   data: {
//     text: "This is page data."
//   },
//   onLoad: function(options) {
//     // 页面创建时执行
//   },
//   onShow: function() {
//     // 页面出现在前台时执行
//   },
//   onReady: function() {
//     // 页面首次渲染完毕时执行
//   },
//   onHide: function() {
//     // 页面从前台变为后台时执行
//   },
//   onUnload: function() {
//     // 页面销毁时执行
//   },
//   onPullDownRefresh: function() {
//     // 触发下拉刷新时执行
//   },
//   onReachBottom: function() {
//     // 页面触底时执行
//   },
//   onShareAppMessage: function () {
//     // 页面被用户分享时执行
//   },
//   onPageScroll: function() {
//     // 页面滚动时执行
//   },
//   onResize: function() {
//     // 页面尺寸变化时执行
//   },
//   onTabItemTap(item) {
//     // tab 点击时执行
//     console.log(item.index)
//     console.log(item.pagePath)
//     console.log(item.text)
//   },
//   // 事件响应函数
//   viewTap: function() {
//     this.setData({
//       text: 'Set some data for updating view.'
//     }, function() {
//       // this is setData callback
//     })
//   },
//   // 自由数据
//   customData: {
//     hi: 'MINA'
//   }
// })
import Ajax from './../../utils/request'
const app = getApp()

Page({
  onLoad: function () {
    if (app.globalData.hasUserInfo) {
      this.setData({
        hasUserInfo: true
      })
    }
  },
  // 页面出现在前台时运行
  // 判断当前用户是否已经登录
  onShow: function () {
    this.data.hasUserInfo === app.globalData.hasUserInfo ?
      null
        :
      this.setData({
        hasUserInfo: app.globalData.hasUserInfo
      })
  },
  // 用户未登录情况下,点击登录
  handleLogin: function () {
    wx.switchTab({
      url: '/pages/mine/mine'
    })    
  },
  // 大类切换
  handleChangeClass: function ({detail}) {
    this.setData({
      current_class: detail.key
    })
  },
  // 衣服切换
  handleChangeClothes: function ({detail}) {
    this.setData({
      current_clothes: detail.key
    })
  },
  // 搭配切换
  handleChangeSuits: function ({detail}) {
    this.setData({
      current_suits: detail.key
    })
  },
  data: {
    hasUserInfo: false,
    current_class: 'tab1',
    current_clothes: 'tab1',
    current_suits: 'tab1',
    clothes: {
      a: [
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/a.png'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/b.png'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/c.png'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/d.png'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/a/e.jpg'
        }
      ],
      b: [
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/b/a.jpeg'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/b/b.jpeg'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/b/c.jpeg'
        },
        {
          pic_url: 'http://blog.sherrybaby.club/image/fit/b/d.jpeg'
        }
      ],
      c: [

      ],
      d: [
        
      ],
      e: [

      ],
      f: [
        
      ],
    }
  }
})