import React, { useEffect } from "react";
import { Link } from  "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const EditContactForm = (props) => {

    const {store, dispatch} = useGlobalReducer();
    const navigate = useNavigate();

    function editContact(){

        const url = `https://playground.4geeks.com/contact/agendas/kristofer/contacts/${contactID}`;

        fetch(url, {
            method: "PUT",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if(response.ok){
                console.log("added contacts successfully");
                navigate("/");
            }
        })
    };


    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    // const navigate = Navigate();
    const params = useParams(); // {contactID: 44}
    const {contactID} = useParams();

    useEffect(()=>{
        for(const contact of store.contacts){
            if(contact.id == contactID){
                setInput({
                    name: contact.name,
                    phone: contact.phone,
                    address: contact.address,
                    email: contact.email
                })
            }
        }

    }, [store.contacts]);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center m-5 p-5">
                <div className="form-container w-75 bg-light p-5 border border-3">
                    <h1>Edit Contact</h1>
                    <form>
                        <div className="row">
                            <label>Full Name</label>
                            <input 
                            id="name" 
                            type="text" 
                            placeholder="name"
                            value={input.name}
                            onChange={(event)=>setInput({
                                ...input,
                                name: event.target.value
                            })}
                            />
                        </div>
                        
                        <div className="row">
                            <label>Email</label>
                            <input 
                            id="email" 
                            type="text" 
                            placeholder="email"
                            value={input.email}
                            onChange={(event)=>setInput({
                                ...input,
                                email: event.target.value
                            })}
                            />
                        </div>

                        <div className="row">
                            <label>Phone</label>
                            <input 
                            id="phone" 
                            type="text" 
                            placeholder="phone"
                            value={input.phone}
                            onChange={(event)=>setInput({
                                ...input,
                                phone: event.target.value
                            })}
                            />
                        </div>

                        <div className="row">
                            <label>Address</label>
                            <input 
                            id="address" 
                            type="text" 
                            placeholder="address"
                            value={input.address}
                            onChange={(event)=>setInput({
                                ...input,
                                address: event.target.value
                            })}
                            />
                        </div>

                        <div className="row">
                            {/* <Link to="/" className="btn btn-primary mt-4">Save</Link> */}
                            <button onClick={editContact} type="button" className="btn btn-primary">Save</button>
                        </div>

                    </form>
                </div>
            </div>
            <Link to="/"> Get back to contacts</Link>
        </div>
    );
};