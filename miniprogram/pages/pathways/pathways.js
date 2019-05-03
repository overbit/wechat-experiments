// pages/pathways/pathways.js
Page({

  /**
   * Page initial data
   */
  data: {
    stringdbUrl:"https://string-db.org/api/image/network?identifiers=",
    pathwayImage: null 
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var product = options.product;
    var imgUrl = this.data.stringdbUrl + product;
    console.log(imgUrl);
    this.setData({ pathwayImage: imgUrl });
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