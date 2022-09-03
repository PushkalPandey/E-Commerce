const userModel = require("../../../database/models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = async function(username, password, email){
   
     var hash = await bcrypt.hash(password, saltRounds);

   
    console.log("hash",hash);
     
     const user =  await userModel.create({username: username, password:hash, email: email});
    
       
        return user;
    
   
   
    
   
  
}