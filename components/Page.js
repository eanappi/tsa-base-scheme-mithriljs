import Header from './Header.js'
import Footer from './Footer.js'
import AmazonListProducts from './AmazonListProducts.js'

const MdConverter = new showdown.Converter(
  { metadata: true }
)

const Data = {
  mdText: '',
  productListAmazon: [],
}

export default {
  oninit(vnode) {
    m.request({
      method: 'GET',
      url: `content/${vnode.attrs.key}.md`,
      deserialize: (mdTextRaw) => { 
        return MdConverter.makeHtml(mdTextRaw ? mdTextRaw : '') 
      }
    })
    .then((mdTextGet) => {
      let mdTextMetadata = MdConverter.getMetadata()
      
      // Metada
      // -- Title
      if (mdTextMetadata.title) {
        document.title = mdTextMetadata.title
      }

      // -- Description
      let metadaDescription = document.createElement('meta')
      
      metadaDescription.name = 'description'
      metadaDescription.content = mdTextMetadata.description

      if (mdTextMetadata.description) {
        document.head.appendChild(metadaDescription)
      }

      // Amazon Product List
      Data.productListAmazon = mdTextMetadata.productsList.split(',')

      // Markdown content
      Data.mdText = mdTextGet
    })
    .catch((err) => {
      m.route.set('/404')
    })
  },
  view(vnode) {
    return m('main',
      m(Header),
      m('.page', m.trust(Data.mdText)),
      m(AmazonListProducts, {
        productsList: Data.productListAmazon
      }),
      m(Footer),
    )
  }
}