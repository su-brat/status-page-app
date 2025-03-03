import axios from "axios";
import { ServiceList } from "./columns";

export async function getData(): Promise<ServiceList[]> {
    // TODO: Fetch data from your API here.
    try {
        const response = await axios.get("http://localhost:8080/api/services");
        const apiResponse = response.data;

        // Ensure dates are converted to a sortable string format
        return apiResponse.map((service: any) => ({
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
