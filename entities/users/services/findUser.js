const userModel = require("../../../database/models/user");


module.exports = async function(filter){
 
    const user = await userModel.findOne(filter);
    return user;
}
