# wxapp-mi-mall
仿小米商城小程序

## 踩坑记
- 注意`wx.navigateTo`和`wx.switchTab`的区别
- 在做分类页时，用到了`scroll-view`，但是随着页面内容的增多，滚动页面时，左边导航栏和右边分类内容都会滚动，这时设置整个页面和最外层`view`的样式为：
```css
page,.container{
    height:100vh;
}
```
即设置整个页面为一屏的高度。
- 内容超过一屏时，`scroll-view`产生滚动条，嗯，这严重影响美观，通过以下样式隐藏：
```css
::-webkit-scrollbar{  
  height: 0;
  width: 0;
  color: transparent;
}
```
- `scroll-view`的值应为它的子元素的`id`值，但是这个id**不能以数字开头**，否则会报错：`id属性格式错误，如不能包含数字`（还是要仔细看看开发手册::>_<::）