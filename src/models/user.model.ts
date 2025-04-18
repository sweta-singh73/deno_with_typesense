import { mongoose } from "../../deps.ts";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { 
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export interface AuthenticatedUser {
  _id: mongoose.Types.ObjectId; 
  name: string;
  email: string;
  password: string;
}


export const User = mongoose.model("User", userSchema);
