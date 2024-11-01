const express = require('express')
const router = express.Router()
const path = require('path')

const blogs = require('../data/blog.js')
const e = require('express')
const { title } = require('process')

//landing url
router.get('/', (req,res) => {
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

//lists the blogs 
router.get('/blog',(req,res)=>{
    res.render('blogpage',{
        blogs: blogs
    });
})

//select the blog and checkout the slug blog
router.get('/blogpost/:slug' , (req,res)=>{
    myblog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    // console.log(myblog[0])
    res.render('blogpost',{
        title: myblog[0].title,
        content: myblog[0].content
    })
})

//just see the blog list titles
router.get('/blogdata',(req,res)=>{
    const l = [];
    blogs.forEach(e =>{ 
        l.push(e.title)
    });
    res.send(l)
});

//tells hi to the name mentioned : hi/chang----> Hi chang
router.get('/hi:name',(req,res)=>{
    res.send('Hi '+req.params.name)
})


// router.get('/blogpost/:slug', (req,res)=>{
//     blog_found_as_acc_to_url = blogs.filter((e)=>{
//         return e.slug == req.params.slug
//     })
//     console.log(blog_found_as_acc_to_url)
//     res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
// })

//alternative of handlebars how to parse data into html file and then send : https://stackoverflow.com/questions/58264703/nodejs-how-to-insert-an-element-in-a-html-document-using-javascript

module.exports = router;