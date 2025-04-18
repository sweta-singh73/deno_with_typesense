
import { mongoose } from "../../deps.ts";
 
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  } ,
  summary: {
    type: String
  },
  rating: {
    type: Number,
  },
  userId: {
    type:String, 
    required: true
  },
});
 
const Book = mongoose.model("Book", bookSchema);
export default Book;