
const clients = (req, res, next) => {
    
    res.send("Render my clients my friends!!")
    console.log("passou por aqui all my clients")
    next()
}

const productClints = (req,res, next) => {
    res.send("all product of my clients  here ")
    console.log("here inside clients products")
    next()
}

module.exports = {
    clients,
    productClints
}