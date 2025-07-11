import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        
          <Home />
        
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
