import React from "react";
import { FaBeer } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const ContactCard = ({contact, ...props}) => {

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
                        <FaEdit />
                    </div>
                    <div className="contact-delete">
                        <FaTrash />
                    </div>
                </div>
            </div>
        </div>
    );
};
