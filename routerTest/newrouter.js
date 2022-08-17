const express = require("express")
const router = express.Router()


//controllers here
const controPrinciple = require("../Controllers/controrouter")
const anotherPAGE = require("../Controllers/controrouter")



router.get("/", controPrinciple.principlePage )
router.get("/newuser",anotherPAGE.anotherpageInsedePage)
router.get("/calc", controPrinciple.calcParameter)

//that router i go works with dynamic parameter!!

router.get("/par/:num", controPrinciple.ParameterIndc)


module.exports = router ;

