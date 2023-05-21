import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    tipe:{
        type: String,
        required: true
    },
    kota:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    jarak:{
        type: String,
        required: true
    },
    foto:{
        type: [String],
    },
    title:{
        type: String,
        required: true,
    },
    deskripsi:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    ruangan:{
        type: [String],
    },
    harga:{
        type: Number,
        required: true
    },
    fitur:{
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Hotel", HotelSchema)