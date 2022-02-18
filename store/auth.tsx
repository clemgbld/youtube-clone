import { createContext, FC, useContext, useState, useEffect } from "react";
import app from "../firebase/firebase";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { User } from "firebase/auth";
import { IAuth } from "../interface/authInterface";

const auth = getAuth(app);

const AuthContext = createContext<IAuth>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
