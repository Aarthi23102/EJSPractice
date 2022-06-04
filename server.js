// import emailjs from "emailjs-com";
const emailjs = require('emailjs-com')
const exp = require("express");
const app = exp();


//using ejs
app.set('view engine', 'ejs');

//static files
app.use(exp.static('public'))

app.use(exp.urlencoded({extended:true}))

let blogs=[]

app.post('/newBlog', (req, res)=>{
    blogs.push(req.body)
    console.log(blogs)
    res.redirect('/')
})

app.post('/sendMail', (req, res)=>{
    // console.log('mail sent', req.body);
    // let e = req.body;
    // emailjs.sendForm('service_62zm63h', 'template_k82uu9j', e, '2aqrXlbsDCrI_ERzk')
    //                     .then((result) => {
    //                         console.log("sent", result);
    //                         // alert('Mail sent successfully');
    //                     }, (error) => {
    //                         console.log("error here",error);
    //                     });
    //                     // e.target.reset();
    res.redirect('/')
})

app.get('/', (req, res) =>{
    // res.render('home', {title: "Home", blogs});
    res.render('myform')
})

app.get('/home', (req, res) =>{
    res.redirect('/')
})

app.get('/contactUs', (req, res) =>{
    res.render('contactUs', {title: "contact us"});
})

app.get('/createBlog', (req, res) =>{
    res.render('createBlog', {title: "Create blog"});
})

app.listen(4000,()=>{
    console.log('server running on port 4000')
})