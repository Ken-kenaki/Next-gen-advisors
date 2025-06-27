import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  BookOpen,
  Globe,
  ClipboardList,
  Users,
  Calendar,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface FooterColumn {
  title: string;
  icon?: React.ReactNode;
  links: {
    name: string;
    url: string;
  }[];
}

interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  url?: string;
  isLink?: boolean;
}

export default function Footer() {
  const footerColumns: FooterColumn[] = [
    {
      title: "About Us",
      icon: <Users size={18} className="text-[#35B354]" />,
      links: [
        { name: "Who We Are", url: "/about" },
        { name: "Our Vision", url: "/about#vision" },
        { name: "Our Mission", url: "/about#mission" },
        { name: "Testimonials", url: "/about#testimonials" },
      ],
    },
    {
      title: "Study Destinations",
      icon: <Globe size={18} className="text-[#35B354]" />,
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
      icon: <BookOpen size={18} className="text-[#35B354]" />,
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
      icon: <ClipboardList size={18} className="text-[#35B354]" />,
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
      icon: <FileText size={18} className="text-[#35B354]" />,
      links: [
        { name: "Events/News", url: "/events" },
        { name: "Blogs", url: "/blog" },
        { name: "Apply Online", url: "/apply" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="flex-shrink-0 mt-1 text-[#35B354]" size={18} />,
      text: "Manbhawan, Lalitpur, Nepal",
    },
    {
      icon: <Phone className="text-[#35B354]" size={18} />,
      text: "015413555 | 9709195734 | 9709195735",
      url: "tel:+97715413555",
      isLink: true,
    },
    {
      icon: <Mail className="text-[#35B354]" size={18} />,
      text: "nextgenadvisors7@gmail.com",
      url: "mailto:nextgenadvisors7@gmail.com",
      isLink: true,
    },
    {
      icon: <Clock className="text-[#35B354]" size={18} />,
      text: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      icon: <Clock className="text-[#35B354]" size={18} />,
      text: "Sat: 10:00 AM - 4:00 PM",
    },
  ];

  const socialLinks = [
    {
      icon: <Facebook size={20} className="text-white hover:text-[#35B354]" />,
      url: "https://www.facebook.com/share/19KkSqKWpU/",
      label: "Facebook",
    },
    {
      icon: <Instagram size={20} className="text-white hover:text-[#35B354]" />,
      url: "https://www.instagram.com/advisorsnextgen?igsh=YWZoZ2N2Z3FpaGNn",
      label: "Instagram",
    },
    {
      icon: <Twitter size={20} className="text-white hover:text-[#35B354]" />,
      url: "#",
      label: "Twitter",
    },
    {
      icon: <Tiktok size={20} className="text-white hover:text-[#35B354]" />,
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
    <footer className="bg-[#35B354] text-white pt-12 pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                {column.icon}
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="hover:text-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span aria-hidden="true">{info.icon}</span>
                  {info.isLink && info.url ? (
                    <Link
                      href={info.url}
                      className="hover:text-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {info.text}
                    </Link>
                  ) : (
                    <span className="text-sm sm:text-base">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="transition-colors duration-200"
                  aria-label={`Visit our ${social.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6 sm:my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/80 text-xs sm:text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Nextgen Advisors. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="hover:text-white transition-colors duration-200"
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

// Add the TikTok icon component since it's not in lucide-react by default
function Tiktok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 9a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4z" />
      <path d="M16 8V7a4 4 0 0 0-4-4H8" />
      <path d="M8 12a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4z" />
    </svg>
  );
}
