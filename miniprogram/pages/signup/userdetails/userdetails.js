// pages/signup/userdetails/userdetails.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    userProfile: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  submitForm: function (e) {
    console.log(e);
    if (!app.globalData) {
      app.globalData.userProfile = new Object();
    }
    app.globalData.userProfile = e.detail.value;
    wx.navigateTo({
      url: '../profession/signup'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    if (app.globalData.userProfile) {
      console.log("here")
      this.setData({
        userProfile: app.globalData.userProfile
              })
      }
    else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})