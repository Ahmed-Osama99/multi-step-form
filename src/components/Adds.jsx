import { useUserContext } from "../context/UserContext";
import addOns from "/src/data/addOns.json";

function Adds() {
  const { billingCycle, selectedAdds, setSelectedAdds } = useUserContext();

  function handelCheckedInputs(e) {
    const { id, checked } = e.target;

    setSelectedAdds((prev) => ({ ...prev, [id]: checked }));
  }

  // console.log(selectedAdds);

  return (
    <div className="box">
      <h1 className="box__header">Pick add-ons</h1>
      <p className="box__descr">Add-ons help enhance your gaming experience.</p>
      <div className="adds">
        {/* <label className={`add_service ${selectedAdds.online_service ? 'checked' : ''}`} htmlFor="online_service">
          <input
            type="checkbox"
            name="online_service"
            id="online_service"
            checked={selectedAdds.online_service}
            onChange={handelCheckedInputs}
          />
          <div className="add_info">
            <p className="add_info--name">Online service</p>
            <p className="add_info--descr">Access to multiplayer games</p>
          </div>
          <p className="add_price">+$1/mo</p>
        </label>
        <label className={`add_service ${selectedAdds.large_storage ? 'checked' : ''}`} htmlFor="large_storage">
          <input
            type="checkbox"
            name="large_storage"
            id="large_storage"
            checked={selectedAdds.large_storage}
            onChange={handelCheckedInputs}
          />
          <div className="add_info">
            <p className="add_info--name">Large storage</p>
            <p className="add_info--descr">Extra 1TB of cloud save</p>
          </div>
          <p className="add_price">+$2/mo</p>
        </label>
        <label className={`add_service ${selectedAdds.customize_profile ? 'checked' : ''}`} htmlFor="customize_profile">
          <input
            type="checkbox"
            name="customize_profile"
            id="customize_profile"
            checked={selectedAdds.customize_profile}
            onChange={handelCheckedInputs}
          />
          <div className="add_info">
            <p className="add_info--name">Customizable profile</p>
            <p className="add_info--descr">Custom theme on your profile</p>
          </div>
          <p className="add_price">+$2/mo</p>
        </label> */}
        {addOns.map((add) => {
          const price = billingCycle === 'monthly' ? add.monthlyPrice : add.yearlyPrice;
          const duration = billingCycle === 'monthly' ? 'mo' : 'yr'
          return (
            <label
              key={add.id}
              className={`add_service ${selectedAdds[add.id] ? "checked" : ""}`}
              htmlFor={add.id}
            >
              <input
                type="checkbox"
                id={add.id}
                checked={selectedAdds[add.id]}
                onChange={handelCheckedInputs}
              />
              <div className="add_info">
                <p className="add_info--name">{add.name}</p>
                <p className="add_info--descr">{add.description}</p>
              </div>
              <p className="add_price">{`+$${price}/${duration}`}</p>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default Adds;
