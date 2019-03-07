const express = require('express')
const router = express.Router()
const jopController = require('../controllers/jop')
const { response } = require('../middlewares')
 


// 发布岗位信息,后面的都是中间件
router.post('/item', jopController.postJopItem, response)

module.exports = router