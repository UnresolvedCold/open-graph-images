import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

function getAbstractColor(title:string) {
  let sum = 0;
  for (let i = 0; i < title.length; i++) {
    sum += title.charCodeAt(i);
  }

  // Calculate RGB values based on the sum
  const r = (sum * 13) % 256;
  const g = (sum * 17) % 256;
  const b = (sum * 19) % 256;

  // Convert RGB values to hex
  const hex_beg = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  const r2 = (sum * 23) % 256;
  const g2 = (sum * 37) % 256;
  const b2 = (sum * 43) % 256;

  const hex_end = `#${r2.toString(16).padStart(2, '0')}${g2.toString(16).padStart(2, '0')}${b2.toString(16).padStart(2, '0')}`;

  return `linear-gradient(45deg, ${hex_beg} 0%, ${hex_end} 100%)`;
}

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
          background: `${getAbstractColor(title)}`,
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
