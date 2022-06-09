const express = require("express");
const app = express();
const port = 3003;
const data ={
        name: "Chita",
        prof: "Teaching",
        year: 5
}
app.get("/",(req,res)=>{
res.send(data);
})
app.listen(port, (req,res)=>{
   console.log(`Server runing on: ${port}`)
})