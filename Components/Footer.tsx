import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  BookOpen,
  Globe,
  ClipboardList,
  Users,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const footerColumns = [
    {
      title: "About Us",
      icon: <Users size={20} className="text-white mr-2 font-extrabold" />,
      links: [
        { name: "Who We Are", url: "/about" },
        { name: "Our Vision", url: "/about#vision" },
        { name: "Our Mission", url: "/about#mission" },
        { name: "Testimonials", url: "/about#testimonials" },
      ],
    },
    {
      title: "Study Destinations",
      icon: <Globe size={20} className="text-white mr-2 font-extrabold" />,
      links: [
        { name: "United Kingdom", url: "/uk" },
        { name: "Australia", url: "/australia" },
        { name: "Canada", url: "/canada" },
        { name: "USA", url: "/usa" },
        { name: "New Zealand", url: "/new-zealand" },
      ],
    },
    {
      title: "Test Preparation",
      icon: <BookOpen size={20} className="text-white mr-2 font-extrabold" />,
      links: [
        { name: "IELTS", url: "/test-preparation/ielts" },
        { name: "PTE", url: "/test-preparation/pte" },
        { name: "TOEFL", url: "/test-preparation/toefl" },
        { name: "SAT", url: "/test-preparation/sat" },
        { name: "GRE/GMAT", url: "/test-preparation/gre-gmat" },
      ],
    },
    {
      title: "Our Services",
      icon: (
        <ClipboardList size={20} className="text-white mr-2 font-extrabold" />
      ),
      links: [
        { name: "Career Counseling", url: "/services/counseling" },
        { name: "University Selection", url: "/services/university-selection" },
        { name: "Application Assistance", url: "/services/application" },
        { name: "Visa Guidance", url: "/services/visa" },
        { name: "Scholarship Support", url: "/services/scholarships" },
      ],
    },
    {
      title: "Resources",
      icon: <FileText size={20} className="text-white mr-2 font-extrabold" />,
      links: [
        { name: "Events/News", url: "/events" },
        { name: "Blogs", url: "/blog" },
        { name: "Apply Online", url: "/apply" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-white mr-2 font-extrabold" />,
      text: "Manbhawan, Lalitpur, Nepal",
    },
    {
      icon: <Phone size={20} className="text-white mr-2 font-extrabold" />,
      text: "015413555 | 9709195734 | 9709195735",
      url: "tel:+97715413555",
      isLink: true,
    },
    {
      icon: <Mail size={20} className="text-white mr-2 font-extrabold" />,
      text: "nextgenadvisors7@gmail.com",
      url: "mailto:nextgenadvisors7@gmail.com",
      isLink: true,
    },
    {
      icon: <Clock size={20} className="text-white mr-2 font-extrabold" />,
      text: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      icon: <Clock size={20} className="text-white mr-2 font-extrabold" />,
      text: "Sat: 10:00 AM - 4:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <Facebook
          size={24}
          className="text-white hover:opacity-80 transition font-extrabold"
        />
      ),
      url: "https://www.facebook.com/share/19KkSqKWpU/",
      label: "Facebook",
    },
    {
      icon: (
        <Instagram
          size={24}
          className="text-white hover:opacity-80 transition font-extrabold"
        />
      ),
      url: "https://www.instagram.com/advisorsnextgen?igsh=YWZoZ2N2Z3FpaGNn",
      label: "Instagram",
    },
    {
      icon: (
        <Twitter
          size={24}
          className="text-white hover:opacity-80 transition font-extrabold"
        />
      ),
      url: "#",
      label: "Twitter",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-white hover:opacity-80 transition font-extrabold"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
      url: "https://www.tiktok.com/@nextgen.advisors?_t=ZS-8xXmzvxH4Rb&_r=1",
      label: "TikTok",
    },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Sitemap", url: "/sitemap" },
  ];

  return (
    <footer className="bg-[#1E6F2D] text-white pt-16 pb-10 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12">
          {footerColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-extrabold flex items-center">
                {column.icon}
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-white hover:underline transition font-semibold"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-lg font-extrabold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  {info.icon}
                  {info.isLink ? (
                    <Link
                      href={info.url!}
                      className="text-white hover:underline font-semibold"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="font-semibold">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 font-bold">
            © {new Date().getFullYear()} Nextgen Advisors. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-white hover:underline font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
