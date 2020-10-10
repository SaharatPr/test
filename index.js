const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const jwt = require("jwt-simple");
class Index{
    constructor()
    {

    }

    serverStart()
    {
        const middleware = (req, res, next)=>{
            if(req.headers.authorization == "saharat")
            {
                next();
            }else{
                res.json("xxxx");
            }
        }
        app.get('/', middleware, (req, res) => {
            const payload = {
                data: "XXXXSSS",
                iat: new Date().getTime()//มาจากคำว่า issued at time (สร้างเมื่อ)
             };
             const SECRET = "MY_SECRET_KEY"; //ในการใช้งานจริง คีย์นี้ให้เก็บเป็นความลับ
             res.send(jwt.encode(payload, SECRET));
          })
        this.openPort(80);
    }

    openPort(port)
    {
        app.listen(port,()=>{`Open port ${port}`})
    }
}

const start = new Index();
start.serverStart();