import { TimelineItemType } from "../ui/timeline-layout/timeline";

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

export const timelineData: TimelineItemType[] = [
    {
        id: 1,
        description:
            "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework.",
        time: "2025-01-03, UTC 15:30",
    },
    {
        id: 2,
        description:
            "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. Lorem epsum gibrish written.. I want to make a paragraph out of this. Lets make it long enough to spread to 3-4 lines. I am trying hard to make it long enough. Please help me longen this paragraph enough. Please!! Oh my Kadavule!!!",
        time: "2025-01-01, UTC 12:30",
    },
    {
        id: 3,
        description: "Shadcn timeline component. Open Source.",
        time: "2025-01-01, UTC 12:25",
    },
];
