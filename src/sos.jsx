import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./sos.css";

const SosButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState(null);

    const handleSosPress = () => {
        const templateParams = {
            subject: "Emergency Alert!",
            message:
                "An SOS signal has been triggered! Immediate action may be required.",
        };

        emailjs
            .send(
                "service_6luhvf9",
                "template_yllxzvr",
                templateParams,
                "ST4Pf-tw_swMgWmxS"
            )
            .then(() => {
                setShowPopup(true); // Show the success popup

                // Hide the popup after 4 seconds
                setTimeout(() => setShowPopup(false), 4000);
            })
            .catch((err) => {
                setError("Failed to send emergency signal.");
                console.error("EmailJS Error:", err);
            });
    };

    return (
        <div>
            <button onClick={handleSosPress} className="sos-button">
                SOS
            </button>
            {showPopup && (
                <div className="popup">Emergency signal sent successfully!</div>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SosButton;
