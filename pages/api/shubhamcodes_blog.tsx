import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
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
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "48",
              color: "white",
              fontWeight: "700",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 3rem",
              flex: "2",
              height: "100%"
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "0 3rem",
              flex: "1",
              height: "100%",
            }}
          >
            <div style={{display: "flex", borderRadius: "70%", width: "200", height: "200", overflow: "hidden"}}>
                <img src="https://shubham.codes/profile.png" height="100%" width="100%"/>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
                fontSize: "25",
                marginTop: "30",
                width: "100%", 
                alignItems: "center"
              }}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: "8",
                    width: "75%",
                }}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png" alt="Social" height="32" width="32" style={{filter: "invert(1)"}}/>        
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-app-icon.png" alt="Social Images" height="32" width="32"/>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" alt="Social Images" height="32" width="32" />
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/telegram-icon.png" alt="Social" height="32" width="32" />      
                </div>
                <span
                    style={{
                    color: "#94a3b8",
                    }}
                >
                    Shubham Kumar
                </span>
                <span
                    style={{
                    color: "#60a5fa",
                    }}
                >
                    @schwiftycold
                </span>
                <span
                    style={{
                    color: "#60a5fa",
                    fontSize:"16"
                    }}
                >
                    (@unresolvedcold for GitHub)
                </span>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: ".75rem",
            }}
          >
            <img src="https://shubham.codes/icon.png" alt="Icon" width="48px" height="48px" />
            <span
              style={{
                fontSize: "30",
                color: "#94a3b8",
                marginLeft: "1rem",
                marginTop: "6px",
              }}
            >
                shubham.codes
            </span>
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
