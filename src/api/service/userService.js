const User = require("../models/User");
const Product = require("../models/Product");
const mongoose = require("mongoose");

const UserService = {
  getAllUsers() {
    return mongoose.model("User").find();
  },

  getOneUser(userId) {
    return User.findById(userId);
  },
  getOneUserByEmail(email) {
    return User.findOne({ email: email });
  },
  createUser(data) {
      const emailExists = this.getOneUserByEmail(data.email)
      if(emailExists !== null) throw new Error("email taken") 
    const newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    try {
      newUser.save();
      return newUser;
    } catch (error) {
      console.error(error);
    }
  },
  updateUser(data) {
    try {
      User.update(
        { _id: user.id },
        {
          $set: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  },
  getUserProducts(id){
    const products = Product.find({user : id}).populate()
    
    return products
  }
};

module.exports = UserService;
