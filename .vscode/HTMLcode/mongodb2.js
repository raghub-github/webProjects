// Searching for data in mongo db
// use rghukart
// Its not a javaScript file

//This query will return all the objects with rating equal to 4.3
db.items.find({rating: 4.3})
// finding the grater value
db.items.find({rating: {$gt: 4.3}})
// finding the grater then equal value
db.items.find({rating: {$gte: 4.3}})
// And operator
db.items.find({rating: {$gte: 4.3}, price:{$gt: 4000}})
// Or operator
db.items.find({$or: [{rating: {$gte: 4.3}}, {price:{$gt: 4000}}]})
// geting perticular element of a object
db.items.find({rating: {$gt: 4.3}}, {rating: 1})

