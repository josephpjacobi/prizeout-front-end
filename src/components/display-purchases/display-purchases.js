import { useEffect, useState } from "react"
import { fetchData } from "../../helper";
import Purchase from "../purchase/purchase";

function DisplayPurchases() {
    const [purchases, setPurchases] = useState([])

    //useEffect to get purchases from db
    // useEffect(() => {
    //     const getPurchases = async () => {
    //         const allPurchases = await fetchData()
    //         setPurchases(allPurchases);
    //     };
    //     getPurchases()
    // }, [purchases])

    return (
        <div className="purchases-container">
            {purchases ? 
                purchases.forEach((purchase) => {
                   return <Purchase purchaseData={purchase} />;
                })
                :
                <h2>No Purchase History</h2>
            }
        </div>
    )
}

export default DisplayPurchases;