"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  Download,
  Search,
  Trash2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type FormStatus = "pending" | "responded";

interface FormSubmission {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  currentAddress: string;
  academicQualification: string;
  studyDestinations: string[];
  studyLevel: string;
  englishTest: string;
  passportStatus: string;
  studyReason: string;
  status: FormStatus;
  createdAt?: string;
}

export default function FormsPage() {
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<FormSubmission | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchFormSubmissions();
  }, []);

  const fetchFormSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/forms");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const submissions = data.documents.map((doc: any) => ({
        id: doc.$id,
        fullName: doc.fullName,
        email: doc.email,
        phoneNumber: doc.phoneNumber,
        currentAddress: doc.currentAddress,
        academicQualification: doc.academicQualification,
        studyDestinations: doc.studyDestinations,
        studyLevel: doc.studyLevel,
        englishTest: doc.englishTest,
        passportStatus: doc.passportStatus,
        studyReason: doc.studyReason,
        status: doc.status === "responded" ? "responded" : "pending",
        createdAt: doc.$createdAt || doc.createdAt,
      }));

      setFormSubmissions(submissions);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch submissions"
      );
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: FormStatus) => {
    try {
      const response = await fetch(`/api/forms/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update status");
      }

      setFormSubmissions((prev) =>
        prev.map((sub) => (sub.id === id ? { ...sub, status: newStatus } : sub))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
      setError(err instanceof Error ? err.message : "Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const response = await fetch(`/api/forms/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete submission");
      }

      setFormSubmissions((prev) => prev.filter((sub) => sub.id !== id));
    } catch (err) {
      console.error("Failed to delete submission:", err);
      setError(
        err instanceof Error ? err.message : "Failed to delete submission"
      );
    }
  };

  const toggleRowExpand = (id: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

  const exportToCSV = () => {
    const headers = [
      "Full Name",
      "Email",
      "Phone Number",
      "Current Address",
      "Academic Qualification",
      "Study Destinations",
      "Level of Study",
      "English Test",
      "Passport Status",
      "Study Reason",
      "Status",
      "Date",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredSubmissions.map((sub) =>
        [
          sub.fullName,
          sub.email,
          sub.phoneNumber,
          sub.currentAddress,
          sub.academicQualification,
          `"${sub.studyDestinations.join(", ")}"`,
          sub.studyLevel,
          sub.englishTest,
          sub.passportStatus,
          `"${sub.studyReason.replace(/"/g, '""')}"`,
          sub.status,
          sub.createdAt ? new Date(sub.createdAt).toLocaleDateString() : "N/A",
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "application-submissions.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredSubmissions = formSubmissions.filter((submission) => {
    const matchesSearch =
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.studyDestinations.some((dest) =>
        dest.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesStatus =
      statusFilter === "all" || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Application Submissions
        </h1>
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="responded">Responded</option>
          </select>
          <button
            onClick={exportToCSV}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center justify-center gap-2 text-sm"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Export CSV</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex justify-between items-center">
            <p className="text-red-700 text-sm">{error}</p>
            <button
              onClick={() => setError(null)}
              className="text-red-700 hover:text-red-900"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search submissions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destinations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSubmissions.map((submission) => (
                <>
                  <tr
                    key={submission.id}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => toggleRowExpand(submission.id)}
                    >
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {submission.fullName}
                        </div>
                        <button
                          className="ml-2 text-gray-500 hover:text-gray-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRowExpand(submission.id);
                          }}
                        >
                          {expandedRows.has(submission.id) ? (
                            <ChevronUp size={16} />
                          ) : (
                            <ChevronDown size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => toggleRowExpand(submission.id)}
                    >
                      <div className="text-sm text-gray-900">
                        {submission.email}
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => toggleRowExpand(submission.id)}
                    >
                      <div className="text-sm text-gray-900">
                        {submission.phoneNumber}
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap"
                      onClick={() => toggleRowExpand(submission.id)}
                    >
                      <div className="text-sm text-gray-900">
                        {submission.studyDestinations.join(", ")}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={submission.status}
                        onChange={(e) =>
                          updateStatus(
                            submission.id,
                            e.target.value as FormStatus
                          )
                        }
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-none cursor-pointer ${
                          submission.status === "responded"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="responded">Responded</option>
                      </select>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      onClick={() => toggleRowExpand(submission.id)}
                    >
                      {submission.createdAt
                        ? new Date(submission.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedSubmission(submission)}
                          className="text-blue-600 hover:text-blue-900"
                          aria-label="View details"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(submission.id)}
                          className="text-red-600 hover:text-red-900"
                          aria-label="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.has(submission.id) && (
                    <tr className="bg-gray-50">
                      <td colSpan={7} className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <h3 className="font-medium text-gray-700 mb-2">
                              Full Details
                            </h3>
                            <div className="space-y-2">
                              <div>
                                <span className="text-gray-500">
                                  Current Address:
                                </span>
                                <p>{submission.currentAddress}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Academic Qualification:
                                </span>
                                <p>{submission.academicQualification}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Level of Study:
                                </span>
                                <p>{submission.studyLevel}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-700 mb-2">
                              Additional Info
                            </h3>
                            <div className="space-y-2">
                              <div>
                                <span className="text-gray-500">
                                  English Test:
                                </span>
                                <p>{submission.englishTest}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Passport Status:
                                </span>
                                <p>{submission.passportStatus}</p>
                              </div>
                              <div>
                                <span className="text-gray-500">
                                  Study Reason:
                                </span>
                                <p className="whitespace-pre-wrap">
                                  {submission.studyReason}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        {filteredSubmissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-white rounded-lg shadow p-4 border"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">
                  {submission.fullName}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {submission.email}
                </p>
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => setSelectedSubmission(submission)}
                  className="text-blue-600 hover:text-blue-900 p-1"
                  aria-label="View details"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={() => handleDelete(submission.id)}
                  className="text-red-600 hover:text-red-900 p-1"
                  aria-label="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-gray-500">
                  Phone:
                </span>
                <p className="text-sm text-gray-900">
                  {submission.phoneNumber}
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-gray-500">
                  Destinations:
                </span>
                <p className="text-sm text-gray-900">
                  {submission.studyDestinations.join(", ")}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <select
                  value={submission.status}
                  onChange={(e) =>
                    updateStatus(submission.id, e.target.value as FormStatus)
                  }
                  className={`text-xs font-semibold rounded-full px-2 py-1 border-none ${
                    submission.status === "responded"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  <option value="pending">Pending</option>
                  <option value="responded">Responded</option>
                </select>

                <span className="text-xs text-gray-500">
                  {submission.createdAt
                    ? new Date(submission.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredSubmissions.length === 0 && !loading && (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <div className="text-gray-400 mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No submissions found
          </h3>
          <p className="text-gray-500">
            {searchTerm || statusFilter !== "all"
              ? "Try adjusting your search or filter criteria."
              : "Form submissions will appear here once they are received."}
          </p>
        </div>
      )}

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Application Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.fullName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.email}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.phoneNumber}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Current Address
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.currentAddress}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Academic Qualification
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.academicQualification}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Study Destinations
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.studyDestinations.join(", ")}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Level of Study
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.studyLevel}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      English Proficiency Test
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.englishTest}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Passport Status
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedSubmission.passportStatus}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <select
                      value={selectedSubmission.status}
                      onChange={(e) => {
                        updateStatus(
                          selectedSubmission.id,
                          e.target.value as FormStatus
                        );
                        setSelectedSubmission({
                          ...selectedSubmission,
                          status: e.target.value as FormStatus,
                        });
                      }}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                    >
                      <option value="pending">Pending</option>
                      <option value="responded">Responded</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Why do you want to study abroad?
                </label>
                <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">
                  {selectedSubmission.studyReason}
                </p>
              </div>
              <div className="flex justify-end mt-6 space-x-3">
                <button
                  onClick={() => handleDelete(selectedSubmission.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
