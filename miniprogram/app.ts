// @ts-ignore
import hosts from 'lib/hostConfig'
// app.ts
App<IAppOption>({
  data: {
    httpImage: hosts.httpImage, // CDN-图片路径
  },
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if(wx.getStorageSync('login_flag')===true){
      wx.switchTab({
        url:"/pages/home/home"
      })
    }
    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
})