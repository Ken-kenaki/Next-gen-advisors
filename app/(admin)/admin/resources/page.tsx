// app/admin/resources/page.tsx (admin full CRUD UI)
"use client";
import { useEffect, useState, useRef } from "react";
import { appwriteConfig } from "@/lib/appwrite/config";
import { StorageService } from "@/lib/appwrite/storage";
import { FileText, Trash2, Eye, PlusCircle, Loader2 } from "lucide-react";

export default function AdminResourcesPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/resources")
      .then((res) => res.json())
      .then((data) => setResources(data.data.documents));
  }, [refresh]);

  const deleteResource = async (id: string) => {
    await fetch(`/api/resources/${id}`, { method: "DELETE" });
    setRefresh(!refresh);
  };

  const handleUpload = async () => {
    const name = nameRef.current?.value;
    const description = descriptionRef.current?.value;
    const type = typeRef.current?.value;
    const file = fileRef.current?.files?.[0];

    if (!name || !type || !file)
      return alert("Name, type, and file are required");

    setIsUploading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("description", description || "");
    formData.append("file", file);

    const res = await fetch("/api/resources", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setRefresh(!refresh);
      if (nameRef.current) nameRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (typeRef.current) typeRef.current.value = "";
      if (fileRef.current) fileRef.current.value = "";
    } else {
      alert("Failed to upload resource");
    }

    setIsUploading(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        📚 Admin Resource Manager
      </h1>

      <div className="mb-8 bg-gray-50 p-4 rounded-xl border">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-green-600" /> Add New Resource
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            ref={nameRef}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"
          />
          <input
            ref={typeRef}
            type="text"
            placeholder="Type (e.g. PDF)"
            className="input input-bordered w-full"
          />
          <input
            ref={descriptionRef}
            type="text"
            placeholder="Description (optional)"
            className="input input-bordered w-full md:col-span-2"
          />
          <input
            ref={fileRef}
            type="file"
            className="file-input file-input-bordered w-full md:col-span-2"
          />
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="btn bg-blue-600 text-white hover:bg-blue-700 w-full md:col-span-2"
          >
            {isUploading ? (
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
            ) : null}
            {isUploading ? "Uploading..." : "Upload Resource"}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <div
            key={res.$id}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileText className="text-blue-500 w-5 h-5" />
              <h2 className="text-lg font-semibold truncate">{res.name}</h2>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
              {res.description || "No description provided."}
            </p>
            <div className="flex justify-between text-sm">
              <a
                href={StorageService.getFileView(
                  appwriteConfig.buckets.resources,
                  res.fileId
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:underline"
              >
                <Eye className="w-4 h-4" /> View
              </a>
              <button
                onClick={() => deleteResource(res.$id)}
                className="flex items-center gap-1 text-red-600 hover:underline"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
