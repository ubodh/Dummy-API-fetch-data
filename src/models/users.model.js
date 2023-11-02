import axios from "axios";

 const userModel = async () => {
  try {
    const res = await axios("https://dummyjson.com/users");
    return res.data.users;
  } catch (err) {
    console.log(err);
  }
};

export default userModel;