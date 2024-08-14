import mongoose from 'mongoose'
export const dbConnection = () =>{
    mongoose.connect('mongodb://localhost:27017/shopping').then(()=>console.log('DB connected')
    ).catch((err)=>console.log(err)
    );
}