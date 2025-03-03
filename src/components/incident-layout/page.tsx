import React, { useEffect, useState } from "react";

import { Message } from "../timelined-messages";
import { getData, timelineData } from "./data";
import { useParams } from "react-router-dom";
import { TimelineLayout } from "../ui/timeline-layout/timeline-layout";

const Layout: React.FC = () => {
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
            {messages && <TimelineLayout timelineData={timelineData} />}
        </div>
    );
};

export default Layout;
