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

router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.status(200)
  res.send(JSON.stringify(category));
  // create a new category
});

router.put('/:id', async (req, res) => {
  const category = await Category.findOne({ where: { id: req.params.id },}, )
  category.category_name = req.body.category_name;
  await category.save();
  res.status(200)
  res.send(JSON.stringify(category));
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  const category = await Category.findOne({ where: { id: req.params.id },}, )
  category.category_name = req.body.category_name;
  await category.destroy();
  res.status(200)
  res.send(JSON.stringify(category));

  // delete a category by its `id` value
});

module.exports = router;
