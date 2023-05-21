import user from "../models/user.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export const register = async(req,res,next)=>{
    try{
        // INI HASH PASSWORD
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        const newUser = new user({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });

        await newUser.save()
        res.status(200).send("username berhasil terdaftar")
    }catch(err){
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try{
        const User = await user.findOne({username:req.body.username});
        if(!User) return next(createError(404,"User tidak ditemukan"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password, 
            User.password
            );
        if(!isPasswordCorrect)
            return next(createError(400,"Password salah"));

        res.status(200).json(User);
    }catch(err){
        next(err)
    }
};
