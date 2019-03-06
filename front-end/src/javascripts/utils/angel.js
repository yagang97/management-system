// node.js中的自定义事件工具
import {EventEmitter} from "events"
class Angel extends EventEmitter {}
export default new Angel()