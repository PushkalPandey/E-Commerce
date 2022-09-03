const userModel = require("../../../database/models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = async function(email, password){
    
  const user = await  userModel.findOne({ email: email});
   
    if(!user) return;
  const isValid = await bcrypt.compare(password, user.password);

  return {user:user, isValid:isValid};
  
  
 
}