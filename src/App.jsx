import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";
import PersonInfo from "./components/PersonInfo";
import Plan from "./components/Plan";
import Adds from "./components/Adds";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";
import "./style/App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main">
        <UserProvider>
          <Routes>
            <Route path="/" element={<PersonInfo />} />
            <Route path="/personal_info" element={<PersonInfo />} />
            <Route path="/select_plan" element={<Plan />} />
            <Route path="/add_ons" element={<Adds />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thanks" element={<Thanks/>}/>
          </Routes>
          <Footer />
        </UserProvider>
      </main>
    </div>
  );
}

export default App;
