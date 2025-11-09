import checkMark from "../assets/images/icon-thank-you.svg";
// import '../style/box.css'
function Thanks() {
  return (
    <div className="box thank-box">
      <img className="all-done-icon" src={checkMark} alt="all-done-icon" />
      <h1 className="box__header">Thank You!</h1>
      <p className="box__descr">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
export default Thanks;
