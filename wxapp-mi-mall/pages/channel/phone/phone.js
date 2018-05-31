// pages/phone/phone.js
import showDetail from "../../../modules/showDetail";
const app=getApp(); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:[],
    goods_list:[]
  },
  // showDetail(e){
  //   console.log(e.currentTarget.dataset.pid);
  // },
  showDetail,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(app.globalData.phone.goods_list);
    this.setData({
      slides:app.globalData.phone.phone_slides,
      goods_list:app.globalData.phone.goods_list
    });
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