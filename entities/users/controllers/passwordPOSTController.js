const updatePassword = require("../services/updatePassword");



module.exports = async function(req, res){
    console.log(req.body.confirm_password);
    var token = req.body.params;
    var new_password = req.body.confirm_password;

    var filter = { "username" : req.session.username};
    var update = { "password" : new_password};
    try{
    var updatedUser = await updatePassword(filter, update);
    console.log(updatedUser);
    res.redirect('/user/logout');
    }
    catch(err){
        console.log(err);
        res.send(err);
    }
}

