//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    userInfo: {},
    // logged: false,
    // takeSession: false,
    // requestResult: ''
    imgUrls: [
      '/images/image1.jpg',
      '/images/image8.jpg',
      '/images/image12.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    barList: [{
      id: 1,
      title: '蜂蜜功效',
      icon: '/images/honey1.png',
      url: ''
    }, {
      id: 2,
      title: '鉴别真假',
      icon: '/images/honey2.png',
      url: ''
    }, {
      id: 3,
      title: '蜂蜜购买',
      icon: '/images/honey3.png',
      url: ''
    }, {
      id: 4,
      title: '联系我们',
      icon: '/images/message.png',
      url: '/pages/contact/contact'
    }]


  },
  goPage(e) {
    var url = e.currentTarget.dataset.url
    if (url) {
      wx.switchTab({
        url: url,
      })
    }
  }
})
