import { convertCentsToDollars } from "../../helper";
import "./display-balance.css";

function DisplayBalanceBar(props) {
  return (
    <div className="display-balance-bar">
      Balance: {convertCentsToDollars(props.balance)}
    </div>
  );
}

export default DisplayBalanceBar;
