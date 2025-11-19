import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Load user on initial mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        setUser(parsed);
        setIsAuthenticated(true);
      }
    } catch (err) {
      console.error("Auth loading error:", err);
      localStorage.removeItem("currentUser");
    }
  }, []);

  // -------------------------------------------------------------
  // SIGN UP
  // -------------------------------------------------------------
  const signUp = (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // check if email exists
      const exists = users.some((u) => u.email === email);
      if (exists) {
        return { success: false, error: "User already exists" };
      }

      // create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password: btoa(password), // simple encoding
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // store current user (without password)
      const current = { id: newUser.id, email: newUser.email };
      localStorage.setItem("currentUser", JSON.stringify(current));

      setUser(current);
      setIsAuthenticated(true);

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // -------------------------------------------------------------
  // SIGN IN
  // -------------------------------------------------------------
  const signIn = (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const found = users.find((u) => u.email === email);
      if (!found) {
        return { success: false, error: "Invalid credentials" };
      }

      if (found.password !== btoa(password)) {
        return { success: false, error: "Invalid credentials" };
      }

      const current = { id: found.id, email: found.email };
      localStorage.setItem("currentUser", JSON.stringify(current));

      setUser(current);
      setIsAuthenticated(true);

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  // -------------------------------------------------------------
  // SIGN OUT
  // -------------------------------------------------------------
  const signOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
