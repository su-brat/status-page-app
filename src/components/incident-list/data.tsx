import { IncidentList, IncidentStatus } from "./columns";

export async function getData(): Promise<IncidentList[]> {
    // TODO: Fetch data from your API here.
    // TODO: Change dates to a string format which can be sorted.
    return [
        {
            id: "INC-1234",
            title: "API service outage",
            createdAt: new Date("10-05-2024"),
            lastUpdatedAt: new Date(),
            status: IncidentStatus.OPEN,
        },
        {
            id: "INC-1236",
            title: "Website service outage",
            createdAt: new Date("12/10/2024"),
            lastUpdatedAt: new Date(),
            status: IncidentStatus.OPEN,
        },
        {
            id: "INC-1235",
            title: "Log service outage",
            createdAt: new Date("11-07-2024"),
            lastUpdatedAt: new Date(),
            status: IncidentStatus.OPEN,
        },
        {
            id: "INC-1237",
            title: "Users unable to login",
            createdAt: new Date(),
            lastUpdatedAt: new Date(),
            status: IncidentStatus.CLOSED,
        },
    ];
}
