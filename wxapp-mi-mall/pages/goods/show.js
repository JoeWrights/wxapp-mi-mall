// pages/goods/show.js
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[],
    selected:true,
    selected1:false,
    goods_num:"" 
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
  //点击加入购物车按钮跳到商品属性选择页面
  toSelect(e){
    const id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url:`../selectGoods/selectGoods?id=${id}`
    });
  },
  goCart(){
    wx.switchTab({
      url: "../cart/cart"
    })
  },
  previewImage(e){
    const index=e.currentTarget.dataset.index;	//获取swiper里的图片的下标
		const slide=this.data.goods.goods_slides; //获取商品轮播图
    const imgList=[]; //定义一个数组来存放轮播图的url
    // console.log(slide);
		slide.map(item=>{
      imgList.push(item.slide_url);
    });
		wx.previewImage({
			current: imgList[index], // 当前显示图片的链接，不填则默认为 urls 的第一张
			urls: imgList
		})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
  //把用户选好的商品规格从缓存拿出来
  onShow: function () {
    const goods_num=wx.getStorageSync('goods_sum');
    this.setData({
      goods_num
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