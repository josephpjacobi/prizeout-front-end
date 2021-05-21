import { useState } from "react";
import GiftCardCheckout from "../gift-card-checkout/gift-card-checkout";
import "./gift-card.css";

function GiftCard({ brandData, user, currencyCode, setUser }) {
  const { name, image_url } = brandData;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="gift-card" id={brandData.brand_code}>
      <button onClick={() => setClicked(!clicked)} style={{ margin: "3px" }}>
        {clicked ? "X" : "Buy Now"}
      </button>
      {clicked ? (
        <GiftCardCheckout
          brandData={brandData}
          user={user}
          currencyCode={currencyCode}
          setUser={setUser}
        />
      ) : (
        <>
          <div
            className="logo"
            style={{ backgroundImage: `url(${image_url})` }}
          ></div>
          <h3>{name}</h3>
        </>
      )}
    </div>
  );
}

export default GiftCard;
