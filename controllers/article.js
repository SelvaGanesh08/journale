const journal = require('../models/journal');


exports.getarticles = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('web/article', {
        prods: rows,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getarticle = (req, res, next) => {
  const prodId = req.params.productId;
  const po = prodId.slice(0);
  journal.findById(po)
    .then(([product]) => {
      res.render('web/art', {
        article: product,
        path: '/art'
      });
    })
    .catch(err => console.log(err));
};

// exports.getarticle = (req, res, next) => {
//   const artc = req.params.author;
//   journal.fetchAll(artc)
//     .then(([author]) => {
//       res.render('shop/product-detail', {
//         author: author[0],
//         pageTitle: author.title,
//         path: '/art'
//       });
//     })
//     .catch(err => console.log(err));
// };
exports.cater = (req, res, next) => {
    const cate = req.params.category;
    const ca = cate.slice(0);
    
    journal.findBycat(ca)
      .then(([rows]) => {
        res.render('web/article', {
          article: rows,
          path: '/article',
          cates:ca
        });
      })
      .catch(err => console.log(err));
  };
  

exports.getIndex = (req, res, next) => {
  journal.fetchAll()
    .then(([rows,]) => {
      res.render('web/index', {
        article: rows,
        pageTitle: 'Home',
        path: '/'
      });
    })
    .catch(err => console.log(err));
};