import appJopPublish from "@views/router/app-jop-publish.html"
import {postJopItem} from "@models/jop-model"

let img = ""// 准备上传的图片的路径

const render = (req,res,next) => { 
    // 渲染视图
    res.render(appJopPublish)

    // 初始化日历插件
    $('#datepicker').date_input()

    // 绑定各种事件
    bindEvents()
}

function bindEvents() {
    $("#publish-form").submit(async function(e) {
        e.preventDefault()

        let title = $('#item-title').val()
        let description = $('#item-description').val()
        // let description = editor.getValue()
        let jop = $('#item-jop').val()
        let showTime = $('#datepicker').val()
        let data = await postJopItem({ 
            title,description,jop,showTime,img
        })

        // if(data){
        //     $.Toast('success', '上传成功', 'success')
        // }
    })


}





export default {render}