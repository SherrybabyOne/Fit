const baseUrl = 'https://ssl.lyzwhh.top/'

const Ajax = (options) => {
  return new Promise((resolve, reject) => {
    const {url, method, data, header} = options;
    wx.request({
      url: baseUrl + url,
      method,
      data: data,
      header: header,
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data.data)
        } else {
          reject('后端接口返回错误')
        }
      },
      fail: (res) => {
        console.log('error', res)
      }
    })
  })
}

export default Ajax;