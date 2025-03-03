import { getdate } from "@/lib/utils";
import { IncidentList, IncidentStatus } from "./columns";
import axios from "axios";

export async function getData(): Promise<IncidentList[]> {
    // TODO: Fetch data from your API here.
    // TODO: Change dates to a string format which can be sorted.
    const getstatus = (closedAt: string) => {
        if (closedAt) {
            return IncidentStatus.CLOSED;
        } else {
            return IncidentStatus.OPEN;
        }
    };

    try {
        const response = await axios.get("http://localhost:8080/api/incidents");
        const apiResponse = response.data;

        // Ensure dates are converted to a sortable string format
        return apiResponse.map((incident: any) => ({
            id: incident.id,
            title: incident.title,
            createdAt: getdate(incident.createdAt),
            lastUpdatedAt: getdate(incident.closedAt),
            status: getstatus(incident.closedAt),
        }));
    } catch (error) {
        console.error("Error fetching incidents:", error);
        return [];
    }
}
