module.exports = function(req, res)
{
  if(req.session.isAuthenticated){
		res.redirect("/");
		return;
	}
  res.render("login.ejs",{err:""});
}