const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll(
    {include: Product}
    )
  console.log(tags);
  res.status(200)
  res.send(JSON.stringify(tags));
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const tag = await Tag.findOne({ where: { id: req.params.id },include: Product }, );
  res.status(200)
  res.send(JSON.stringify(tag));

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  const tag = await Tag.create(req.body);
  res.status(200)
  res.send(JSON.stringify(tag));
  // create a new tag
});

router.put('/:id', async (req, res) => {
  const tag = await Tag.findOne({ where: { id: req.params.id },}, )
  tag.tag_name = req.body.tag_name;
  await tag.save();
  res.status(200)
  res.send(JSON.stringify(tag));
  // update a tag's name by its `id` value
});

router.delete('/:id',async (req, res) => {
  const tag = await Tag.findOne({ where: { id: req.params.id },}, )
  tag.tag_name = req.body.tag_name;
  await tag.destroy();
  res.status(200)
  res.send(JSON.stringify(tag));
  // delete on tag by its `id` value
});

module.exports = router;
