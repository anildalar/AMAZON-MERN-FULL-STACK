const mongoose = require('mongoose');

//Promise Chain

console.log(process.env.MONGODB_USER);
console.log(process.env.MONGODB_PASS);
console.log(process.env.MONGODB_DB);

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@amazon-cluster.fe5nh.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`).then((d)=>{
    console.log('Connected TO DB');
}).catch((e)=>{
    console.log('error ',e);
});


module.exports = mongoose;