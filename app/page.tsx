import React from "react";

import { templates } from "@/config/templates";
import { title } from "@/components/primitives";
import { TemplateCard } from "@/components/TemplateCard";

const Page = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-12">
        <h1 className={title({ size: "md" })}>Các giao diện tham khảo</h1>
        <p className="text-default-600 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </div>
  );
};

export default Page;
