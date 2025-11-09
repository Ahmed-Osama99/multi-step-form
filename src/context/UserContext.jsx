import { createContext, useContext, useState } from "react";
import addOns from "/src/data/addOns.json";
const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  //for userinfo data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //for user main plan
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Arcade",
    price: 9,
  });
  //enhancement for duration variable
  const duration = billingCycle === "monthly" ? "mo" : "yr";
  // for user ADDs-ons
  const [selectedAdds, setSelectedAdds] = useState({
    online_service: true,
    large_storage: false,
    customize_profile: false,
  });
  // for final selected Adds with data
  const finalSelectedAdds = Object.keys(selectedAdds).filter(
    (key) => selectedAdds[key] === true
  );

  const dataOfSelectedAdds = addOns
    .filter((addOn) => finalSelectedAdds.includes(addOn.id))
    .map((addOn) => ({
      name: addOn.name,
      price:
        billingCycle === "monthly" ? addOn.monthlyPrice : addOn.yearlyPrice,
    }));
  //state for handle input
  const [isInputValid, setIsInputValid] = useState({
    user_name: true,
    user_email: true,
    user_phone: true,
  });
  // function for format phone number
  function formatPhoneNumber(value) {
    // remove all non-digit
    const rawDigits = value.replace(/\D/g, "");
    if (!rawDigits){
      // setIsInputValid((prev) => ({ ...prev, user_phone: false }));
      return ''
    } 
    // Limit to the maximum length for +1 234 567 890 (11 digits after +)
    const digits = rawDigits.substring(0, 12);

    let formatted = "+";

    //country code
    formatted += digits.substring(0, 1);

    // group 1
    if (digits.length > 1) {
      formatted += ` ${digits.substring(1, 4)}`;
    }
    // group 2
    if (digits.length > 4) {
      formatted += ` ${digits.substring(4, 7)}`;
    }
    // group 3
    if (digits.length > 7) {
      formatted += ` ${digits.substring(7, 12)}`;
    }
    return formatted;
  }
  // function to calculate total price
  const calcTotal = () => {
    let totalPrice = 0;

    totalPrice += selectedPlan.price;

    dataOfSelectedAdds.forEach(addOn=>{
      totalPrice += addOn.price;
    })

    return totalPrice
  };
  const contextValue = {
    //personal info
    name,
    email,
    phone,
    setEmail,
    setName,
    setPhone,
    //valid input handle
    isInputValid,
    setIsInputValid,
    // plan state
    billingCycle,
    setBillingCycle,
    selectedPlan,
    setSelectedPlan,
    //duration (mo / yr)
    duration,
    // Adds state
    selectedAdds,
    setSelectedAdds,
    dataOfSelectedAdds,
    // utility function
    calcTotal,
    //format phone Number
    formatPhoneNumber
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserContext;
