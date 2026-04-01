import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";

export const Contacts = () =>{

    const {store, dispatch} =useGlobalReducer();

    return(
        <div className="container">
            <div className="row">
                <div className="navbar d-flex justify-content-end">
                    <button className="btn btn-success">Add New Contact</button>
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