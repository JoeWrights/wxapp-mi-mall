// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receiverName: "张三",
    mobile: "15770768970",
    addressDetail: "上海市奉贤区",
    postCode: "336600",
    isDisabled: false,
    isComplete: false,
    buttonTitle: "保存"
  },
  formSubmit(e) {
    const addrInfo = e.detail.value;
    let {receiverName,mobile,addressDetail,postCode}=addrInfo;
    if(receiverName==""||mobile==""||addressDetail==""||postCode==""){
      this.data.isComplete=false;
      wx.showModal({
        title:"提示",
        content:"请完善信息",
        showCancel:false
      }); 
    }else if(!/^[1][3,4,5,7,8]\d{9}$/.test(mobile)){
      wx.showModal({
        title:"提示",
        content:"手机号格式不规范",
        showCancel:false
      }); 
    }else if(!/^[0-9]{6}$/.test(postCode)){
      wx.showModal({
        title:"提示",
        content:"邮政编码不规范",
        showCancel:false
      }); 
    }else{
      this.data.isComplete=true;
      wx.setStorageSync('addrInfo', addrInfo);
      
    }
    this.setData({
        isDisabled: true,
        isComplete: this.data.isComplete
        // buttonTitle: "修改"
      });
  },
  updateAddr(e){
    this.setData({
      isDisabled:false,
      isComplete:false,
      buttonTitle: "保存"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let addrInfo=wx.getStorageSync("addrInfo");
    console.log(addrInfo);
    let {receiverName,mobile,addressDetail,postCode}=addrInfo;
    this.setData({
      receiverName:receiverName||this.data.receiverName,
      mobile:mobile||this.data.mobile,
      addressDetail:addressDetail||this.data.addressDetail,
      postCode:postCode||this.data.postCode,
      isDisabled: true,
      isComplete:true,
      buttonTitle: "修改"
    });
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