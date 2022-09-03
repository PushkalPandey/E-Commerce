
const loadMoreData = require("../services/loadMoreData");



module.exports = function (req,res){
    
        
        console.log(req.body.startFrom);
        var startFrom = req.body.startFrom;
        loadMoreData(startFrom)
        .then(function(data){
            // console.log("THE DAATA",data);
            res.end(JSON.stringify(data));
            return;
        })
        .catch(function(err){
            console.log(err);
            return;
        })
        return;
    
    
    
}