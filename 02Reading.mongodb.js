use("Ecommerce");

// db.Products.find({"name": "Wireless Mouse"})
// db.Products.find({ category: "Electronics" })

// db.Products.find({ price: { $gt: 1000 } })

// db.Products.find({ price: { $gte: 1000, $lte: 50000 } })

// db.Products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// db.Products.find({}, { name: 1, price: 1, _id: 0 })

db.Products.find().sort({ price: -1 }).skip(1).limit(1)