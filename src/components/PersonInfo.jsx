import { useUserContext } from "../context/UserContext";
import "../style/box.css";
function PersonInfo() {
  const {
    name,
    email,
    phone,
    setName,
    setEmail,
    setPhone,
    isInputValid,
    setIsInputValid,
    formatPhoneNumber
  } = useUserContext();

  function handleInput(e, setter) {
    let inputValue = e.target.value;
    const inputId = e.target.id;

    //apply formating phone number
    if(inputId === 'phone'){
      inputValue = formatPhoneNumber(inputValue)
    }

    setter(inputValue);

    if (inputValue === "") {
      setIsInputValid((prev) => ({ ...prev, [`user_${inputId}`]: false }));
    } else {
      setIsInputValid((prev) => ({ ...prev, [`user_${inputId}`]: true }));
    }
  }

  // function handleChange(e, setter) {
  //   setter(e.target.value);
  // }

  return (
    <div className="box person_info">
      <h1 className="box__header">Personal info</h1>
      <p className="box__descr">
        Please provide your name, email address, and phone number.
      </p>
      <form className="box__form">
        <label
          className={`box__label ${!isInputValid.user_name && "required"}`}
          htmlFor="name"
        >
          Name
          <input
            className={`box__input ${!isInputValid.user_name && "required"}`}
            id="name"
            type="text"
            value={name}
            onChange={(e) => handleInput(e, setName)}
            placeholder="e.g. Stephen King"
            required
          />
        </label>
        <label
          className={`box__label ${!isInputValid.user_email && "required"}`}
          htmlFor="email"
        >
          Email Address
          <input
            className={`box__input ${!isInputValid.user_email && "required"}`}
            id="email"
            type="email"
            value={email}
            onChange={(e) => handleInput(e, setEmail)}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </label>
        <label
          className={`box__label ${!isInputValid.user_phone && "required"}`}
          htmlFor="phone"
        >
          Phone Number
          <input
            className={`box__input ${!isInputValid.user_phone && "required"}`}
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => handleInput(e, setPhone)}
            pattern="^\+ [0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{4}"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </label>
      </form>
    </div>
  );
}

export default PersonInfo;
