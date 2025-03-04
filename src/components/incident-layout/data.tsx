import { getdate } from "@/lib/utils";
import { TimelineItemType } from "../ui/timeline-layout/timeline";
import axios from "axios";
import { MessageRespType } from "@/types/message";
import { API_BASE_URL } from "@/lib/constants";

export async function getData(
    incidentId: string | undefined,
): Promise<TimelineItemType[]> {
    const response = await axios.get(
        `${API_BASE_URL}/incidents/${incidentId}/incidentUpdates`,
    );
    const apiResponse = response.data;
    console.log(incidentId);
    return apiResponse.map((message: MessageRespType) => ({
        id: message.id,
        description: message.message,
        time: getdate(message.updatedAt),
    }));
}
