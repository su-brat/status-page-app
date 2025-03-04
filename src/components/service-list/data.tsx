import axios from "axios";
import { ServiceList } from "./columns";
import { ServiceRespType } from "@/types/service";

export async function getData(): Promise<ServiceList[]> {
    try {
        const response = await axios.get("http://localhost:8080/api/services");
        const apiResponse = response.data;

        // Ensure dates are converted to a sortable string format
        return apiResponse.map((service: ServiceRespType) => ({
            id: service.id,
            service: service.name,
            status: service.status,
            description: service.description,
        }));
    } catch (error) {
        console.error("Error fetching service list:", error);
        return [];
    }
}
