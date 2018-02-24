/**
 * solr 测试
 */

const router = require('koa-router')()
const solrTest = require('./../controllers/solrTest')

module.exports = router.get( '/', solrTest.searchAll)