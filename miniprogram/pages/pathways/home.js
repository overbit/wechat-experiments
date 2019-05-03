// pages/pathways/home.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  search: function (e){
    console.log("form submitted");
    console.log( e.detail.value);
    wx.navigateTo({
      url: 'pathways?product=' + e.detail.value.product
    })
  },
})