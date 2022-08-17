const principlePage = (req,res, next) => {
    res.send("Felipe programer fullstack developer")
    console.log("here in principle page")
    next()
}

const anotherpageInsedePage =  (req,res, next) =>{
    res.send("This is another way!!!")
    console.log("pass on aonther away")
    next()
}

module.exports = {
    principlePage,
    anotherpageInsedePage
}

