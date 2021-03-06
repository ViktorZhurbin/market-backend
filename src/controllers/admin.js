const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.find({})
    .then((products) => {
      console.log('PRODUCTS', products);
      res.send(products);
    })
    .catch((err) => console.log(err));
};

exports.postAddProduct = (req) => {
  const {
    body: { title, price },
  } = req;
  const product = new Product({
    title,
    price,
  });
  product
    .save()
    .then((response) => {
      console.log('ADDED PRODUCT', response);
    })
    .catch((err) => console.log('Log', err));
};

exports.postEditProduct = (req) => {
  const {
    body: { title, price, productId },
  } = req;

  Product.findById(productId)
    .then((product) => {
      const updatedProduct = { ...product, title, price };

      return updatedProduct.save().then((result) => {
        console.log('UPDATED PRODUCT', result);
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req) => {
  const prodId = req.body.productId;

  Product.deleteOne({ _id: prodId })
    .then(() => {
      console.log('DELETED PRODUCT', prodId);
    })
    .catch((err) => console.log(err));
};
