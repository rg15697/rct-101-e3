import "./App.css";
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar.jsx"
import {AuthProvider} from "./context/AuthContext"

function App() {
  return (
    <div className="App">
        <AuthProvider>
             {/* <Navbar /> */}
             <Home />
        </AuthProvider>
       
    </div>
  );
}

export default App;
