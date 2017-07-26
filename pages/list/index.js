// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[],
    showimg:[],
    img:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let getdata = options
    let search_input = getdata.kw
    let obj = {
      "kw": search_input,
      "pi": 2,
      "pz": 20
    }
    let that = this
    wx.request({
      url: 'http://v5.pc.duomi.com/search-ajaxsearch-searchall',
      data: obj,
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        let _showimg = []
        let _datalist = res.data.artists 
        for (let i = 0; i < _datalist.length;i++){
          _showimg.push(_datalist[i].portrait)
        }
        console.log(res.data)
        that.setData({
          datalist: res.data.albums,
          img: _datalist[0].portrait,
          showimg: _showimg
        })
      }
    })
  },
  previewImage: function (e) {
    var that = this
    let src = e.currentTarget.dataset.src
    wx.previewImage({
      current: src,
      urls: this.data.showimg
    })
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
  
  }
})