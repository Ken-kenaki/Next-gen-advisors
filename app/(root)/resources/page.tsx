// app/resources/page.tsx (for all users)
"use client";
import { useEffect, useState } from "react";
import { appwriteConfig } from "@/lib/appwrite/config";
import { StorageService } from "@/lib/appwrite/storage";

interface Resource {
  $id: string;
  fileId: string;
  name: string;
  description?: string;
  type: string;
  size: number;
  createdAt: string;
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => setResources(data.data.documents));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Available Resources</h1>
      <ul className="grid gap-4">
        {resources.map((res) => (
          <li key={res.$id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{res.name}</h2>
            <p className="text-sm text-gray-600">{res.description}</p>
            <a
              className="mt-2 inline-block text-blue-600 hover:underline"
              href={StorageService.getFileView(
                appwriteConfig.buckets.resources,
                res.fileId
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              View / Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
