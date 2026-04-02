import React from "react";
import { Link } from  "react-router-dom";
import { Navigate } from "react-router-dom";

export const ContactForm = (props) => {

    const initialFormInputs = {
        name: "",
        email: "",
        phone: "",
        address: ""
    };
    const [formInputs, setFormInputs] = useState(initialFormInputs);

    // const navigate = Navigate();

    function createNewContact(){

        const url = "https://playground.4geeks.com/contact/agendas/kristofer/contacts";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(formInputs),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            if(response.ok){
                //get my contacts again
                // Navigate("/");
            }
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="form-container">
                    <h1>Add New Contact</h1>
                    <form>
                        <input 
                        id="name" 
                        type="text"
                        value={formInputs.name}
                        onchange={(event)=> setFormInputs({
                            ...formInputs,
                            name: event.target.value
                        })}
                        />
                        <input id="email" type="text"></input>
                        <input id="phone" type="text"></input>
                        <input id="address" type="text"></input>
                    </form>
                </div>
            </div>
            <Link to="/"> Get back to contacts</Link>
        </div>
    );
};