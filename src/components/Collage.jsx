import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function Collage({ images }) {
    const [currentIndex, setCurrentIndex] = useState(null);

    if (!images || images.length === 0) return null;

    // We only show first 4 images in the collage grid
    const displayImages = images.slice(0, 4);
    const hasMore = images.length > 4;
    const moreCount = images.length - 4; // Show how many extra images exist after the first 4

    const openLightbox = (index) => setCurrentIndex(index);
    const closeLightbox = () => setCurrentIndex(null);
    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="my-8">
            <div className="collage-grid">
                {displayImages.map((img, index) => {
                    const isLast = index === 3;
                    return (
                        <div
                            key={index}
                            className="collage-slot"
                            onClick={() => openLightbox(index)}
                        >
                            <img src={img} alt={`Billing ${index + 1}`} className="collage-img" />
                            {isLast && hasMore && (
                                <div className="collage-overlay">
                                    <span>+{moreCount}</span>
                                    <p>More Views</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Lightbox Modal */}
            {currentIndex !== null && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="relative flex items-center justify-center w-full h-full max-w-7xl px-12" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-all transform hover:scale-110 z-[110]"
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <X size={44} strokeWidth={1.5} />
                        </button>

                        <button
                            className="absolute left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110] group"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={60} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" />
                        </button>

                        <div className="relative group">
                            <img
                                src={images[currentIndex]}
                                alt="Billing Full View"
                                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300"
                            />

                            {/* Status label - Optional touch of premium */}
                            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                Invoice View {currentIndex + 1}
                            </div>
                        </div>

                        <button
                            className="absolute right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-[110] group"
                            onClick={nextImage}
                        >
                            <ChevronRight size={60} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Pagination Counter */}
                        <div className="absolute bottom-10 bg-white/10 backdrop-blur-xl text-white px-6 py-2 rounded-2xl text-sm font-semibold border border-white/10 shadow-2xl">
                            <span className="text-white/40 font-normal">View</span> {currentIndex + 1} <span className="text-white/40 font-normal mx-1">of</span> {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
