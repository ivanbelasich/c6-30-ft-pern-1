// Context
import { AuthProvider } from "./src/context/AuthContext.js";

// Router
import { Router } from "./src/router/Router.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
