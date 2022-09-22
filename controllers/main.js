module.exports = {
  getHome: (req, res) => {
    res.render('home.html');
  },
  getAbout: (req, res) => {
    res.render("about.html");
  },
  getPlan: (req, res) => {
    res.render("plan.html");
  },
};
