import Page from './components/Page.js'

m.route(document.body, '/home', {
  '/:key' : Page,
})