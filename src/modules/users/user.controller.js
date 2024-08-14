import { userModel } from "../../../db/models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signUp = async (req, res) => {
   try {
      let { name, email, password,rePassword } = req.body
      let existUser = await userModel.findOne({ email })
      if (existUser) return res.json({ message: "email already exists"})
      let hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALTROUNDS))
      let addedUser = await userModel.insertMany({ name, email, password: hashedPassword , rePassword})
      res.json({ message: "Hello", addedUser })
   } catch (error) {
      res.json({ message: "error", error })
   }
}

export const signIn = async (req, res) => {
   try {
      let { email, password } = req.body
      let existUser = await userModel.findOne({ email })
      if (existUser) { 
         let matched = bcrypt.compareSync(password,existUser.password)
         if (matched) {
           let token = jwt.sign({id:existUser._id},process.env.SECRET_KEY)
            res.json({ message: "welcome",token })
         } else {
            res.json({ message: "wrong password" })
         }
      } else{
         res.json({ message: "register first" })
      }
   } catch (error) {
      res.json({ message: "error", error })
   }
}
