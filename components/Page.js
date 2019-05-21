import Header from './Header.js'
import Footer from './Footer.js'
import MdConvert from './MdConvert.js'

const Data = {
  mdText: ''
}

export default {
  oninit(vnode) {
    m.request({
      method: 'GET',
      url: `content/${vnode.attrs.key}.md`,
      deserialize: (mdTextRaw) => { return mdTextRaw }
    })
    .then((mdTextGet) => {
      Data.mdText = mdTextGet
    })
    .catch((err) => {
      m.route.set('/404')
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