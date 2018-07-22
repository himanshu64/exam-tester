const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userroutes");
const cors = require("./utils/middleware/cors");

app.use(express.static("public"));
app.use((bodyParser.urlencoded({
    extended: false
})));

app.use(bodyParser.json());
app.use(cors);
app.use("/", userRoutes);

app.listen(process.env.PORT || 1234, () => {
    console.log("server start ");
})