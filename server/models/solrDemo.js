const solrUtil = require('./../utils/solr-util')

const demo = {
  async search (s) {
    if (!s) {
        s = 'q=*:*&wt=json'
    }
    let result = await solrUtil.search(s)
    return result
  }
}

module.exports = demo
