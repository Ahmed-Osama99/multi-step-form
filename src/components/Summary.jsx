import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
function Summary() {
  const { selectedPlan, billingCycle,duration ,dataOfSelectedAdds,calcTotal } = useUserContext();

  return (
    <div className="box">
      <h1 className="box__header">Finishing up</h1>
      <p className="box__descr">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary">
        <div className="summary__plan">
          <p className="main_plan">
            {selectedPlan.name} <span className="duration">({billingCycle})</span>
            <Link className="change-plan-link" to="/select_plan">
              Change
            </Link>
          </p>
          <div className="plan_price"> {`$ ${selectedPlan.price}/${duration}`}</div>
        </div>
        <div className="summary__adds">
          {/* <div className="add_plan">
            <div className="add_name">Online service</div>
            <div className="add_price">+$1/mo</div>
          </div>
          <div className="add_plan">
            <div className="add_name">Large storage</div>
            <div className="add_price">+$2/mo</div>
          </div> */}
          {dataOfSelectedAdds.map(addOn => (
            <div className="add_plan">
              <div className="add_name">{addOn.name}</div>
            <div className="add_price">{`$ ${addOn.price}/${duration}`}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="total_price">
        <p className="price_duration">Total (per month)</p>
        <div className="final_price">{`$${calcTotal()}/${duration}`}</div>
      </div>
    </div>
  );
}

export default Summary;
