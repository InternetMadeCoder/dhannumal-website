"use client";
import Image from "next/image";
import DownloadButtons from "../components/DownloadButtons";
import { useEffect, useState } from "react";

export default function Home() {
  const [bg, setBg] = useState("/black-bg.jpg");

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
      const updateBg = () => {
        if (document.documentElement.classList.contains("dark")) {
          setBg("/black-bg.jpg");
        } else {
          setBg("/white-bg.jpg");
        }
      };
      updateBg();
      const observer = new MutationObserver(updateBg);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
        }}
      />
      <div
        className="flex flex-col items-center text-center gap-8 min-h-screen w-full justify-center"
        style={{ minHeight: "80vh", marginTop: "-3vh" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Your one-stop app for everyday essentials
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Dhannumal Stores brings groceries, daily needs, and more to your
          doorstep. Shop easily, track orders, and enjoy exclusive deals—
          <br></br>all in one sleek app.
        </p>
        <DownloadButtons />
      </div>
    </div>
  );
}
