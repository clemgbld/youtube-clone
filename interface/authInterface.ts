import { User } from "firebase/auth";
export interface IAuth {
  user: User | null;
  login: () => void;
  logout: () => void;
}
