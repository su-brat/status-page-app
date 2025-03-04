import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
    TimelineHeader,
    TimelineItemType,
} from "@/components/ui/timeline-layout/timeline";

export type TimelineLayoutProps = {
    timelineData: TimelineItemType[];
};

export const TimelineLayout: React.FC<TimelineLayoutProps> = ({
    timelineData,
}) => {
    return (
        <Timeline className="mt-8">
            {timelineData.map((item) => (
                <TimelineItem key={item.id}>
                    <TimelineHeader>
                        <TimelineTime className="font-normal">
                            {item.time}
                        </TimelineTime>
                        {(item.title && (
                            <TimelineTitle>{item.title}</TimelineTitle>
                        )) ||
                            (item.description && (
                                <TimelineDescription>
                                    {item.description}
                                </TimelineDescription>
                            ))}
                    </TimelineHeader>
                    {item.title && item.description && (
                        <TimelineDescription>
                            {item.description}
                        </TimelineDescription>
                    )}
                </TimelineItem>
            ))}
        </Timeline>
    );
};
