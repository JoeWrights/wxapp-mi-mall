// pages/cart/cart.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart_list: [],
    totalPrice: 0,
    selectAllStatus: false,
    startX: 0, //开始坐标
    startY: 0
  },
  goIndex() {
    wx.switchTab({
      url: "../index/index"
    })
  },
  selectList(e) {
    let selectAllStatus = this.data.selectAllStatus;
    const index = e.currentTarget.dataset.index;
    let cart_list = this.data.cart_list;
    // console.log(cart_list[index].selected);
    const selected = cart_list[index].selected;
    cart_list[index].selected = !selected;
    console.log(selected);
    //购物车列表里的条目只要有一个取消，全选就取消
    const symbol = cart_list.some(cart => {
      return cart.selected === false;
    });
    if (symbol) {
      this.data.selectAllStatus = false;
    } else {
      this.data.selectAllStatus = true;
    }

    this.setData({
      cart_list,
      selectAllStatus: this.data.selectAllStatus
    });
    this.getTotalPrice();
  },
  getTotalPrice() {
    let cart_list = this.data.cart_list;
    let totalPrice = 0;
    for (let i = 0; i < cart_list.length; i++) {
      if (cart_list[i].selected) {
        totalPrice += parseInt(cart_list[i].select_num) * parseInt(cart_list[i].price);
      }
    }
    console.log(totalPrice);
    this.setData({
      totalPrice
    });
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cart_list = this.data.cart_list;
    for (let i = 0; i < cart_list.length; i++) {
      cart_list[i].selected = selectAllStatus;
    }
    this.setData({
      cart_list,
      selectAllStatus
    });
    this.getTotalPrice();
  },

  touchstart: function (e) {
    this.data.cart_list.map(item => {
      if (item.isTouchMove) {
        item.isTouchMove = false;
      }
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      cart_list: this.data.cart_list
    })
  },
  //滑动事件处理
  touchmove(e) {
    var
      index = e.currentTarget.dataset.index, //当前索引
      startX = this.data.startX, //开始X坐标
      startY = this.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = this.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });
    this.data.cart_list.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    this.setData({
      cart_list: this.data.cart_list
    })
  },
  angle(start, end) {
    var X = end.X - start.X,
      Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(Y / X) / (2 * Math.PI);
  },
  delCartItem(e) {
    const index=e.currentTarget.dataset.index;
    console.log(index);
    this.data.cart_list.splice(index, 1);
    wx.clearStorageSync("select_num");
    this.setData({
      cart_list: this.data.cart_list
    });
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
    const attr_item = wx.getStorageSync('attr_item');
    console.log(attr_item)
    // return
    let cart_list = this.data.cart_list;
    // arr = [attr_item, ...arr]
    cart_list = [...attr_item];
    // arr.push(temp);
    console.log(cart_list);
    const select_num = cart_list.map(item => {
      return item.select_num;
    })
    // console.log(select_num);
    let goods_sum = 0;
    for (let i = 0, len = select_num.length; i < len; i++) {
      goods_sum += select_num[i];
    }
    wx.setStorageSync('goods_sum', goods_sum);
    console.log(goods_sum);
    // console.log(temp)
    this.setData({
      cart_list
    });
    console.log(this.data.cart_list);
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