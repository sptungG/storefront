"use client";

import { use, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { templates } from "@/config/templates";

export default function TemplatePage({ params }: { params: any }) {
  const router = useRouter();
  const { pathname } = use<{ pathname: string[] }>(params);
  const foundTemplate = templates.find((t) => t.id === pathname[0]);

  if (!foundTemplate) {
    notFound();
  }

  const proxyUrl = `/api/proxy?url=${encodeURIComponent(foundTemplate.demoUrl)}`;

  if (foundTemplate.siteUrl) {
    return (
      <div className="fixed inset-0 w-full h-full bg-background flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <a href={foundTemplate.siteUrl} rel="noopener noreferrer" target="_blank" className="mb-4">
            Chuyển đến trang <u>{foundTemplate.siteUrl}</u>...
          </a>
          <Link
            href="/"
            className={buttonStyles({
              color: "primary",
              variant: "solid",
              size: "md",
            })}
          >
            ← Trở lại trang chủ
          </Link>
        </div>
      </div>
    );
  }

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
