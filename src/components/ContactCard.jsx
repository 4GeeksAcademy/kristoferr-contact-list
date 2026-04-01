import React from "react";
import { FaBeer } from 'react-icons/fa';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export const ContactCard = () => {

    return (
        <div className="container">
            <div className="row border border-3 border-gray">
                <div className="col-3">
                    <div className="contact-image">
                        <img src="https://www.pngitem.com/pimgs/m/394-3947083_round-profile-picture-png-transparent-png.png"></img>
                    </div>
                </div>
                <div className="col-3">
                    <div className="contact-name">Sara Anamedolla</div>
                    <div className="contact-address"><FaMapMarkerAlt />5842 Hillcrest Rd</div>
                    <div className="contact-phone"><FaPhone />870-288-4149</div>
                    <div className="contact-email"><MdEmail />mike@mendoza.com</div>
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
