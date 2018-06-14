// pages/search/search.js
import showDetail from "../../modules/showDetail";
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_list:[],
    search_list:[],
    is_hidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  searchInput(e){
    // console.log(e.detail.value);
    wx.setStorageSync('keywords',e.detail.value); //存入搜索关键字
    let search_list=this.getList(e.detail.value);
    if(e.detail.value==""){
      search_list=[];
      this.data.is_hidden=true;
    }else{
      this.data.is_hidden=false;
    }
    this.setData({
      search_list,
      is_hidden:this.data.is_hidden
    });
  },
  search(e){
     //按关键字筛选商品，如果关键字匹配到商品名称，则返回该商品列表
    const keywords=wx.getStorageSync('keywords');
    wx.showLoading({
      title: '请稍等',
    });
    setTimeout(()=>{
      this.setData({
        goods_list:this.getList(keywords),
        is_hidden:true
      });
      wx.hideLoading();
    },500);
  },
  showDetail,
  showItemDetail(e){
    
    //按关键字筛选商品，如果关键字匹配到商品名称，则返回该商品列表
      const header=e.currentTarget.dataset.header.toLowerCase(); 
      console.log(header);
      wx.showLoading({
        title: '请稍等',
      })
      setTimeout(()=>{
        wx.hideLoading()
        this.setData({
          goods_list:this.getList(header),
          is_hidden:true
        });
      },500)
  },
  getList(attr){
    return app.globalData.phone.goods_list.filter(item=>{
      return item.header.toString().toLowerCase().indexOf(attr)>-1;
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