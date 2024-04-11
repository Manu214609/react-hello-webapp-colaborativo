import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState ("");
	const [emailAddress, setEmailAddress] = useState ("");
	const [phoneNumber, setPhoneNumber] = useState ("");
	const [streetAddress, setStreetAddress] = useState ("");

	const handleSubmit = e => {
		e.preventDefault();//este no siempre hace falta con React
		actions.createContact(fullName, emailAddress, streetAddress, phoneNumber);
		// NO VEO INFORMACION CON EL CONSOLE.LOG...
		console.log(fullName);
		
		/* actions.addContact(fullName,emailAddress,phoneNumber,streetAddress); */
		setFullName("");//limpiar input
		setEmailAddress("");
		setPhoneNumber("");
		setStreetAddress("");
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="inputName" className="form-label"><em>Full Name</em></label>
					<input 
					type="text"
					className="form-control"
					id="exampleInputEmail"
					aria-describedby="emailHelp"
					value={fullName} //asignar valor
					onChange={e => setFullName(e.target.value)}
					placeholder="manuela meza"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="exampleinputPassword" className="form-label"><em>Email</em></label>
					<input 
					type="email"
					className="form-control"
					id="exampleInputPassword"
					value={emailAddress} //asignar valor
					onChange={e => setEmailAddress(e.target.value)}
					placeholder="manu@hotmail.com"
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword" className="form-label"><em>Phone Number</em></label>
					<input 
					type="text"
					className="form-control"
					id="exampleInputPassword"
					value={phoneNumber} //asignar valor
					onChange={e => setPhoneNumber(e.target.value)}
					placeholder="32262021310"
					/>
					
				</div>
				<div className="mb-3">
					<label htmlFor="emailAddress" className="form-label"><em>Street Address</em></label>
					<input 
					type="text"
					className="or get back to contacts."
					id="streetAddress"
					value={streetAddress} //asignar valor
					onChange={e => setStreetAddress(e.target.value)}
					placeholder="c/ huelva 5555"
					/>
					
				</div>
				<button type="submit" className="btn btn-primary">Save</button>
			</form>
			
			
			<br/>
				  <Link to="/">
                  <button type="button" class="btn btn-info">or get back to contacts.</button>
			</Link>
		
		</div>
	);
};