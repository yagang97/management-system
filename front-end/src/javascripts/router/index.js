// 通过匹配路径，引用Controller层的方法来渲染不同的视图
import SMERouter from 'sme-router'//路由工具
import appHomeController from "@controllers/home/app-home-controller"
import appItemsController from "@controllers/jop/app-jop-items-controller"
import appPublishController from "@controllers/jop/app-jop-publish-controller"
import angel from "@utils/angel"

const init = () => {
    const router = new SMERouter('router-view')

    // 当进入项目后，没有hash值就加一个默认hash值
    if(!location.hash){
        location.hash = "#/home"
    }
 
    //根据不同的路由来渲染不同的页面
    router.route('/home', appHomeController.render)
    router.route('/jop/items', appItemsController.render)
    router.route('/jop/publish', appPublishController.render)


    // 默认路由
    router.route('*', (req, res, next) => {
    res.redirect('/home')
    })

    //绑定 自定义事件
    angel.on("go",router.go.bind(router))

    // 根据当前路由前后左边导航的显示情况
    router.use((req,res,next) => {
        activeNavLink (req)
    })


}

 
// 层级路由匹配：先通过大一层的li匹配第一及路径，然后再通过小一层的li匹配第二级路径
function activeNavLink(req) { 
    let firstRoute = req.route.split("/").pop()//第一级路径
    let $firstLi = $(".sidebar-menu>li")
    let length = $firstLi.length
    // 判断一级路由，用for循环可以终止循环，提高性能
    for(let i = 0;i < length ; i ++){
        let ownDataRoute = $firstLi.eq(i).data("route").split("/").pop()// 二级路径data-route
        if(ownDataRoute === firstRoute){
            $firstLi.eq(i).addClass("active").siblings().removeClass("active")
            //判断这个li中又有哪个li能匹配到二级路由
            $firstLi.find("li").each(function () { 
                if($(this).data("route") === req.route){
                    $(this).addClass("active").siblings().removeClass("active")
                }
             })
             break;
        }
    }
 }



export default{init}