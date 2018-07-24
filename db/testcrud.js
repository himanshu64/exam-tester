const userOperations = require("./useroperations");
//var userObject = {
//   userid: 'himanshu',
// password: 'him@123'
//}
const userObject = {
    uid: 'himanshu',
    pwd: 'him@123'
}
//userOperations.addNewUser(userObject);
userOperations.fetchUser(userObject);