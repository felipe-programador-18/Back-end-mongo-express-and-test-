const express = require("express")
const router = express.Router()

// adding controllers inside code is more easy to do testing about code
const clintes = require("../Controllers/controindex")
router.get("/clients", clintes.clients )
router.get("/clients/products", clintes.productClints)

module.exports = router ;