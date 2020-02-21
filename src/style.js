import styled, { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background: #eee;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* design by self */
h1 {
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 16px
}
h4 {
  font-size: 14px
}
h5 {
  font-size: 12px
}
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1581842127056'); /* IE9 */
  src: url('./iconfont.eot?t=1581842127056#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATYAAsAAAAACXQAAASKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGAIUaATYCJAMUCwwABCAFhG0HWxs5CBEVpFuQ/Uywwf0oRRudcAsmxhNL/iQsw4JnIvh+v9+eK+8b4g2SaKR7IuGhUEl4pJIgNkInMt0ktP9T3tubTCH5RE+6YJISKzj5C52ocwNgc2pBXbxcgGTC0snHP3dcefQcySfLHWdjagtk6yrxkvp6818EkMBCVlXoujrgIVmWE3oTZt7PAWwT77fuJtA1ww7aiYhLAymFvisQZ9WVxSCVMCsVzNDWNQVnFohHENdOY9Q9AA/e78cXuIQUSGoG/eBeRXgZBH2Q/mCIezfu5DkEkAznBHseGatAIc4L3WeAg/QqrCsnxWwAKMm2JA01T+GDygfDjQ3IN6TtGhmKNMw/LxrQ1QOgbmQKr9KWONIowChBowKjDI0hpNeirs4ZXQzhP3ZB188O+bQqydNSWkhLWR5Ja2tpaqp2VOwhVmU7WW459pXU9GN3xZMXEVbfJUtrMhMaZahvlV4GOO2VkUGo74LHsXMAk12yRwOXMrR6MdUhCBkCSXv2zGT1pvM8i84UiQr6sh49IwLF6BMxaP4Zvc8qdq4BdbdO79XEu/dkyHDn6Yt9F8i5jjzBuWducicEEydZg/ZKeRZFS4t20ZqZTN8eopaGHfaaGpWxu6lXPXOPxgEBleNGeMLjRIixSFvao5vpFMuoe5/mZQvxfDCux6fvst+VuXv2pPr6bdmbgczyOqu2pjT4OvOt1v3B/fb3YSz/ljCnqzUeBaUazVpVrg7JKJA2S+bhniVJdU11ySVrPX2V12hR78yjS2f0FuG64jYZ1vnXsNawy5/d4P1sb5zY0ZFonGJywjQkGYco7jBJOUGajJMKSKmkRGLS4uNlYaNezIhXTY3XCAvkOkY8GThqazwTCNcLMPrlqkgpuhm6KVAKrgpdQTKuHqbGAVfwePz+SFle3Sfq0ZlHdkBcTlmXKoT9otpIdIZC7tVRspwykWd11lpbOW1XbS44uFbeWEdZrta/Cqdtqj0G01tlozdpl7uLHfv165itEGMsYseip/g0GOj7Vumpjjrnlym8v7JMcQXazhy+dw9zBiKxLaaeArnWCTmpuZu9X6XqfgkO0dt6dLVPzYp9Ea2dYL4PtAKg/yNfwioA/Yv5Mg4EIN9T9wH6fN6Lbf9bf2P0ds65UNHvv5SsGMBLo+EDL9y/WKBbpi3RWPJPkjQcKopMt9QitVpiyVttfgN1kqe6+P/4x7wdxjsJImdocxJA0jINWdsssVBXoepZg0bbOnStiDy/Z1wLYFGkgWVDBIQRByEZ8gTZiPvEQn0D1ZTv0BgJDF0nSPWKPfMhibujoFF8wvyDaJmcadOdX3tDX5ORuMxj/6OUGIOxG9K5KxLKEEfK20+qDpzwAhfifpgSQxZ+odUuqOZD37uiV+osL83OUdAoPmH+QbRMzpmsu8zP39DXZKSirSz8j1Li7DB2QwPiVU2N2i5leXn7SdVR25zwAhc4MRlphly87oVWu9AhmQ89Oc41VXfTa5d7LPkdd9RfXiNFjhI1GquLwPWHK18N/er+G2k2dBnFJRjyNuStatc5kk+VmgYAAA==') format('woff2'),
  url('./iconfont.woff?t=1581842127056') format('woff'),
  url('./iconfont.ttf?t=1581842127056') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1581842127056#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const Content = styled.div `
  width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  .content-left {
    flex: 1;
  }
`