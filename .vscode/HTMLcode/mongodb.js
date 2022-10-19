// Inserting data in mongo db
// use rghukart
// Its not a javaScript file
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.3, qty: 224, sold: 87})

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.3, qty: 224, sold: 87},{name: "oppo 30f", price: 9000, rating: 4.4, qty: 24, sold: 870}, {name: "vivo", price: 12000, rating: 3.9, qty: 99, sold: 71, isBig: true}])