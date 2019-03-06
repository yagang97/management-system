// 主页面渲染视图，将涉及到的路由，样式，controllers等都连接起来了
import indexController from "@controllers/index-controller"
import router from "@router/index"
import '@styles/index.scss'


indexController.render()
router.init()