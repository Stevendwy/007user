// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputclear:false,
    inputdata:"",
    history: ["95820102100－宝马", "95820102102－保时捷", "95820102103－保时捷","95820102104－保时捷"],
    hothistory: ["95820102108－宝马","95820102106－保时捷"],
    contents: [],
    contentslist: [],
  },
  inputchange:function(e){
    let s_input = e.detail.value
    let s_show = e.detail.value.replace(/\W/g, "").length>1?true:false
    this.setData({
      inputdata: s_input,
      inputclear: s_show 
    })
  },

  inputClear:function(){
    this.setData({
      inputdata:""
    })
  },
  goSearch:function(e){
    let search_input = this.data.inputdata.replace(/\W/g, "")
    let obj = {
      "kw": search_input,
      "pi":2,
      "pz":20
    }
    let that = this
    if (search_input.length<1){
      console.log("is kongge ")
        return
    }
    wx.request({
      url: 'http://v5.pc.duomi.com/search-ajaxsearch-searchall',
      data: obj,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        // that.setData({
        //   contents: res.data.artists,
        //   contentslist: res.data.albums
        // })

        // wx.navigateTo({
        //   url: '../resule/index',
        // })
      }
    })
  },

  getpartnum:function(e){
    let message = e.currentTarget.dataset.world
    let _mess = message.split("－")
    let newmun = _mess[0]
    wx.navigateTo({
      url: '../resule/index?kw=' + newmun,
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