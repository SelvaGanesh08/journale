const journal = require('../models/journal');

exports.getwrite = (req, res, next) => {
  res.render('web/write', {
    pageTitle: 'Add Article',
    path: '/write',
    editing: false
  });
};

exports.postwrite = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const imgurl = req.body.imgurl;
  const category = req.body.category;
  const des = req.body.des;
  const date= req.body.date;
  const pretext=req.body.pretext
  const journals = new journal(null, title, author ,imgurl, des, category,date,pretext);
  journals
    .save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => console.log(err));
};