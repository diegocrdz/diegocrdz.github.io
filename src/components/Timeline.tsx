/**
 * Timeline to show different projects and experiences in a chronological order
 */

interface TimelineItem {
    year: string
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
                <div key={i} className="grid grid-cols-[auto_auto_1fr] gap-x-6">
                    <span className="text-sm text-muted-foreground text-right pt-0.5">
                        {item.year}
                    </span>
                    <div className="flex flex-col items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                        {i < items.length - 1 && (
                            <div className="w-px flex-1 bg-border mt-1" />
                        )}
                    </div>
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