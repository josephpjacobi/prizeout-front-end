import { convertCentsToDollars } from "../../helper";
import "./display-user-info.css";

function DisplayUserInfo({ user }) {
  const { email, currency, balance } = user;
  return (
    <div className="user-info-container">
      <div className="info">Email: {email}</div>
      <div className="info">Currency: {currency}</div>
      <div className="info">
        Available Balance: {currency}
        {convertCentsToDollars(balance)}
      </div>
    </div>
  );
}

export default DisplayUserInfo;
