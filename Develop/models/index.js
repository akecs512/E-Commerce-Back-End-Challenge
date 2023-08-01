// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'set NULL',
});
// Categories have many Product
Product.belongsTo(Category, {
  foreignKey:'category_id',
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey:'tag_id',
});
Product.belongstoMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id',
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
