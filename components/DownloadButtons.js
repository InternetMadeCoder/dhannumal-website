import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export default function DownloadButtons() {
  return (
    <div className="flex flex-row gap-4 justify-center mt-4">
      <a
        href="#"
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border border-transparent hover:border-primary"
        aria-label="Download on the App Store"
      >
        <AppleIcon className="text-2xl" />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-xs font-normal opacity-80">
            Download on the
          </span>
          <span className="text-base font-bold">App Store</span>
        </div>
      </a>
      <a
        href="#"
        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 border border-transparent hover:border-green-400"
        aria-label="Get it on Google Play"
      >
        <AndroidIcon className="text-2xl" />
        <div className="flex flex-col items-start leading-tight">
          <span className="text-xs font-normal opacity-80">Get it on</span>
          <span className="text-base font-bold">Google Play</span>
        </div>
      </a>
    </div>
  );
}
