import { useState } from "react";

import "./App.css";

import Emergency from "./emergency";
import SOS from "./sos";
import Navbar from "./navbar";
import Chatbot from "./Chatbot";
// import OtherFiles from "./o";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <div>
                <Emergency />
                <SOS />

                {/* <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                <script src="https://files.bpcontent.cloud/2024/10/26/04/20241026043059-JFSLBDFG.js"></script> */}

                <Chatbot />
            </div>
        </>
    );
}

export default App;
