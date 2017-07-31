// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputdata:"",
    history: ["95820102100－宝马", "95820102102－保时捷", "95820102103－保时捷","95820102104－保时捷"],
    hothistory: ["95820102108－宝马","95820102106－保时捷"],
    img_urls: [
      "http://d1.xcar.com.cn/attached/image/20160929/20160929155858_35240.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160029_26399.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929155928_68103.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160201_31895.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160229_19490.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929155858_35240.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160029_26399.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929155928_68103.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160201_31895.jpg",
      "http://d1.xcar.com.cn/attached/image/20160929/20160929160229_19490.jpg"
    ],
    interval: 5000,
    duration: 2000,

    contents: [],
    contentslist: [],
    new_pic: [
      "http://pic.xcarimg.com/img/07news/201610/wNdmGPDBGm1475580976311755147558097631.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201610/qnDMIK50ud1475464258081744147546425808.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/GSJZ0C7c3x1475116821458482147511682145.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/CtdlTtd2El1475067775454577147506777545.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/mvaZ75mVWE1473064107454160147306410745.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/VxAsOdBCh31473237548487414147323754848.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201610/wNdmGPDBGm1475580976311755147558097631.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201610/qnDMIK50ud1475464258081744147546425808.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/GSJZ0C7c3x1475116821458482147511682145.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/CtdlTtd2El1475067775454577147506777545.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/mvaZ75mVWE1473064107454160147306410745.jpg-200x150.jpg",
      "http://pic.xcarimg.com/img/07news/201609/VxAsOdBCh31473237548487414147323754848.jpg-200x150.jpg"
    ],

    load: false
  },
  goSearch:function(e){
    let search_input = e.detail.value
    let obj = {
      "kw": search_input,
      "pi":2,
      "pz":20
    }
    let that = this
    console.log(search_input) 
    wx.request({
      url: 'http://v5.pc.duomi.com/search-ajaxsearch-searchall',
      data: obj,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        that.setData({
          contents: res.data.artists,
          contentslist: res.data.albums
        })
      }
    })
  },

  getpartnum:function(e){
    let message = e.currentTarget.dataset.world
    let _mess = message.split("－")
    let newmun = _mess[0]
    wx.navigateTo({
      url: '../list/index?kw=' + newmun,
    })
  },

  goShowimg:function(e){
    let message = e.currentTarget.dataset.name   
    wx.navigateTo({
      url: '../list/index?kw=' + message,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.code!=undefined){
      this.setData({
        contents: [0, 1, 2, 3, 4, 5],
        inputdata: options.code
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let datas = this.data.inputdata
    console.log(datas)
    return {
      title: '自定义转发标题',
      path: 'pages/search/index?code=' + datas,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})