// const mysql2 = require('mysql2');

// // const dbConnection = mysql2.createPool({
// //     user: process.env.USER,
// //     database: process.env.DATABASE,
// //     host:"localhost",
// //     password: process.env.PASSWORD,
// //     connectionLimit:"10"
// // })
// // 

// // console.log(process.env.JWT_SECRET)

// // dbConnection.execute("select 'test' ",(err,result)=>{
// //     if (err){
// //         console.log(err.message)
// //     }
// //     else{
// //         console.log(result)
// //     }
// // })

// module.exports=dbConnection.promise()


const mysql2 = require('mysql2');
require('dotenv').config(); // Load environment variables from a .env file

const dbConnection = mysql2.createPool({
    user: process.env.RAILWAY_DB_USER,
    database: process.env.RAILWAY_DB_NAME,
    host: process.env.RAILWAY_DB_HOST,
    password: process.env.RAILWAY_DB_PASSWORD,
    port: process.env.RAILWAY_DB_PORT, // Optional if the default port (3306 for MySQL) is used
    connectionLimit: 10
});

// Example query to test the connection
dbConnection.query('SELECT 1', (err, results) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connection successful:', results);
    }
});

module.exports = dbConnection;
