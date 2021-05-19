import { convertCentsToDollars } from "../../helper";

function DisplayUserInfo({ user }) {
  const { email, currency, balance } = user;
  return (
    <div className="user-info-container">
      <div>Email: {email}</div>
      <div>Currency: {currency}</div>
      <div>
        Available Balance: {currency}
        {convertCentsToDollars(balance)}
      </div>
    </div>
  );
}

export default DisplayUserInfo;
