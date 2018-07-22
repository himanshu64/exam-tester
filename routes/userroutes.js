const expres = require("express");
const userRoute = expres.Router();

userRoute.post("/dologin", (request, resonse) => {
    var userid = request.body.userid;
    var pwd = request.body.pwd;
    if (userid == pwd) {
        resonse.end("Welcome User " + userid);
    } else {
        resonse.end("invalid user id or  password");
    }
});
userRoute.get("/questions", (request, resonse) => {
    var questions = {
        id: 10,
        name: 'JS Stands for',
        ans1: 'JavaScript',
        ans2: 'Java Snake',
        ans3: 'Both',
        ans4: 'None of These',
        score: 5
    };
    response.json(questions);
});
module.exports = userRoute;