import { useUserContext } from "../context/UserContext";
import plansData from "/src/data/mainPlans.json";
function Plan() {
  const { billingCycle, setBillingCycle, selectedPlan, setSelectedPlan } =
    useUserContext();
  // handler for selecting a plan
  function handlePlanSelect(plan) {
    setSelectedPlan({
      name: plan.name,
      price: billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice,
    });
  }
  // handler for toggling the billing cycle
  function handleBillingCycle() {
    const newCycle = billingCycle === "monthly" ? "yearly" : "monthly";
    setBillingCycle(newCycle);
    // update the price for the selected plan
    const currentPlan = plansData.find((p) => p.name === selectedPlan.name);
    if (currentPlan) {
      setSelectedPlan((perv) => ({
        ...perv,
        price:
          newCycle === "monthly"
            ? currentPlan.monthlyPrice
            : currentPlan.yearlyPrice,
      }));
    }
  }
  return (
    <div className="box">
      <h1 className="box__header">Select your plan</h1>
      <p className="box__descr">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plans">
        {/* <div className="plan arcade_plan selected">
          <img className="plan__icon" src={arcadeIcon} alt="arcade icon" />
          <div className="plan__info">
            <p className="plan__info--name">Arcade</p>
            <p className="plan__info--price">$9/mo</p>
          </div>
        </div>
        <div className="plan advanced_plan">
          <img className="plan__icon" src={advancedIcon} alt="advanced icon" />
          <div className="plan__info">
            <p className="plan__info--name">Advanced</p>
            <p className="plan__info--price">$12/mo</p>
          </div>
        </div>
        <div className="plan pro_plan">
          <img className="plan__icon" src={proIcon} alt="pro icon" />
          <div className="plan__info">
            <p className="plan__info--name">Pro</p>
            <p className="plan__info--price">$15/mo</p>
          </div>
        </div> */}
        {plansData.map((plan) => {
          const price =
            billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
          const duration = billingCycle === "monthly" ? "mo" : "yr";

          return (
            <div
              key={plan.name}
              className={`plan ${
                selectedPlan.name === plan.name ? "selected" : ""
              }`}
              onClick={() => handlePlanSelect(plan)}
            >
              <img
                className="plan__icon"
                src={new URL(`../assets/images/${plan.icon}`,import.meta.url).href}
                alt={`${plan.name} icon`}
              />
              <div className="plan__info">
                <p className="plan__info--name">{plan.name}</p>
                <p className="plan__info--price">
                  ${price}/{duration}
                </p>
                {/* {billingCycle === 'yearly' && <p className="free-months">2 Months free</p>} */}
                <p className="free-duration">
                  {billingCycle === "monthly"
                    ? plan.monthlyFreeDuration
                    : plan.yearlyFreeDuration}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="plan-switch">
        <span
          className={billingCycle === "monthly" ? "monthly active" : "monthly"}
        >
          Monthly
        </span>
        <div
          className={`switch_btn ${billingCycle}`}
          onClick={handleBillingCycle}
        ></div>
        <span
          className={billingCycle === "yearly" ? "yearly active" : "yearly"}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default Plan;
