import { useEffect, useState } from "react";
import { fetchData } from "../../helper";
import "./user-form.css";

function UserForm({ setUser }) {
  const [availableCurrencies, setAvailableCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [email, setEmail] = useState("");
  const [validFields, setValidFields] = useState(false);

  useEffect(() => {
    const getCurrencyCodes = async () => {
      const currencyCodes = await fetchData("available_currency_codes");
      setAvailableCurrencies(currencyCodes.currency_codes);
    };
    getCurrencyCodes();
  }, []);

  useEffect(() => {
    setValidFields(email && selectedCurrency);
  }, [email, selectedCurrency]);

  async function handleSubmit(e) {
    e.preventDefault();
    const balance = await fetchData(
      `user/available_balance?email=${email}&currency_code=${selectedCurrency}`
    );
    setUser({
      id: balance.id,
      email: email,
      currency: selectedCurrency,
      balance: balance.balance_in_cents,
      isValid: true,
    });
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="user-form">
      <label htmlFor="email">
        Email:
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {availableCurrencies.length > 0 ? (
        <label htmlFor="currency">
          Currency:
          <select
            name="currency"
            id="currency"
            value={selectedCurrency}
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value="">Select one</option>
            {availableCurrencies.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              );
            })}
          </select>
        </label>
      ) : (
        <div>Loading...Please Wait</div>
      )}
      {validFields && (
        <button type="submit">Browse {selectedCurrency} giftcards.</button>
      )}
    </form>
  );
}

export default UserForm;
