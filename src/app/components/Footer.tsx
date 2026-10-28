import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-500 flex items-center justify-between">
        
        <div>
          © {new Date().getFullYear()} {siteConfig.name}
        </div>

        <div className="text-right">
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}
