// Controller 根据不同请求做出不同的处理之后响应，负责逻辑处理
const jopModel = require('../../models/jop')
const moment = require('moment')//处理时间的插件



// 发布新岗位
const postJopItem = async (req, res, next) => {
    // title, star, description, showTime
    let { title, jop, description, showTime } = req.body
// 判断是否有参数缺失
    if ( title && jop && description && showTime ) {
        try {//里面是同步的，用try，catch包装，防止直接报错
            showTime = new Date(moment(showTime)).getTime()
            let data = await jopModel.postJopItem({
                title, jop, description, showTime,
                publishTime: Date.now(),
                img: ''
            })
            next('success')
        } catch (e) {
            next('error')
        } 
    } else {
        next('miss param')
    }

    
}

module.exports = {
    postJopItem
}