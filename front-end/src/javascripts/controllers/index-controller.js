// 渲染视图都是通过controllers层暴露出来的render的，所以一定需要写在render中且暴露出来
import layoutController from "@controllers/index-layout-controller";
const render = () => {
    layoutController.render();
}

export default {render}