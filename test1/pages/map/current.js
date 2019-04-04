// pages/map/current.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  getPosition: function () {
    wx.getLocation({
      type: 'gcj02', //Return can be used as the latitude and longitude of wx.openLocation
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;

        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        });

        id = "map" 
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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