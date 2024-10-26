import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

const { theme, style } = buildTheme({
    themeName: "prism",
    themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "YOUR_CLIENT_ID";

export default function Chatbot() {
    const client = getClient({ clientId });
    const [isWebchatOpen, setIsWebchatOpen] = useState(false);

    const toggleWebchat = () => {
        setIsWebchatOpen((prevState) => !prevState);
    };

    return (
        <div
            style={{
                width: "300px",
                height: "600px",
                position: "absolute",
                // bottom: "20px",
                // right: "30px",
            }}
        >
            <style>{style}</style>
            <WebchatProvider theme={theme} client={client}>
                <Fab onClick={toggleWebchat} />
                <div
                    style={{
                        display: isWebchatOpen ? "block" : "none",
                    }}
                >
                    <Webchat />
                </div>
            </WebchatProvider>
        </div>
    );
}
