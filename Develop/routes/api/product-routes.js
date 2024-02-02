const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: ProductTag,
        as: 'tags',
      },
    ],
  })
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(500).json(err));
});

// get one product
router.get('/:id', (req, res) => {
  Product.findByPk(req.params.id, {
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: ProductTag,
        as: 'tags',
      },
    ],
  })
    .then((product) => {
      if (!product) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.status(200).json(product);
    })
    .catch((err) => res.status(500).json(err));
});

// create new product
// ... (keep as is from your previous code)

// update product
// ... (keep as is from your previous code)

// delete product
// ... (keep as is from your previous code)

module.exports = router;
