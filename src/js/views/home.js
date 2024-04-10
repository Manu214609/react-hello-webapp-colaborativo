import React, { useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.createAgenda();
		actions.getContacts(); // Corregido el nombre de la acción
	}, [store.contacts]); // Cambiado a 'contacts'

	return (
		<div className="text-center mt-5">
			{store.contacts?.map((item, index) => {
				return (
					<Card 
						nombre={item.full_name}
						email={item.email}
						phoneNumber={item.phone} // Corregido el nombre de la propiedad
						address={item.address}
						id={item.id}
						key={index}
					/>
				);
			})}
		</div>
	);
};
