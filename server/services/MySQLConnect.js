const mysql = require('mysql2');
let db = {};
db.createConnection = async () => {
    return new Promise((resolve, reject) => {
        try {
            let connection = mysql.createConnection({
                host: process.env.HOST,
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE,
                dateStrings: true
            });
            resolve(connection);
            connection.connect(async (e) => {
                if (e) {
                    reject(new Error(e.message))
                };
                resolve(connection);
            });
        } catch (e) {
            reject(new Error(e.message))
        };
    });
};
db.query = async (sqlQuery, params, type, conn) => {
    return new Promise((resolve, reject) => {
        try {
            conn.query(sqlQuery, params, async (err, result) => {
                if (!err) {
                    switch (type) {
                        case 'select':
                            resolve(JSON.parse(JSON.stringify(result)))
                            break
                        case 'insert':
                            resolve(parseInt(result.insertId))
                            break
                        case 'update':
                        case 'replace':
                        case 'delete':
                                resolve(true)         
                            break
                        default:
                            throw new Error('Query type not match')
                    }
                } else {
                    console.log('Query or database error: ', err)
                    reject()
                }
            })
        } catch (error) {
            reject(new Error(error.message))
        }
    })
}
module.exports = db;