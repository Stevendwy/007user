// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputdata:"",
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
    items: [
      "智能大过电能 简析奔驰Generation EQ",
      "下得了赛道送得了葬 特斯拉已无所不能",
      "全能探险家 全新一代路虎发现技术解析",
      "科技至上 林肯MKZ车机与主动安全体验",
      "燃料电池VS纯电动 谁会是新能源一哥？",
      "不朽的传奇 奥迪五缸发动机40年进化史",
      "智能大过电能 简析奔驰Generation EQ",
      "下得了赛道送得了葬 特斯拉已无所不能",
      "全能探险家 全新一代路虎发现技术解析",
      "科技至上 林肯MKZ车机与主动安全体验",
      "燃料电池VS纯电动 谁会是新能源一哥？",
      "不朽的传奇 奥迪五缸发动机40年进化史"
    ],
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
    console.log(search_input) 
    if (search_input.length>=1){
      this.setData({
        contents: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5],
        inputdata: search_input
      })
    }else{
      this.setData({
        contents: []
      })
    }
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