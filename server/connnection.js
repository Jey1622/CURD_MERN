const {Client}=require('pg')
const con=new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"1137",
    database:"todo"
  })

  module.exports=con;
