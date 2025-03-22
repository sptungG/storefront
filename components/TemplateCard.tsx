import type { Template } from "@/config/templates";

import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import { Image } from "@heroui/image";

export interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="group cursor-pointer overflow-hidden">
      <Link className="flex flex-col gap-2" href={`/${template.id}`}>
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <Image
            alt={template.title}
            className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
            src={template.imageUrl}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{template.title}</h3>
          <p className="text-default-500 text-sm mt-2">
            {template.description}
          </p>
          <div className="mt-4">
            <span className="text-sm bg-default-100 rounded-full font-[600] px-3 py-1">
              {template.category}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
