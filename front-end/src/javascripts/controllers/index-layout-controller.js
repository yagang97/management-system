// 布局渲染
import appHeader from "@views/layout/app-header.html";
import appContent from "@views/layout/app-content.html";
import appNav from "@views/layout/app-nav.html";
import angel from "@utils/angel"

const render = () => { 
    let $wrapp = $("#app");//主容器
    $wrapp.append(appHeader);
    $wrapp.append(appContent);
    $wrapp.append(appNav);

    // 给nav添加点击事件，通过路由地址来渲染不同的视图
    $('.router-link').click(function () { 
        let url = $(this).data("route")
        angel.emit("go",url)
     })
   
}


export default {render};

