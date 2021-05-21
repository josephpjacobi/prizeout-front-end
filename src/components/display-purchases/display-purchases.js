import { useEffect, useState } from "react";
import { fetchData } from "../../helper";
import Purchase from "../purchase/purchase";
import "./display-purchases.css";

function DisplayPurchases({ user }) {
  const { id } = user;
  const [purchases, setPurchases] = useState([]);

  // Get all user purchases
  useEffect(() => {
    const getPurchases = async () => {
      const allPurchases = await fetchData(
        `giftcards_purchased_by_user?user_id=${id}`
      );
      setPurchases(allPurchases);
    };
    getPurchases();
  }, [id, user]);

  return (
    <div className="purchases-container">
      <h2>
        {purchases.length > 0 ? "Purchase History" : "No Purchase History"}
      </h2>
      <div className="purchases">
        {purchases.map((purchase) => {
          return <Purchase key={purchase.id} purchaseData={purchase} />;
        })}
      </div>
    </div>
  );
}

export default DisplayPurchases;
