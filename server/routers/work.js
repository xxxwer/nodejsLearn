/**
 * 工作台子路由
 */

const router = require('koa-router')()
const controller = require('./../controllers/work')

const authMiddleware = require('./../middleware/userAuth')

const routers = router
    .use(authMiddleware())
    .get('/', controller.indexPage)


module.exports = routers