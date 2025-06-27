// components/DownloadButton.tsx
"use client";

import { useState } from "react";
import { StorageService } from "@/lib/appwrite/storage";

export function DownloadButton({
  bucketId,
  fileId,
  fileName,
}: {
  bucketId: string;
  fileId: string;
  fileName: string;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Get the file download URL
      const result = await StorageService.getFileDownload(bucketId, fileId);

      // Create a temporary anchor tag to trigger download
      const link = document.createElement("a");
      link.href = result.href;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      {isLoading ? "Downloading..." : "Download"}
    </button>
  );
}
