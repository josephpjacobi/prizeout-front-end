import { useState } from "react";
import { convertCentsToDollars } from "../../helper";
import "./gift-card-checkout.css";

function GiftCardCheckout({giftCardData, userBalance}) {
    const [purchaseInfo, setPurchaseInfo] = useState({value: ''})
    const {
			description,
			variable_price,
			min_price_in_cents,
			max_price_in_cents,
			allowed_prices_in_cents,
		} = giftCardData;

        function handleChange(e) {
            setPurchaseInfo({value: e.target.value})
        }

    return (
			<div className="giftcard-checkout-container">
				<div className="brand-description">{description}</div>
				<div className="checkout">
					{variable_price ? (
						<label htmlFor="">
							<h6 className="amount-label">
								Enter Amount between {convertCentsToDollars(min_price_in_cents)}
								{" "}and{" "}
								{convertCentsToDollars(
									Math.max(max_price_in_cents, userBalance)
								)}
								:
							</h6>
							<input
								type="text"
								placeholder="Enter Amount"
								min={convertCentsToDollars(min_price_in_cents)}
								max={convertCentsToDollars(max_price_in_cents)}
								value={purchaseInfo.value}
								onChange={(e) => handleChange(e)}
							/>
						</label>
					) : (
						<label htmlFor="gift-card-purchase">
							<h6 className="amount-label">Available Gift Card Amounts:</h6>
							<select name="gift-card-purchase" id="gift-card-purchase">
								<option value="">Select Amount</option>
								{allowed_prices_in_cents.map((amount) => {
									return (
										<option
											key={amount}
											value={amount}
											disabled={amount > userBalance}
										>
											{convertCentsToDollars(amount)}
										</option>
									);
								})}
							</select>
						</label>
					)}
					<button>Purchase Gift Card</button>
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
