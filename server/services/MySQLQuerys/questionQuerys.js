const moment = require("moment")
const db = require("../MySQLConnect");


let questionQuerys = {};

questionQuerys.addQuestion = async (questionData) => {
    conn = null;
    try {
        conn = db.createConnection();
        const questionObject = {
            text:questionData.text,
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss" )
        }
        const result = db.query("INSERT INTO questions SET ?", questionData, "insert", conn);
        return result;
    } catch (e) {
        throw new Error("Error adding a new question" + e.message)
    }finally{ 
        conn && await conn.end();
    }
}

module.exports = questionQuerys;