import Header from './Header.js'
import Footer from './Footer.js'
import MdConvert from './MdConvert.js'

export default {
  data: {
    MdText: null
  },
  oninit() {
  },
  view(vnode) {
    return m('main',
      m(Header),
      m(MdConvert, {
        text: '# LOLOLOL'
      }),
      m(Footer),
    )
  }
}