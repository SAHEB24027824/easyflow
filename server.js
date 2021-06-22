
const Express=require("express");
const cors=require("cors");
const app=Express()
const router=require('./router');

app.listen(2000,()=>{
    console.log("Server is running on port 2000")
})

app.use(cors());
app.use(Express.json());
app.use(router);
