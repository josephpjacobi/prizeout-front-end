import { useState } from 'react';
import GiftCardCheckout from "../gift-card-checkout/gift-card-checkout";
import "./gift-card.css";

function GiftCard({data, userBalance}) {
    const { name, image_url } = data;
    const [clicked, setClicked] = useState(false)

    return (
			<div className="gift-card" onClick={() => setClicked(!clicked)}>
				{clicked ? (
					<GiftCardCheckout giftCardData={data} userBalance={userBalance} />
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