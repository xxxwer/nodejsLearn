const solrDemo = require('../models/solrDemo')

module.exports = {

    async searchAll( ctx ) {
        let x = await solrDemo.search()
        ctx.body = x
    },

}