import Page from './components/Page.js'
import AmazonGridProducts from './components/AmazonGridProducts.js'

m.route(document.body, '/home', {
  '/amazon' : AmazonGridProducts,
  '/:key' : Page,
})