import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const isDark =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false;
  const iconColor = isDark ? "#fff" : "#222";

  return (
    <footer className="sticky bottom-0 bg-background/80 backdrop-blur shadow-sm shadow-gray-200 dark:shadow-gray-900/20 py-4">
      <div className="max-w-3xl mx-auto flex flex-row items-center px-0 justify-between w-full">
        <div className="text-xs text-gray-500 text-left pl-4">
          &copy; 2025 Dhannumal Stores. All rights reserved.
        </div>
        <div className="flex gap-2 text-xl pr-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon
              sx={{ color: "inherit" }}
              className="text-gray-700 dark:text-gray-200"
            />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon
              sx={{ color: "inherit" }}
              className="text-gray-700 dark:text-gray-200"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon
              sx={{ color: "inherit" }}
              className="text-gray-700 dark:text-gray-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
