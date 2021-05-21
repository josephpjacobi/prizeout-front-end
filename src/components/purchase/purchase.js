import { convertCentsToDollars } from "../../helper";
import "./purchase.css";

function Purchase({ purchaseData }) {
  const { date, value, quantity, brand_name } = purchaseData;
  return (
    <div className="purchase">
      <p>
        <strong>Purchased On:</strong> {date}
      </p>
      <p>
        <strong>Brand Name:</strong> {brand_name}
      </p>
      <p>
        <strong>Amount:</strong> {convertCentsToDollars(value)}
      </p>
      <p>
        <strong>Quantity:</strong> {quantity}
      </p>
    </div>
  );
}

export default Purchase;
