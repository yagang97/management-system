import request from "@utils/request"

const postJopItem = (data) => {  
    return request({
        url:"/api/v1/jop/item",//proxy跨域，http访问的地址：proxy.url + url
        type:"post",
        data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
}


export {
    postJopItem
}