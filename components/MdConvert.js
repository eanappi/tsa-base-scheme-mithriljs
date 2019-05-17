const MdConverter = new showdown.Converter()

export default {
  view(vnode) {
    return m('.wrapper-md', 
      m.trust(MdConverter.makeHtml(vnode.attrs.text ? vnode.attrs.text : ''))
    )
  }
}