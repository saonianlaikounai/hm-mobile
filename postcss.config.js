module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-pxtorem': {
      rootValue: 37.5, // 因为手机是以 iphone6为主要适配 375 取十分之一
      propList: ['*']
    }
  }
}
