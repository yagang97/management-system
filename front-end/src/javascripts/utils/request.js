// 封装的一个ajax请求

//通过promise封装ajax，jQuery中ajax的success中的不能再返回return结果，只有将promise改造下，用resolve返回
const request = (options) => {
    return new Promise((resolve, reject) => {//通过promise封装ajax，jQuery中ajax的success中的不能再返回return结果，只有将promise改造下，用resolve返回
        $.ajax({
            ...options,
            success: (res) =>  {//前后端通信通过ajax以及路由req，res传递数据
                if ( res.code >= 200 && res.code < 300 || res.code === 304 ) {
                    // 成功处理
                    $.Toast('Success', '数据请求成功', 'success')
                    resolve(res.data)
                } else {
                    // 除请求失败处理
                    $.Toast('Warning', '数据请求失败', 'warning')
                    console.log('fail')
    
                }
            },
            error (error) {
                //做error的处理
                $.Toast('Danger', '请求出错', 'error')
                console.log('error', error)
                reject(error)
            }
        })
    })
}

export default request