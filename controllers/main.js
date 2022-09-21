module.exports = {
  getIndex: (req, res) => {
    res.render('home.html');
  },
  getProfile: (req, res) => {
    res.render("profile.ejs");
  },

};
