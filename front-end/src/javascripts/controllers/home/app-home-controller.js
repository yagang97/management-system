import appHome from "@views/router/app-home.html"

const render = (req,res,next) => {
    res.render(appHome)
}

export default {render}