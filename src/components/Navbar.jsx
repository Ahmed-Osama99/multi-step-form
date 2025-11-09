import { Link, useLocation } from "react-router-dom";
import stepsData from "/src/data/stepsData.json";
import Step from "./Step";
import "../style/Navbar.css";

function Navbar() {
  const location = useLocation();
  const normalize = (p = "") => p.replace(/[-_]+/g, "-").replace(/\/+$/, "");

  const currentPath =
    location.pathname === "/" ? stepsData[0]?.path ?? "/" : location.pathname;

  return (
    <nav className="navbar">
      {stepsData.map((s) => (
        <Link to={s.path} key={s.id}>
          <Step
            stepOrder={s.id}
            stepName={s.name}
            isActive={normalize(currentPath) === normalize(s.path)}
          />
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;