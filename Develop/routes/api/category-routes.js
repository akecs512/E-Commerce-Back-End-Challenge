const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) =>  {
  const categories = await Category.findAll(
    {include: Product}
    )
  console.log(categories);
  res.status(200)
  res.send(JSON.stringify(categories));


  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  console.log(req.params);
  
  const category = await Category.findOne({ where: { id: req.params.id },include: Product }, );
  res.status(200)
  res.send(JSON.stringify(category));
  
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
