import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import React from "react";

export const config = {
  runtime: "experimental-edge",
};

const regular = fetch(new URL("../../assets/Inter-Regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const bold = fetch(new URL("../../assets/Inter-Bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
export default async function handler(req: NextRequest) {
  const InterRegular = await regular;
  const InterBold = await bold;

  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");
  if (!title) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#101218",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "2rem",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              height: "100vh",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "84",
                fontWeight: "700",
                textAlign: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                marginBottom: "4rem",
              }}
            >
              404 Error
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "36",
                textAlign: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
              }}
            >
              shubham.codes
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            data: InterRegular,
            name: "Inter",
            weight: 400,
            style: "normal",
          },
          {
            data: InterBold,
            name: "Inter",
            weight: 700,
            style: "normal",
          },
        ],
      }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#101218",
        }}
      >
   <div
  style={{
    display: "flex",
    padding: "2rem",
    flexDirection: "column",  // Change flexDirection to "column" for vertical centering
    justifyContent: "center", // Center vertically
    alignItems: "center",     // Center horizontally
    width: "100%",
    height: "100vh",          // Use viewport height for better centering
  }}
>
  <div
    style={{
      display: "flex",
      fontSize: "48px",        // Add "px" after the font size value
      color: "white",
      fontWeight: "700",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 3rem",
      height: "100%",
    }}
  >
    {title}
  </div>
</div>

      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: InterRegular,
          name: "Inter",
          weight: 400,
          style: "normal",
        },
        {
          data: InterBold,
          name: "Inter",
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
