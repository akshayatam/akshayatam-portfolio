import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { ReactNode } from "react";
import profileImage from "@/assets/profile-akshay-atam.png";
import { cn } from "@/lib/utils";

export function ProfileImage({ className, priority = false }: { className?: string; priority?: boolean }) {
  return <img src={profileImage} alt="Portrait of Akshay Atam" width={1024} height={1024} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} className={cn("profile-image", className)} />;
}

export function ContentThumbnail({ src, alt, className, width = 1400, height = 900 }: { src: string; alt: string; className?: string; width?: number; height?: number }) {
  return <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className={cn("content-thumbnail", className)} />;
}

export function ImageLightbox({ src, alt, caption, children }: { src: string; alt: string; caption?: string | undefined; children: ReactNode }) {
  return <Dialog><DialogTrigger asChild>{children}</DialogTrigger><DialogContent className="lightbox-content"><DialogTitle className="sr-only">Enlarged image</DialogTitle><DialogDescription className="sr-only">{alt}</DialogDescription><figure><img src={src} alt={alt} width={1600} height={1200} className="lightbox-image"/>{caption&&<figcaption>{caption}</figcaption>}</figure></DialogContent></Dialog>;
}

export function LightboxImage({ src, alt, caption, className }: { src: string; alt: string; caption?: string | undefined; className?: string | undefined }) {
  return <ImageLightbox src={src} alt={alt} caption={caption}><button type="button" className={cn("lightbox-trigger", className)} aria-label={`Enlarge image: ${alt}`}><ContentThumbnail src={src} alt={alt} className="lightbox-thumbnail"/></button></ImageLightbox>;
}