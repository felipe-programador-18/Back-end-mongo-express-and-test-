const express = require("express")

const api = express()
const port =3000


//receive my router
const receiveRouter = require("./routerTest/newrouter")
const clientRouter = require("./routerTest/clients")
api.use("/",receiveRouter)
api.use("/", clientRouter)




api.listen(port, () => console.log("I am here port" +3000))