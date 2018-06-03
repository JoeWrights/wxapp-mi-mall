// pages/goods/show.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    selected:true,
    selected1:false
  },
  selectBrief(e){
    this.setData({
      selected:true,
      selected1:false
    });
  },
  selectParameter(e){
    this.setData({
      selected:false,
      selected1:true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id=options.id;
    console.log(id);
    const goods=app.globalData.goodsDetail.filter(item=>{
      return item.id==id;
    });
    console.log(goods);
    this.setData({
      goods:goods[0]
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      
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