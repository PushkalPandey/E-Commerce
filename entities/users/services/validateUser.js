const userModel = require("../../../database/models/user");



module.exports = async function(id){

    
  

    
    var update = { "verficationStatus" : true};
    
    const updatedUser = await userModel.findByIdAndUpdate(id, update, {new: true});

    console.log(updatedUser);
    return updatedUser;
}