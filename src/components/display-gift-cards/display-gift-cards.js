import { useEffect, useState } from "react";
import GiftCard from "../gift-card/gift-card";
import { fetchData } from "../../helper";
import "./display-gift-cards.css";

function DisplayGiftCards({ currencyCode, userBalance }) {
	const [giftCards, setGiftCards] = useState([]);
	// Load all gift cards
	useEffect(() => {
		const getGiftCards = async () => {
			const allGiftCards = await fetchData(
				`brands?currency_code=${currencyCode}`
			);
			setGiftCards(Object.values(allGiftCards));
		};
		getGiftCards();
	}, [currencyCode]);

	return (
		<div className="gift-card-section">
			{giftCards.length > 0 ? (
				giftCards.map((companyData) => {
					return <GiftCard key={companyData.brand_code} data={companyData} userBalance={userBalance}/>;
				})
			) : (
				<div>No Gift Cards</div>
			)}
		</div>
	);
}

export default DisplayGiftCards;
