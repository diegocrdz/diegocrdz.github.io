/**
 * Photo gallery component for displaying project images in a grid layout
 */

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'

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

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-80">
                <img
                    src={visible[0]}
                    alt="Project image 1"
                    onClick={() => openAt(0)}
                    className={`row-span-2 w-full h-full rounded-lg object-cover cursor-pointer ${visible[1] ? '' : 'col-span-2'}`}
                />
                {visible[1] && (
                    <img
                        src={visible[1]}
                        alt="Project image 2"
                        onClick={() => openAt(1)}
                        className={`w-full h-full rounded-lg object-cover cursor-pointer ${visible[2] ? '' : 'row-span-2'}`}
                    />
                )}
                {visible[2] && (
                    <div className="relative cursor-pointer" onClick={() => openAt(2)}>
                        <img
                            src={visible[2]}
                            alt="Project image 3"
                            className="w-full h-full rounded-lg object-cover"
                        />
                        {remaining > 0 && (
                            <button
                                className="
                                    absolute inset-0 bg-black/60 rounded-lg flex items-center
                                    justify-center text-white text-sm font-medium hover:bg-black/70
                                    transition-colors
                                "
                            >
                                +{remaining} {t('gallery.viewMore')}
                            </button>
                        )}
                    </div>
                )}
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-none! w-fit p-0 rounded-none bg-transparent ring-0">
                    <div className="relative flex items-center justify-center">
                        <img
                            src={images[activeIndex]}
                            alt={`Project image ${activeIndex + 1}`}
                            className="
                                md:min-h-[60vh] md:max-h-[60vh]
                                min-w-[80vw] md:min-w-auto md:w-auto
                                object-cover rounded-lg
                            "
                        />
                    </div>
                    {/* Navigation buttons */}
                    {images.length > 1 && (
                        <div className="flex items-center justify-center gap-4 py-4">
                            <Button
                                size="icon"
                                onClick={prev}
                                disabled={activeIndex === 0}
                            >
                                <ChevronLeft />
                            </Button>

                            <Badge variant="default">
                                {activeIndex + 1} / {images.length}
                            </Badge>

                            <Button
                                size="icon"
                                onClick={next}
                                disabled={activeIndex === images.length - 1}
                            >
                                <ChevronRight />
                            </Button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Gallery