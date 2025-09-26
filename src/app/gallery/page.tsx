import { gallery, type GalleryItem } from "@/data/gallery";
import Image from "next/image";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  return (
    <Section className="py-16">
      <SectionHeading
        title="Gallery"
        subtitle="Highlights from our events, workshops, and hackathons."
        center
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item: GalleryItem) => (
          <div
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-lg border border-border"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-sm text-white/80">{item.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
