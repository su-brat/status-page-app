import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export interface Message {
    id: string;
    timestamp: string;
    content: string;
}

export interface TimelinedMessagesProps {
    messages: Message[];
}

const TimelinedMessages: React.FC<TimelinedMessagesProps> = ({ messages }) => {
    // TODO: Incomplete
    return (
        <div className="timeline">
            {messages.map((message) => (
                <Card key={message.id} className="timeline-item">
                    <CardHeader>
                        <div className="timeline-timestamp">
                            {message.timestamp}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="timeline-content">
                            {message.content}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default TimelinedMessages;
