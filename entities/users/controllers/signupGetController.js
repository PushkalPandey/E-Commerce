


module.exports = function(req, res)
{
  if(req.session.isAuthenticated){
  res.send("already logged in");
  return;
}
  res.render("signup.ejs",{err:''});
}