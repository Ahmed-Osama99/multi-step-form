import { Link, useLocation } from "react-router-dom";
import stepsData from "/src/data/stepsData.json";
import "../style/footer.css";
function Footer() {
  const routeOrder = stepsData.map((s) => s.path);

  // console.log(routeOrder);

  const location = useLocation();
  const currentPath = location.pathname;
  //find index of the current path
  const currentIndex =
    routeOrder.indexOf(currentPath) === -1
      ? 0 // this for if route = '/' return 0 as '/personal_info'
      : routeOrder.indexOf(currentPath);
  // console.log(currentIndex);
  // navigation paths
  const prevPath = routeOrder[currentIndex - 1];
  const nextPath = routeOrder[currentIndex + 1];

  //for conditional render
  const isFirstStep = currentIndex < 1;
  const isLastStep = currentIndex === routeOrder.length - 1; // minus 1 to get '/summary'

  // *** Enhancement: Use a button only for the final confirmation step ***
  // const ButtonCompoent = isLastStep ? "button" : Link;

  return (
    currentPath !== "/thanks" && (
      <footer className="footer">
        {/* <Link to={"../"}>Go Back</Link>
      <button className="hero_button">Next Step</button> */}
        {!isFirstStep && (
          <Link to={prevPath} className="footer__back-link">
            Go Back
          </Link>
        )}

        <Link
          // className="hero_button"
          // {...(!isLastStep && { to: nextPath })}
          {...(isLastStep
            ? { className: "confirm-btn", to: "/thanks" }
            : { className: "hero_button", to: nextPath })}
        >
          {isLastStep ? "Confirm" : "Next step"}
        </Link>
      </footer>
    )
  );
}

export default Footer;
