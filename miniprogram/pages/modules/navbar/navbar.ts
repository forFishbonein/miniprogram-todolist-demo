// pages/modules/navbar/navar.ts
import page from "../../../constants/page"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
        type: String,
        value: "标题"
    },
    navBack: {
      type: Boolean,
      value: true
  },
},

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      // console.log("goBackgoBackgoBack")
      // var that=this;
      // if (this.properties.custom) {
      //     this.triggerEvent('routerLeave')
      // } else {
        console.log("navigateBack")
        wx.navigateBack({
            delta: 1
        })
      // }
    },
    goHome() {
      wx.reLaunch({
          url: page.home.index
      })
    }
  }
})
