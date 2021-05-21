import { useEffect, useState } from "react"
import { fetchData } from "../../helper";
import Purchase from "../purchase/purchase";
import "./display-purchases.css";

function DisplayPurchases({user}) {
    const { user_id } = user
    const [purchases, setPurchases] = useState([]);

    // Get all user purchases
    // DO NOT want to send user_id through params in production
    useEffect(() => {
        const getPurchases = async () => {
            const allPurchases = await fetchData(`giftcards_purchased_by_user?user_id=${user_id}`);
            setPurchases(allPurchases);
        };
        getPurchases()
    }, [user_id, user])

    return (
        <div className="purchases-container">
            {purchases.length > 0 ? 
            <>
                <h2>Purchase History</h2>
                {purchases.map((purchase) => {
                   return <Purchase key={purchase.id} purchaseData={purchase} />;
                })}
            </>
                :
                <h2>No Purchase History</h2>
            }
        </div>
    )
}

export default DisplayPurchases;