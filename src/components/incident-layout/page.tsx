import React, { useEffect, useState } from "react";

import { getData } from "./data";
import { useParams } from "react-router-dom";
import { TimelineLayout } from "../ui/timeline-layout/timeline-layout";
import { TimelineItemType } from "../ui/timeline-layout/timeline";

const Layout: React.FC = () => {
    const { incidentId } = useParams();
    const [messages, setMessages] = useState<TimelineItemType[]>();

    useEffect(() => {
        async function setData() {
            const msgs: TimelineItemType[] = await getData(incidentId);
            setMessages(msgs);
        }
        setData();
    }, [incidentId]);

    return (
        <div>
            <h1>Incident Updates</h1>
            {messages && <TimelineLayout timelineData={messages} />}
        </div>
    );
};

export default Layout;
