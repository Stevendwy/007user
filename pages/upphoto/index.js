// pages/merch_dredge/merch_img.js
var util = require('../../utils/util.js')
Page({
  data: {
    tempFilePaths: '',
    hidden: true, //true
    buthidden: false, //false
    sourceType: ['album', 'camera']
  },
  onLoad: function (options) {
    try {
      var res = wx.getSystemInfoSync()
      var platform = res.platform
      if (platform == 'ios') {
        util.msg("警告", "IOS系统暂不支持拍照，请从相册选择照片")
        this.setData({
          sourceType: ['album']
        })
      }
      console.log(platform)
    } catch (e) { }
  },
  frontimage: function () {
    var _this = this;
    var Type = _this.data.sourceType
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: Type, // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          FilePaths: res.tempFilePaths
        })
      }
    })
  },
  reciteimage: function () {
    var _this = this;
    var Type = _this.data.sourceType
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: Type, // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片 
        _this.setData({
          recitePaths: res.tempFilePaths
        })
      }
    })
  },
  primary: function (e) {
    var that = this

    var FilePaths = this.data.FilePaths;
    var recitePaths = this.data.recitePaths;

    if (!FilePaths) {
      util.msg("错误", "请选择身份证正面照片")
      return;
    } else if (!recitePaths) {
      util.msg("错误", "请选择身份证背面照片")
      return;
    }

    this.setData({
      hidden: false,
      buthidden: true
    })


    var arrName = [];
    arrName.push("cardName");
    arrName.push("cardBackName");

    var arrURL = [];
    arrURL.push(FilePaths);
    arrURL.push(recitePaths);
    var b = 0;

    var err = function () {
      that.setData({
        hidden: true,
        buthidden: false
      })
    }

    uploadFile(arrName, arrURL, b, err)
  }
})

function uploadFile(arrName, arrURL, b, err) {
  var stat = true
    try {
    var filePath = arrURL[b].toString();
    console.log("filePath=第" + (b + 1) + "次=" + filePath)
    var filename = arrName[b];
    console.log("filename=第" + (b + 1) + "次=" + filename)
    var _url = '使用者的后台地址';
    console.log("请求地址" + _url)
  }
  catch (e) { }

  if (filePath) {
    wx.uploadFile({
      url: _url,
      filePath: filePath,
      name: filename,
      header: {
        'content-type': 'multipart/form-data'
      },
      success: function (res) {
        console.log("res.data===" + res.data)
        var s = JSON.parse(res.data)
        console.log("JSON.parse===" + s)
        if (s.code == '00') {//我这边成功是返回00
          b++;
          console.log("第" + b + "张图片上传完成")
          uploadFile(arrName, arrURL, b, err)
        } else {
          console.log("上传失败====" + res.data)
          util.msg("错误", s.msg)
          stat = false
          err();
          return;
        }
      },
      fail: function (res) {
        console.log("网络异常====" + res.data)
        util.msg("错误", "网络异常")
        err();
        stat = false
        return;
      }
    })
  } else {
    if (stat) {
      util.msg("提示", "上传完成！")
    } else {
      util.msg("错误", "上传图片失败")
      err();
    }
  }
}