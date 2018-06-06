// pages/cart/cart.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // select_version:"",
    // select_color:"",
    // select_num:"",
    cart_list:[]
  },
  goIndex(){
    wx.switchTab({
      url: "../index/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
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
    const select_color=wx.getStorageSync('color');
    const select_version=wx.getStorageSync('version');
    const select_num=wx.getStorageSync('select_num');
    // const temp={version:select_version,color:select_color,num:select_num};
    const attr_item=wx.getStorageSync('attr_item');
    console.log(attr_item)
    // return
    let arr=this.data.cart_list;
    // arr = [attr_item, ...arr]
    arr=[...attr_item];
    // arr.push(temp);
    console.log(arr);
    // console.log(temp)
    this.setData({
      cart_list:arr
    });
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