// 处理http请求的响应值，返回给前端的，是通过middleware中的reponse连接起来的
const status = {
    'success': {
        code: '200',
        msg: 'request is success'
    },
    'miss param': {
        code: '205',
        msg: 'missing params'
    },
    'error': {
        code: '500',
        msg: 'request is error from server'
    }
}
module.exports = status 
