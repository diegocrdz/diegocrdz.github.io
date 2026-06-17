/**
 * Timeline to show different projects and experiences in a chronological order
 */

interface TimelineItem {
    year: string
    location?: string
    title: string
    description?: string
}

interface TimelineProps {
    items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="flex flex-col">
            {items.map((item, i) => (
                <div key={i} className="grid grid-cols-[1fr_auto_5fr] gap-x-6">
                    {/* Year and location */ }
                    <div className="flex flex-col items-end">
                        <p className="text-sm font-medium text-right pt-0.5">
                            {item.year}
                        </p>
                        {item.location && (
                            <p className="text-sm text-muted-foreground text-right">
                                {item.location}
                            </p>
                        )}
                    </div>
                    {/* Timeline dot and line */ }
                    <div className="flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                        {i < items.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-1" />
                        )}
                    </div>
                    {/* Title and description */ }
                    <div className="flex flex-col gap-4 pb-20">
                        <p className="font-medium text-xl">{item.title}</p>
                        {item.description && (
                            <p className="text-muted-foreground">{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Timeline