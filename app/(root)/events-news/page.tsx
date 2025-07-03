"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface NewsEvent {
  $id: string;
  title: string;
  type: "news" | "event";
  content: string;
  date: string;
  status: "draft" | "published";
  imageId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

function getImageUrl(imageId?: string | null) {
  if (!imageId) return null;
  return `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_NEWS_BUCKET}/files/${imageId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`;
}

export default function NewsOfferPage() {
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "news" | "events">("all");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch("/api/news-events?limit=50&offset=0");
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await res.json();
        setNewsEvents(data.documents || []);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  const filteredItems = newsEvents.filter((item) => {
    if (activeTab === "all") return item.status === "published";
    return item.type === activeTab && item.status === "published";
  });

  // Get only events for the events section
  const events = newsEvents.filter(
    (item) => item.type === "event" && item.status === "published"
  );

  // Get featured news (first 3 published news items)
  const featuredNews = newsEvents
    .filter((item) => item.type === "news" && item.status === "published")
    .slice(0, 3);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your subscription logic here
    alert(`Thank you for subscribing with ${email}`);
    setEmail("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#35B354] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news and events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error loading content
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden min-h-screen pt-52 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      {/* Hero Section */}
      <section className="mb-16 text-center bg-gradient-to-r from-[#35B354]/10 to-[#35B354]/5 rounded-3xl p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          News & Events
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with our latest announcements, offers, and upcoming
          events
        </p>
        <div className="mt-8">
          <button
            onClick={() =>
              document
                .getElementById("featured-news")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#35B354] hover:bg-[#2D9C4A] text-white font-medium py-3 px-6 rounded-full transition duration-300"
          >
            Explore Updates
          </button>
        </div>
      </section>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <section id="featured-news" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured News</h2>
            <button
              onClick={() => setActiveTab("news")}
              className="text-[#35B354] hover:text-[#2D9C4A] font-medium"
            >
              View All News →
            </button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredNews.map((item) => (
              <div
                key={item.$id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {item.imageId && (
                  <div className="h-48 relative">
                    <Image
                      src={getImageUrl(item.imageId) || "/placeholder-news.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#35B354]/10 text-[#35B354]">
                      {item.type === "news" ? "News" : "Event"}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {item.content}
                  </p>
                  <button className="text-[#35B354] hover:text-[#2D9C4A] font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="mb-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "all"
                  ? "border-[#35B354] text-[#35B354]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              All Updates
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "news"
                  ? "border-[#35B354] text-[#35B354]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              News & Offers
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "events"
                  ? "border-[#35B354] text-[#35B354]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Events
            </button>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      {filteredItems.length === 0 ? (
        <section className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            No {activeTab === "all" ? "content" : activeTab} available
          </h3>
          <p className="mt-1 text-gray-500">
            {activeTab === "all"
              ? "Check back later for updates"
              : activeTab === "news"
              ? "We'll post news and offers here soon"
              : "No events scheduled yet"}
          </p>
        </section>
      ) : (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {activeTab === "all"
              ? "Latest Updates"
              : activeTab === "news"
              ? "News & Offers"
              : "Upcoming Events"}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.$id}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {item.imageId && (
                  <div className="flex-shrink-0 h-48 relative overflow-hidden">
                    <Image
                      src={getImageUrl(item.imageId) || "/placeholder-news.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#35B354]/10 text-[#35B354]">
                        {item.type === "news" ? "News" : "Event"}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600 line-clamp-3">
                      {item.content}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="text-[#35B354] hover:text-[#2D9C4A] font-medium text-sm">
                      Read full story →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Events Section */}
      {events.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Upcoming Events
            </h2>
            <button
              onClick={() => setActiveTab("events")}
              className="text-[#35B354] hover:text-[#2D9C4A] font-medium"
            >
              View All Events →
            </button>
          </div>
          <div className="bg-[#35B354]/5 rounded-2xl p-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.slice(0, 3).map((event) => (
                <div
                  key={event.$id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {event.imageId && (
                    <div className="h-48 relative">
                      <Image
                        src={
                          getImageUrl(event.imageId) || "/placeholder-event.jpg"
                        }
                        alt={event.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="flex-shrink-0 bg-[#35B354] rounded-md p-1">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {event.content}
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#35B354] hover:bg-[#2D9C4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35B354]">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="bg-[#35B354] rounded-2xl p-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-[#E8F5E9] mb-6">
            Subscribe to our newsletter to get the latest news and offers
            directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="sm:flex gap-3">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 placeholder-gray-100 focus:ring-2 border-white border-2 focus:ring-white focus:border-0 focus:ring-offset-[#35B354] rounded-md"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#35B354] bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#35B354]"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-[#E8F5E9]">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Follow Us On Social Media
        </h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/share/19KkSqKWpU/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#35B354] transition-colors duration-300"
          >
            <span className="sr-only">Facebook</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/advisorsnextgen?igsh=YWZoZ2N2Z3FpaGNn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#35B354] transition-colors duration-300"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@nextgen.advisors?_t=ZS-8xXmzvxH4Rb&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#35B354] transition-colors duration-300"
          >
            <span className="sr-only">TikTok</span>
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
