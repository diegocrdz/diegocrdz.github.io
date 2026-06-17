import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowUpRight,
    Folder,
} from "lucide-react";

interface CardImageProps {
    title: string
    description: string
    action?: string
    imageUrl?: string
    number?: number
    children?: React.ReactNode
}

const CardImage = ({ title, description, action, imageUrl, number, children }: CardImageProps) => {
    return (
        <Card className="group relative w-full h-full pt-0 overflow-hidden">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt="Project Image"
                        className="absolute w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/10 transition-transform duration-800 group-hover:scale-105">
                        <Folder className="w-12 h-12 text-muted-foreground" />
                    </div>
                )}
                <div className="absolute inset-0 bg-black/30" />
            </div>
            {/* Project counter */}
            {number && (
                <Badge variant="secondary" className="absolute top-3 left-3 text-xs">
                    {number !== undefined ? String(number).padStart(2, '0') : ''}
                </Badge>
            )}
            {/* Arrow icon on hover */}
            <div className="
                absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity
                bg-background/80 rounded-full p-2 flex items-center justify-center"
            >
                <ArrowUpRight className="w-4 h-4" />
            </div>
            
            {/* Content */}
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    {description}
                </CardDescription>
                {children}
            </CardContent>
            {action && (
                <CardFooter>
                    <Button className="w-full">{action}</Button>
                </CardFooter>
            )}
        </Card>
    )
}

export default CardImage