const express=require("express");
const path=require('path');
const hbs=require('hbs');
const app=express();
//environment variable for having our own port no.
const port=process.env.PORT || 8000;
//express work on top bottom approach hence which comes first will be
//served first
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials")

app.set("view engine","hbs");
//to have a customize views folder name
app.set("views",template_path);
//to run static website
hbs.registerPartials(partials_path)
app.use(express.static(static_path));


//Routing with which we traverse from one page to another 
//by writing different url's eg /about,/contact

// app.get('route',callback())
app.get("",(req,res)=>{
  res.render("index");
});
app.get("/about",(req,res)=>{
  res.render("about");
});
app.get("/weather",(req,res)=>{
  res.render("weather");
})

app.get("*",(req,res)=>{
  res.render("404error",{
    errorMsg:'OOPs not found',
  });
})

app.listen(port,()=>{
   console.log(`Listening to the port at ${port}`)
});