// pages/discovery/discovery.js
const app = getApp();

Page({
    data: {
        videos:[],
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载
        const videos=app.globalData.discovery;
        this.setData({
            videos
        });
    }
})