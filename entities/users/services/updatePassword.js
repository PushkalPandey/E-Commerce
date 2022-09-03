const userModel = require("../../../database/models/user");

const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = async function(filter, update){

    
  
    var hash = await bcrypt.hash(update.password, saltRounds);
    
    update.password = hash;

    
    const updatedUser = await userModel.findOneAndUpdate(filter, update, {new: true});

    console.log(updatedUser);
    return updatedUser;
}