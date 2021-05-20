import DisplayUserInfo from "../display-user-info/display-user-info";
import DisplayGiftCards from "../display-gift-cards/display-gift-cards";
function DisplayPage({ user }) {
  return (
    <div className="display-gift-cards-container">
        <h1>Check Out Our List of Brands!</h1>
        <h3>Click on a brand to view more information about the company and purchase a gift card</h3>
        <DisplayGiftCards currencyCode={user.currency} userBalance={user.balance}/>
        <DisplayUserInfo user={user} />
    </div>
  );
}

export default DisplayPage;
