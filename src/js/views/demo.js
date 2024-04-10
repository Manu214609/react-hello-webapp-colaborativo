import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);
    const [fullname, setFullName] = useState("");
    const [emailAdress, setEmailAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");

    const handleSubmit = e => {
        e.preventDefault(); // Corregido el método preventDefault
        actions.createContact(fullname, emailAdress, streetAddress, phoneNumber);
        setFullName("");
        setEmailAdress("");
        setPhoneNumber("");
        setStreetAddress("");
    };

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
