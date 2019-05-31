
export default {
  view(vnode) {
    return vnode.attrs.productsList ? vnode.attrs.productsList.map((link) => {
      return m('iframe[style="width:120px;height:240px;"][marginwidth="0"][marginheight="0"][scrolling="no"][frameborder="0"]', {
        src: link
      })
    }) : ''
  }
}