const UserService = require('../service/userService')
const passport = require('passport');

exports.user_list = async (req, res) => {
    try{
        const users = await UserService.getAllUsers()
        return res.status(200).json(users)
    } catch(error) {
        console.error('[UserController]', error)
        return res.status(400).json({'error': error})
    }
}

exports.user_detail = async(req, res) => {
    try{
        const user = await UserService.getOneUser(req.params.id)
        return res.status(200).json(user)
    } catch(error) {
        console.error('[UserController]', error)
        return res.status(400).json({'error': error})
    }
}

exports.user_create = async (req, res) => {
    try{
        const newUser = await UserService.createUser(req.body)
        return res.status(201).json(newUser)
    } catch(error) {
        console.error('[UserController]', error)
        return res.status(400).json({'error': error})
    }
}

exports.user_update = async (req, res) => {
    try{
        console.log("here", req.user)
        const newUser = await UserService.updateUser(req.body)
        return res.status(203).json(newUser)
    } catch(error) {
        console.error('[UserController]', error)
    }
}

exports.user_login = (req, res, next) => {
    passport.authenticate('local', (err, user, info)=> {
        if(err) throw err;
        if(!user) res.send("User not found");
        else{
            req.login(user, err => {
                if (err) throw err;
                res.send(user);
                console.log(req.user)
            })
        }
    })(req, res, next)
}

exports.user_products = async(req, res) => {
    console.log(req.params)
    try{
        const products = await UserService.getUserProducts(req.user.id)
        return res.status(200).json(products)
    } catch (error) {

    }
}
exports.user_delete = (req, res) => {

}