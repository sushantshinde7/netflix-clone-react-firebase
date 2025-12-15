import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseAuth";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

export const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(res.user, {
      displayName: name,
    });

    toast.success("Account created successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully");
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully");
  } catch (error) {
    toast.error(error.message);
  }
};
