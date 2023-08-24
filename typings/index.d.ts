/// <reference path="./types/index.d.ts" />

interface IAppOption {
  data:{

  }
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}