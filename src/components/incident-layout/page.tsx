import React, { useEffect, useState } from "react";

import { getData } from "./data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TimelineLayout } from "../ui/timeline-layout/timeline-layout";
import { TimelineItemType } from "../ui/timeline-layout/timeline";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

const Layout: React.FC = () => {
    const { incidentId } = useParams();
    const navigate = useNavigate();
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
            <div className="flex">
                <Button
                    variant="outline"
                    className="my-auto"
                    onClick={() => navigate(-1)}
                >
                    ←
                </Button>
                <Breadcrumb className="my-auto px-4">
                    <BreadcrumbList>
                        <BreadcrumbItem className="hover:text-primary">
                            <Link to="/incidents">Incidents</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                Incident Updates ({incidentId})
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {(messages && <TimelineLayout timelineData={messages} />) || (
                <div className="mt-8">No updates.</div>
            )}
        </div>
    );
};

export default Layout;
