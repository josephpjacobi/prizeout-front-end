import { useState } from "react";
import { convertCentsToDollars } from "../../helper";
import { postData } from "../../helper";
import "./gift-card-checkout.css";

function GiftCardCheckout({ brandData, user, currencyCode, setUser }) {
  const [purchaseInfo, setPurchaseInfo] = useState({
    value: "",
    isValid: false,
  });

  const {
    description,
    brand_code,
    variable_price,
    min_price_in_cents,
    max_price_in_cents,
    allowed_prices_in_cents,
  } = brandData;

  function convertAmountToCents(amount) {
    return amount * 100;
  }

  function validateAmount(amount) {
    const giftCardAmount = convertAmountToCents(amount);
    const validAmount =
      min_price_in_cents < giftCardAmount &&
      max_price_in_cents > giftCardAmount;
    setPurchaseInfo({ value: amount, isValid: validAmount });
  }

  function handleChange(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    validateAmount(e.target.value);
  }

  function handleSelect(e) {
    setPurchaseInfo({
      value: e.target.value / 100,
      isValid: e.target.value ? true : false,
    });
  }

  async function bookGiftCard() {
    const giftCardAmountInCents = convertAmountToCents(purchaseInfo.value);
    const bookingInfo = await postData(
      `book_giftcard?brand_code=${brand_code}&currency_code=${currencyCode}&value=${giftCardAmountInCents}`
    );
    const purchaseData = {
      ...bookingInfo,
      user_id: user.id,
      brand_name: brandData.name,
      current_user_balance: user.balance,
    };
    const createdPurchase = await postData("purchase_giftcard", purchaseData);
    setUser({ ...user, balance: createdPurchase.new_balance });
    setPurchaseInfo({ value: "", isValid: false });
  }

  return (
    <div className="giftcard-checkout-container">
      <div className="brand-description">{description}</div>
      <div className="checkout">
        {variable_price ? (
          <label htmlFor="">
            <h6 className="amount-label">
              Enter Amount between {convertCentsToDollars(min_price_in_cents)}{" "}
              and{" "}
              {convertCentsToDollars(
                Math.min(max_price_in_cents, user.balance)
              )}
              :
            </h6>
            $
            <input
              type="text"
              placeholder="Enter Amount"
              min={min_price_in_cents}
              max={max_price_in_cents}
              value={purchaseInfo.value}
              onChange={(e) => handleChange(e)}
            />
          </label>
        ) : (
          <label htmlFor="gift-card-purchase">
            <h6 className="amount-label">Available Gift Card Amounts:</h6>
            <select
              name="gift-card-purchase"
              id="gift-card-purchase"
              onChange={(e) => handleSelect(e)}
            >
              <option value="">Select Amount</option>
              {allowed_prices_in_cents.map((amount) => {
                return (
                  <option
                    key={amount}
                    value={amount}
                    disabled={amount > user.balance}
                  >
                    {convertCentsToDollars(amount)}
                  </option>
                );
              })}
            </select>
          </label>
        )}
        <button onClick={() => bookGiftCard()} disabled={!purchaseInfo.isValid}>
          Purchase Gift Card
        </button>
      </div>
    </div>
  );
}

export default GiftCardCheckout;

//
// 			)}
// 		</div>
// 	) : (
// 		<div>
// 			<div
// 				className="logo"
// 				style={{ backgroundImage: `url(${image_url})` }}
// 			></div>
// 			<h3>{name}</h3>
// 		</div>
// 	);
