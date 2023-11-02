
import userModel from "../models/users.model.js";

 const userController = async (req, res) => {
   const userData=await userModel();
//    console.log(userData);
    res.render('index.ejs',{users:userData});
};

export default userController;