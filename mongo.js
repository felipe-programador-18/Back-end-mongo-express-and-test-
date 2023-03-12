const mongo = require("mongodb")
const MongoClient = mongo.MongoClient


MongoClient.connect("mongodb://localhost:27017/myusers", (err,db) =>{

  const user = db.collection("user")
  user.insert({
    name: 'Felipe programmer',
      born:'18-01-1995',
      adress:'Avenida circular 921',
      complemento: 'casa',
      Nacionalidade:'Brasileiro'
  }, (err, res) =>{
     console.log(err, res)
  })


  

})