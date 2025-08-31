import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  console.log("이미지 프록시 요청:", { imageUrl });

  if (!imageUrl) {
    console.error("이미지 프록시: URL 파라미터가 필요합니다.");
    return new NextResponse("URL parameter is required", { status: 400 });
  }

  // CloudFront URL만 허용 (보안을 위해)
  if (!imageUrl.includes("dpsm0twgatw84.cloudfront.net")) {
    console.error("이미지 프록시: 허용되지 않은 도메인:", imageUrl);
    return new NextResponse("Unauthorized domain", { status: 403 });
  }

  try {
    console.log("원본 이미지 요청 시작:", imageUrl);

    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent": "NextJS-Image-Proxy/1.0",
        Accept: "image/*"
      }
    });

    console.log("원본 이미지 응답:", {
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get("content-type"),
      contentLength: response.headers.get("content-length")
    });

    if (!response.ok) {
      console.error("원본 이미지 가져오기 실패:", {
        status: response.status,
        statusText: response.statusText
      });
      return new NextResponse("Failed to fetch image", {
        status: response.status
      });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    console.log("이미지 프록시 성공:", {
      bufferSize: imageBuffer.byteLength,
      contentType
    });

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400", // 24시간 캐시
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  } catch (error) {
    console.error("이미지 프록시 에러:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
