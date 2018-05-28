// pages/categories/categories.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cate_nav_list:[
      {name:"新品",id:100001},
      {name:"手机",id:100002},
      {name:"电视",id:100003},
      {name:"电脑",id:100004},
      {name:"家电",id:100005},
      {name:"路由",id:100006},
      {name:"智能",id:100007},
      {name:"儿童",id:100008},
      {name:"灯具",id:100009},
      {name:"电源",id:100010},
      {name:"耳机",id:100011},
      {name:"音箱",id:100012},
      {name:"生活",id:100013},
      {name:"服务",id:100014},
      {name:"米粉卡",id:100015}
    ],
    curIndex:0,
    toShow:100001
  },

  /**
   * 生命周期函数--监听页面加载
   */
  switchCategory(e){
    const curIndex=e.currentTarget.dataset.index?e.currentTarget.dataset.index:0;
    this.setData({
      toShow:e.currentTarget.dataset.id,
      curIndex
    });
  },
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