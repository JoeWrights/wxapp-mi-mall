// pages/selectGoods/selectGoods.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods_attrSelect: [],
    curcIndex: 0,
    curvIndex: 0,
    select_num: 1,
    color:"",
    cover_img:"",
    memory:"",
    price:""
  },
  selectVersion(e) {
    const version = e.detail.value;
    // console.log(version);
    const memory = version.split(",")[0];
    const price = version.split(",")[1];
    // console.log(price);
    // wx.setStorageSync('version', version);
    wx.setStorageSync('memory', memory);
    wx.setStorageSync('price', price);
    this.setData({
      memory,
      price
    });
  },
  selectColor(e) {
    let color = e.detail.value;
    let cover_img=this.data.goods_attrSelect[0].goods_slides[0].slide_url;
    // console.log(cover_img);
    wx.setStorageSync('color', color);
    wx.setStorageSync('cover', cover_img);
    this.setData({
      color,
      cover_img
    });
  },
  colorHasSelected(e) {
    const curcIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    console.log(curcIndex);
    this.setData({
      curcIndex
    });
  },
  versionHasSelected(e) {
    const curvIndex = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    console.log(curvIndex);
    this.setData({
      curvIndex
    });
  },
  minusCount(e) {
    let select_num = this.data.select_num;
    select_num--;
    if (select_num < 1) {
      return;
    }
    this.setData({
      select_num
    });
    wx.setStorageSync('select_num', select_num);
  },
  addCount(e) {
    let select_num = this.data.select_num;
    select_num++;
    if (select_num > 5) {
      return;
    }
    this.setData({
      select_num
    });
    wx.setStorageSync('select_num', select_num);
  },
  submit(e) {
    const pre_item = wx.getStorageSync('attr_item');
    console.log(pre_item);
    const temp = {
      'goods_name': wx.getStorageSync('goods_name'),
      'memory': wx.getStorageSync('memory'),
      'price': wx.getStorageSync('price'),
      'color': wx.getStorageSync('color'),
      // 'version': wx.getStorageSync('version'),
      'select_num': wx.getStorageSync('select_num'),
      'cover': wx.getStorageSync('cover'),
      'selected': false,
      'isTouchMove': false
    }
    wx.setStorageSync('attr_item', [temp, ...pre_item]);
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
      duration: 3000,
      success() {
        setTimeout(() => {
          wx.navigateBack({
            url: "../goods/show"
          });
        }, 1000)
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id = options.id;
    console.log(id);
    const goods_attrSelect = app.globalData.goodsDetail.filter(item => {
      return item.id == id;
    });
    console.log(goods_attrSelect);
    wx.setStorageSync("goods_name", goods_attrSelect[0].header);
    this.setData({
      goods_attrSelect,
      color:goods_attrSelect[0].default[1],
      memory:goods_attrSelect[0].default[0],
      price:goods_attrSelect[0].default[3]
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
    const version = wx.getStorageSync('version')
    // this.getGoods(version)
    console.log(version)
    wx.setStorageSync('select_num', this.data.select_num);
    // wx.setStorageSync('color', this.data.color);
    // wx.setStorageSync('memory', this.data.memory);
    // wx.setStorageSync('price', this.data.price);
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