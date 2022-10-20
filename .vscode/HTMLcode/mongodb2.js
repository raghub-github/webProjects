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
// Deleting item in smongo db
// deleteOne will delete the matching entry and will delete the first entry in case of multi document match
db.items.deleteOne({price: 22000})
// Deleting similar items in smongo db in one line code
db.items.deleteMany({price: 22000})
// Updating the value in mongo db
db.items.updateOne({name: "oppo 30f"},{$set: {price: 2}}) 
db.items.updateMany({name: "oppo 30f"},{$set: {price: 2, rating: 1}}) 
