use("Ecommerce");

// db.Products.updateOne(
// { name: "Wireless Mouse" },
// { $set: { price: 899 } }
// )

// db.Products.updateMany(
// { category: "Electronics" },
// {$inc: {stock: 11}})

db.Products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "Mouse" } }
)
