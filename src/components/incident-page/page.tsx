import React, { useEffect, useState } from "react";

import TimelinedMessages, { Message } from "../timelined-messages";
import { getData } from "./data";
import { useParams } from "react-router-dom";

const IncidentPage: React.FC = () => {
    const { incidentId } = useParams();
    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => {
        async function setData() {
            const msgs: Message[] = getData(incidentId);
            setMessages(msgs);
        }
        setData();
    }, [incidentId]);

    return (
        <div>
            <h1>Incident Page</h1>
            {messages && <TimelinedMessages messages={messages} />}
        </div>
    );
};

export default IncidentPage;
