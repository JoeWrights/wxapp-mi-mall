//index.js
//获取应用实例
import showDetail from "../../modules/showDetail";
import showcDetail from "../../modules/showcDetail";
const app = getApp()

Page({
  data: {
    index_slides:[],
    indicator_dots:true,
    autoplay:true,
    interval:2000,
    duration:1000,
    nav_data:[],
    index_activity:[],
    index_block:[],
    isTap:false,
    isLoading:false
  },
  onLoad(){
    const index_slides=app.globalData.index_slides,
          nav_data=app.globalData.nav_data,
          index_activity=app.globalData.index_activity,
          index_block=app.globalData.index_block,
          sectionList=index_block.map((section)=>{
      return section.section;
    })
    console.log(sectionList);
    this.setData({
      index_slides,
      nav_data,
      index_activity,
      index_block,
    });
    
  },
  onShow(e){
    this.setData({
      isTap:false
    });
  },
  //事件处理函数
  toSearch(e){
    this.setData({
      isTap:true
    });
    wx.navigateTo({
      url: "../search/search"
    })
  },
  // showDetail(e){
  //   const id=e.currentTarget.dataset.pid;
  //   console.log(id);
  // }
  showDetail,
  showcDetail
})
