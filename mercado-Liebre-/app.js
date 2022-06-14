const express = require("express")
const { get } = require("express/lib/response")

const app = express()

const path = require("path")

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo puerto 3000"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.use(express.static("public"));

//app.set("view engine", "ejs")

