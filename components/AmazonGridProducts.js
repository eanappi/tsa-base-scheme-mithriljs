const Data = {
  productList: [
    '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=eanappi-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B06XGCLDTV&linkId=3dd42a10e53be03380bdd2f56c065967',
    '//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=eanappi-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B00L2IL9EA&linkId=d6449eabfe02caa078d7146ccc5e5f4d'
  ]
}

export default {
  view() {
    return Data.productList.map((link) => {
      return m('iframe[style="width:120px;height:240px;"][marginwidth="0"][marginheight="0"][scrolling="no"][frameborder="0"]', {
        src: link
      })
    })
  }
}