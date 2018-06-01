// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeindex: {
      type: [String, Number]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [{
      index: 1,
      title: '首页',
      path: '/pages/index/index',
      icon: ''
    }, {
      index: 2,
      title: '发现',
      path: '/pages/find/find',
      icon: ''
    }, {
      index: 3,
      title: '我的',
      path: '/pages/contact/contact',
      icon: ''
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goPage(event) {
      console.log(event)
      var path = event.currentTarget.dataset.path
      wx.navigateTo({
        url: path,
      })
    }
  }
})
