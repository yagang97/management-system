import appJopItems from "@views/router/app-jop-items.html"

const render = (req,res,next) => {
    res.render(appJopItems)
}

export default {render}