import Header from './Header.js'
import Footer from './Footer.js'

export default {
  view(vnode) {
    return m('main',
      m(Header),
      vnode.children,
      m(Footer),
    )
  }
}