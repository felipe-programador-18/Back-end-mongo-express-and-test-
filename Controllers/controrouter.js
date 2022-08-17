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

const calcParameter = (req,res) => {
    console.log(req.query)
   
    if(req.query.num1 && req.query.num2){
    const {num1, num2} = req.query

    const soma = parseFloat(num1)+ parseFloat(num2)

    res.send("the soma is" + soma)
    }else{
        res.send("calculator here")
    }

} 


// here is about dynamic parameter!!
const ParameterIndc = (req, res) =>{
  const TogetherNumber = (req.params.num % 2)===0
  console.log('what i have here ??', TogetherNumber)
  
  if(TogetherNumber){
   res.send("this is par")
  }else{
    res.send("this is old")
  }
    
}



module.exports = {
    principlePage,
    anotherpageInsedePage,
    calcParameter,
    ParameterIndc
}

