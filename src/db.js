import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mjrvasdev:JDkaxNUf1bYMBRf3@projectmerndb.g4gdqb4.mongodb.net/?retryWrites=true&w=majority');
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    }
}