const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bcrypt = require('bcrypt') 

const userSchema = new Schema({
    id: ObjectId,
    firstName: String,
    lastName: String,
    email: String,
    password:String,
    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Product'}
    ]
}, {
    timestamps: true
})

userSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
   
     
const User =  mongoose.model('User', userSchema);

module.exports = User;