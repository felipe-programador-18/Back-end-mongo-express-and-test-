const express = require("express")
const router = express.Router()


//controllers here
const controPrinciple = require("../Controllers/controrouter")
const anotherPAGE = require("../Controllers/controrouter")



router.get("/", controPrinciple.principlePage )
router.get("/newuser",anotherPAGE.anotherpageInsedePage)



module.exports = router ;

