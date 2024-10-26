import React from "react";
import "./emergency.css";

const EmergencyPage = () => {
    const emergencyContacts = [
        {
            name: "Police",
            number: "100",
            description: "24/7 emergency assistance",
        },
        {
            name: "Ambulance",
            number: "102",
            description: "Emergency medical support",
        },
        {
            name: "Fire Department",
            number: "101",
            description: "Fire and rescue services",
        },
        {
            name: "Women’s Helpline",
            number: "1091",
            description: "Dedicated women’s safety helpline",
        },
        {
            name: "Child Helpline",
            number: "1098",
            description: "24/7 child protection helpline",
        },
        {
            name: "Disaster Management",
            number: "108",
            description: "Support for disaster situations",
        },
    ];

    return (
        <div className="emergency-page">
            <h1>Emergency Contacts</h1>
            <div className="contacts-container">
                {emergencyContacts.map((contact, index) => (
                    <div key={index} className="contact-block">
                        <h2>{contact.name}</h2>
                        <p>{contact.description}</p>
                        <a
                            href={`tel:${contact.number}`}
                            className="contact-number"
                        >
                            {contact.number}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmergencyPage;
