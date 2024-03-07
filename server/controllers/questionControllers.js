const questionQuerys = require("../services/MySQLQuerys/questionQuerys");

let question = {};

question.addquestion = async (req, res) => {
try {
    const question = await questionQuerys.addQuestion(req.body);
    if(question){
        return res.status(201).send({message:"Question correctly added"})
    }else{
        return res.status(400).send({message:"Error adding question"});
    };   
} catch (e) {
    return res.status(500).send(e.message);
}
};

module.exports = question;