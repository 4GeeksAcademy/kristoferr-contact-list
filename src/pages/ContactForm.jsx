import React from "react";
import { Link } from  "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export const ContactForm = (props) => {

    // const navigate = Navigate();

    function createNewContact(){

        const url = "https://playground.4geeks.com/contact/agendas/kristofer/contacts";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if(response.ok){
                console.log("added contacts successfully");
            }
        })
    }


    const [input, setInput] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    return (
        <div className="container">
            <div className="row d-flex justify-content-center m-5 p-5">
                <div className="form-container w-75 bg-light p-5 border border-3">
                    <h1>Add A New Contact</h1>
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
                            <button onClick={createNewContact} className="btn btn-primary">Save</button>
                        </div>

                    </form>
                </div>
            </div>
            <Link to="/"> Get back to contacts</Link>
        </div>
    );
};