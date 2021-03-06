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
  font-size: 18px
}
h4 {
  font-size: 16px
}
h5 {
  font-size: 14px
}
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1582698531372'); /* IE9 */
  src: url('./iconfont.eot?t=1582698531372#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1582698531372') format('woff'),
  url('./iconfont.ttf?t=1582698531372') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1582698531372#iconfont') format('svg'); /* iOS 4.1- */
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
`