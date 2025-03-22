"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { templates } from "@/config/templates";

export default function TemplatePage({ params }: { params: any }) {
  const { pathname } = use<{ pathname: string[] }>(params);
  const foundTemplate = templates.find((t) => t.id === pathname[0]);

  if (!foundTemplate) {
    notFound();
  }

  const proxyUrl = `/api/proxy?url=${encodeURIComponent(foundTemplate.demoUrl)}`;

  return (
    <div className="fixed inset-0 w-full h-full bg-background">
      <div className="absolute top-4 left-4 z-50 flex gap-4">
        <Link
          className={buttonStyles({
            color: "primary",
            variant: "solid",
            size: "md",
          })}
          href="/"
        >
          ← Trở lại
        </Link>
      </div>
      {!!foundTemplate?.demoUrl && (
        <iframe
          allowFullScreen
          className="w-full h-full border-0 iframe-preview"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          src={proxyUrl}
          title="Template Preview"
        />
      )}
    </div>
  );
}
