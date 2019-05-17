import Header from './Header.js'
import Footer from './Footer.js'
import MdConvert from './MdConvert.js'

const Data = {
  mdText: ''
}

export default {
  oninit() {
    m.request({
      method: 'GET',
      url: 'content/home.md',
      deserialize: (mdTextRaw) => { return mdTextRaw }
    })
    .then((mdTextGet) => {
      Data.mdText = mdTextGet
    })
  },
  view(vnode) {
    return m('main',
      m(Header),
      m(MdConvert, {
        text: Data.mdText
      }),
      m(Footer),
    )
  }
}