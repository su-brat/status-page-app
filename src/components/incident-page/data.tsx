export function getData(incidentId: string | undefined) {
    // TODO: Fetch API data using incidentId
    console.log(incidentId);
    return [
        {
            id: "12344",
            timestamp: "25-01-2025",
            content: "Opened the incident",
        },
        {
            id: "12345",
            timestamp: "26-01-2025",
            content: "Checked the incident",
        },
        {
            id: "12346",
            timestamp: "27-01-2025",
            content: "Closed the incident",
        },
    ];
}
