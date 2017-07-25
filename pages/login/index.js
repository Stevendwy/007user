// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonenum:"",
    passnum:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  phoneInput:function(e){
    this.setData({
      phonenum:e.detail.value
    })
  },

  passInput: function (e) {
    this.setData({
      passnum: e.detail.value
    })
  },

  rightGo:function(){
    let phonenums = this.data.phonenum
    let passnums = this.data.passnum
    console.log(phonenums)
    console.log(passnums)
    if (phonenums == 123 && passnums == 123){
      wx.navigateTo({
        url: '../search/index',
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
  
  }
})