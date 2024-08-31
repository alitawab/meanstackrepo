const mongoose = require('mongoose');
// const uri = "mongodb+srv://admin:admin@nodetodosample.j4qz8.mongodb.net/osbdb?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false
}

mongoose.connect(process.env.DATABASE, connectionParams)
    .then( () => { console.log('Connected to database ')})
    .catch( (err) => { console.error(`Error connecting to the database. \n${err}`);})

// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useCreateIndex: true
// }).then(() => console.log("DB connection established"))
// .catch(err => console.log("DB connection error: ",err));


// const MongoClient = require('mongodb').MongoClient;

// const uri = "mongodb://osbdb:osbdb123@mean-shard-00-00.704rv.mongodb.net:27017,mean-shard-00-01.704rv.mongodb.net:27017,mean-shard-00-02.704rv.mongodb.net:27017/mean?ssl=true&replicaSet=atlas-ira5jj-shard-0&authSource=admin&retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose.connect('mongodb://ali:ali123@ds133378.mlab.com:33378/mean', {
//   // server: { socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
//   // replset: { socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
//   useNewUrlParser: true,
//   useCreateIndex: true
// });

// mongoose.Promise = global.Promise;


// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin' , 'http://localhost:4200');
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append("Access-Control-Allow-Headers", "Origin, Authorization, Accept, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//     res.append('Access-Control-Allow-Credentials', true);
//     next();
// });

