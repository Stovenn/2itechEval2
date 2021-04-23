const LocalStrategy = require("passport-local").Strategy;
const UserService = require("../service/userService");
const bcrypt = require('bcrypt');



function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await UserService.getOneUserByEmail(email)
        console.log(user)
        
        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false);
            }
        } catch (error) {
            done(error)
        }
    }

    passport.use('local', new LocalStrategy({usernameField: 'email'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user._id)) 
    
    passport.deserializeUser((id, done) => {
        done(null, UserService.getOneUser(id))
    })
}

module.exports = initialize

