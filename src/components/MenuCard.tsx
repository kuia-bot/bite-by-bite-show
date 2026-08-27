import { cn } from "@/lib/utils";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
  className?: string;
}

export function MenuCard({ title, description, price, imageSrc, imageAlt, tag, className }: MenuCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-terracotta px-3 py-1 text-xs font-medium text-terracotta-foreground">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-card-foreground">{title}</h3>
          <span className="shrink-0 font-display text-lg font-semibold text-terracotta">{price}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
