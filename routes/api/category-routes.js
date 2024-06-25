const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
  res.json("categories get all route")

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req)
  var id = req.params.id 
  var body = req.body
  res.json({message:`find category by id ${id}`, body:body})
});

router.post('/', async (req, res) => {
  // create a new category
  const category = await Category.create(req.body);
  res.json(category)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
