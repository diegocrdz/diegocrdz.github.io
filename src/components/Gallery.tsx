/**
 * Photo gallery component for displaying project images in a grid layout
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    ChevronLeft,
    ChevronRight,
    X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import {
    Card,
    CardContent
} from '@/components/ui/card'

const MAX_VISIBLE = 3

const Gallery = ({ images }: { images: string[] }) => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
  
    const visible = images.slice(0, MAX_VISIBLE)
    const remaining = images.length - MAX_VISIBLE

    // Open a specific image
    const openAt = (index: number) => {
        setActiveIndex(index)
        setOpen(true)
    }

    // Navigate to the next or previous image
    const next = () => setActiveIndex((i) => (i + 1) % images.length)
    const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)

    // Get the appropriate basis class based on the number of visible images
    const getBasis = (count: number) => {
        if (count === 1) return 'basis-full'
        if (count === 2) return 'basis-[70%] md:basis-1/2'
        return 'basis-[70%] md:basis-1/3'
    }

    return (
        <>
            <p className="text-sm text-muted-foreground mt-2">
                {t('gallery.bottomText', { count: remaining })}
            </p>
            <Carousel>
                <CarouselContent>
                    {Array.from({ length: visible.length }, (_, index) => (
                        <CarouselItem
                            key={index}
                            className={`${getBasis(visible.length)} hover:cursor-pointer`}
                            onClick={() => openAt(index)}
                        >
                            <div className="p-1">
                            <Card className="p-0">
                                <CardContent
                                    className="
                                        aspect-square p-0 hover:brightness-80
                                        transition-[filter] duration-300
                                        max-h-80 overflow-hidden
                                    "
                                >
                                    <img
                                        src={visible[index]}
                                        alt={`Project image ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="w-auto max-w-[100vw]! p-0 rounded-xl overflow-hidden bg-transparent ring-0"
                    showCloseButton={false}
                >
                    <div className="flex flex-col items-center gap-2">

                        {/* Close button */}
                        <div className="flex justify-end w-full p-4">
                            <Button size="icon" onClick={() => setOpen(false)}>
                                <X />
                            </Button>
                        </div>

                        <img
                            src={images[activeIndex]}
                            alt={`Project image ${activeIndex + 1}`}
                            className="max-h-[70vh] max-w-[100vw] md:min-h-[70vh] object-contain"
                        />

                        {images.length > 1 && (
                            <div className="flex items-center justify-center gap-4 p-4">
                                <Button size="icon" onClick={prev} disabled={activeIndex === 0}>
                                    <ChevronLeft />
                                </Button>
                                <Badge variant="default">{activeIndex + 1} / {images.length}</Badge>
                                <Button size="icon" onClick={next} disabled={activeIndex === images.length - 1}>
                                    <ChevronRight />
                                </Button>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Gallery