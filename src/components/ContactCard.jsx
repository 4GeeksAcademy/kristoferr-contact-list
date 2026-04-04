import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { FaBeer } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export const ContactCard = ({contact, ...props}) => {

    const {store, dispatch} =useGlobalReducer();
    const navigate = useNavigate();

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

    const deleteContact = () => {
        console.log("Deleted!", contact.id);
        //https://playground.4geeks.com/contact/agendas/kristofer/contacts/ID

        const url = `https://playground.4geeks.com/contact/agendas/kristofer/contacts/` + contact.id;
        console.log(url);

        fetch(url,{
            method: "DELETE",
        })
        .then((response)=> {
            if(response.ok){
                getContacts();
            }
        })
    };

    const editContact = () => {
        console.log("testing edit");
    };





    return (
        <div className="container">
            <div className="row border border-3 border-gray">
                <div className="col-3">
                    <div className="contact-image">
                        <img src="https://www.pngitem.com/pimgs/m/394-3947083_round-profile-picture-png-transparent-png.png"></img>
                    </div>
                </div>
                <div className="col-3">
                    <div className="contact-name">{contact.name}</div>
                    <div className="contact-address"><FaMapMarkerAlt />{contact.address}</div>
                    <div className="contact-phone"><FaPhone />{contact.phone}</div>
                    <div className="contact-email"><MdEmail />{contact.email}</div>
                </div>
                <div className="col-6">
                    <div className="contact-edit">
                        <FaEdit onClick={(event)=> navigate("/contacts/" + contact.id)} />
                    </div>
                    <div className="contact-delete">
                        <FaTrash onClick={deleteContact} />
                    </div>
                </div>
            </div>
        </div>
    );
};
