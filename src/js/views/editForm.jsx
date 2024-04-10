import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const [fullname, setFullName] = useState("Nombre");
	const [emailAdress, setEmailAdress] = useState("Email");
	const [phoneNumber, setPhoneNumber] = useState("Telefono");
	const [streetAddress, setStreetAddress] = useState("Address");

	useEffect(() => {
		actions.getSingleContact(id);
		setFullName(store.contact.full_name);
		setEmailAdress(store.contact.email);
		setPhoneNumber(store.contact.phone);
		setStreetAddress(store.contact.address);
	}, [id, store.contact]); // Agregué 'id' y 'store.contact' como dependencias

	const handleSubmit = e => {
		e.preventDefault(); // Corregido el método preventDefault
		actions.editContact(fullname, emailAdress, streetAddress, phoneNumber, id); // Agregué 'id' como argumento
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setStreetAddress("");
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
					<input 
						type="text" 
						className="form-control" 
						id="exampleInputEmail1" 
						aria-describedby="emailHelp" 
						value={fullname}
						onChange={e => setFullName(e.target.value)}
						placeholder="manuela"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
					<input 
						type="email" 
						className="form-control" 
						id="exampleInputPassword1"
						value={emailAdress}
						onChange={e => setEmailAdress(e.target.value)}
						placeholder="email"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
					<input 
						type="text" 
						className="form-control" 
						id="exampleInputPassword1"
						value={phoneNumber}
						onChange={e => setPhoneNumber(e.target.value)}
						placeholder="numero" 
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
					<input 
						type="text" 
						className="form-control" 
						id="exampleInputPassword1"
						value={streetAddress}
						onChange={e => setStreetAddress(e.target.value)}
						placeholder="calle ejemplo" 
					/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
			<button onClick={() => console.log(fullname)}>mostrar datos</button>
			<Link to="/">
				<button>Back home</button>
			</Link>
		</div>
	);
};