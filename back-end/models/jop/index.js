// Model 提供数据或者与数据相关方法 （连接数据库，操作数据库）
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/jop', { useNewUrlParser: true });//连接数据库

// 电影item Schema （规定文档的格式）
var movieItemSchema = new mongoose.Schema({
    img: String,
    title:   String,
    jop: String,
    showTime: Number,
    publishTime: Number,
    description: String
});
// 集合的实例，传入movieItemSchema数据库
var Items = mongoose.model('item', movieItemSchema);


 

// 发布新岗位，从前端发过来的数据，配合ajax及res，req交互过来的数据传入数据库
const postJopItem =  (params) => {
    return Items.insertMany(params)
}

module.exports = { 
    postJopItem
}

// id , title, img, publishTime, showTime, description