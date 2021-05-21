import { useState } from "react";
import DisplayUserInfo from "../display-user-info/display-user-info";
import DisplayGiftCards from "../display-gift-cards/display-gift-cards";
import DisplayPurchases from "../display-purchases/display-purchases";

function DisplayPage({ user, setUser }) {
  const [displayGiftCards, setDisplayGiftCards] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplayGiftCards(!displayGiftCards)}>
        {displayGiftCards ? "Show Purchase History" : "Show Gift Cards"}
      </button>
      {displayGiftCards ? (
        <div className="display-gift-cards-container">
          <h1>Check Out Our List of Brands!</h1>
          <h3>
            Click on a brand to view more information about the company and
            purchase a gift card
          </h3>
          <DisplayGiftCards
            currencyCode={user.currency}
            user={user}
            setUser={setUser}
          />
          <DisplayUserInfo user={user} />
        </div>
      ) : (
        <DisplayPurchases user={user} />
      )}
    </div>
  );
}

export default DisplayPage;
