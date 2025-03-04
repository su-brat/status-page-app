import { getdate } from "@/lib/utils";
import { TimelineItemType } from "../ui/timeline-layout/timeline";
import axios from "axios";
import { MessageRespType } from "@/types/message";

export async function getData(
    incidentId: string | undefined,
): Promise<TimelineItemType[]> {
    const response = await axios.get(
        `http://localhost:8080/api/incidents/${incidentId}/incidentUpdates`,
    );
    const apiResponse = response.data;
    console.log(incidentId);
    return apiResponse.map((message: MessageRespType) => ({
        id: message.id,
        description: message.message,
        time: getdate(message.updatedAt),
    }));
}
