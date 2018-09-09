/* eslint-disable no-undef */
const env = {
  isNative: typeof window !== 'object',

  platform: weex.config.env.platform.toLowerCase(),
  deviceWidth: weex.config.env.deviceWidth,
  deviceHeight: weex.config.env.deviceHeight,
  // cdn
  cdnUri: 'http://cdn.instapp.io/nat/',

  get baseUrl() {
    let url
    let bundleUrl = weex.config.bundleUrl
    let isAndroid = this.platform === 'android'
    let isiOS = this.platform === 'ios'

    if (isAndroid) {
      url = 'file://assets/dist/'
    } else if (isiOS) {
      url = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1)
    } else {
      let host = 'localhost:8080'
      // eslint-disable-next-line no-useless-escape
      let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
      host = (matches && matches.length >= 2) ? matches[1] : host
      url = 'http://' + host + '/dist/'
    }
    return url
  }
}

export default env