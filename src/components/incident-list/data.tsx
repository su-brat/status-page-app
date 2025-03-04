import { getdate } from "@/lib/utils";
import { IncidentList, IncidentStatus } from "./columns";
import axios from "axios";
import { IncidentRespType } from "@/types/incident";
import { API_BASE_URL } from "@/lib/constants";

export async function getData(): Promise<IncidentList[]> {
    const getstatus = (closedAt: string | undefined) => {
        if (closedAt) {
            return IncidentStatus.CLOSED;
        } else {
            return IncidentStatus.OPEN;
        }
    };

    try {
        const response = await axios.get(`${API_BASE_URL}/incidents`);
        const apiResponse = response.data;

        // Ensure dates are converted to a sortable string format
        return apiResponse.map((incident: IncidentRespType) => ({
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
