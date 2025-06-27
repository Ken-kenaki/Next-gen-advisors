// app/resources/page.tsx
import { DatabaseService } from "@/lib/appwrite/database";
import { appwriteConfig } from "@/lib/appwrite/config";
import { DownloadButton } from "@/Components/DownloadButton";

export default async function ResourcesPage() {
  const resources = await DatabaseService.getResources();

  return (
    <div className="container pt-55 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Resources</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.documents.map((resource) => (
          <div key={resource.$id} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">{resource.name}</h2>
              {resource.description && (
                <p className="text-gray-600 mt-2">{resource.description}</p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {resource.type} • {(resource.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <DownloadButton
              bucketId={appwriteConfig.buckets.resources}
              fileId={resource.fileId}
              fileName={resource.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
