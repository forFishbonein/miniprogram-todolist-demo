import Dialog from '@vant/weapp/dialog/dialog';
interface Thing {
  date: string;
  title: string;
  notes: string;
}
// pages/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    title: '',
    notes: '',
    container: null,
    activeNames: [],
    allThings:[] as Thing[]
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date:any) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event:any) {
    console.log(event.detail)
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  onChange(event:any) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onDelete(event:any){
    let index = event.currentTarget.dataset.index
    Dialog.confirm({
      message: '确定删除吗？',
    }).then(() => {
      // instance.close();
      console.log(index);
      this.data.allThings.splice(index,1)
      this.setData({
        allThings:this.data.allThings
      })
      wx.setStorageSync('allToDos',this.data.allThings)
    });
  },
  // onItemClose(event:any) {
  //   const { position, instance } = event.detail;
  //   switch (position) {
  //     case 'left':
  //     case 'cell':
  //       instance.close();
  //       break;
  //     case 'right':
  //       Dialog.confirm({
  //         message: '确定删除吗？',
  //       }).then(() => {
  //         instance.close();
  //       });
  //       break;
  //   }
  // },
  submitThings(){
    this.setData({
      allThings:[...this.data.allThings,{
        date:this.data.date,
        title:this.data.title,
        notes:this.data.notes
      }],
      date:"",
      title:"",
      notes:""
    })
    wx.setStorageSync('allToDos',this.data.allThings)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(wx.getStorageSync('allToDos'))
    this.setData({
      allThings:wx.getStorageSync('allToDos')?wx.getStorageSync('allToDos'):[]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#container'),
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})