import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { useEffect } from "react";
import { Link } from  "react-router-dom";

export const Contacts = () =>{

    const {store, dispatch} =useGlobalReducer();

    //grab contacts from API and send to store
    function getContacts(){
        const url="https://playground.4geeks.com/contact/agendas/kristofer/";
        fetch(url)
            .then((response)=> response.json())
            .then((body) => {
                const contacts = body.contacts;
                const action = {
                    type: "update_contacts",
                    payload: contacts
                }
                dispatch(action);
            })
    };

    useEffect(() =>{
        getContacts();
    }, []);

    return(
        <div className="container">
            <div className="row">
                <div className="navbar d-flex justify-content-end">
                    <Link className="btn btn-success" to="/new-contact">Add New Contact</Link>
                </div>
            </div>
            <div className="row">
                <div className="contacts">
                    {store.contacts.map((contact)=>{
                        return <ContactCard contact={contact} key={contact.id}/>
                    })}
                </div>
            </div>
        </div>
    );
}