import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get("url");

  if (!targetUrl) {
    return new NextResponse("Missing URL parameter", { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    const html = await response.text();

    // Inject our CSS to hide elements
    const modifiedHtml = html.replace(
      "</head>",
      `<style>
        .popup-sapo.active,
        .messenger-live-face,
        .copyright,
        #cookie-consent {
          display: none !important;
        }
      </style>
      </head>`,
    );

    return new NextResponse(modifiedHtml, {
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new NextResponse("Failed to fetch content", { status: 500 });
  }
}
