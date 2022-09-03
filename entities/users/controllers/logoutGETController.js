
module.exports = function(req, res)
{
  if(req.session.isAuthenticated){
  req.session.isAuthenticated=false;
  res.redirect("/user/login");
  return;
}
  res.redirect("/user/login");
}