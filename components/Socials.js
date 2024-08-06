// links
import Link from "next/link";

// icons
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa"; // Importing required icons
import { SiLeetcode } from "react-icons/si"; // Importing LeetCode icon

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href="https://github.com/PankajKorkalai" className="hover:text-accent transition-all duration-300">
        <FaGithub /> {/* GitHub Icon */}
      </Link>

      <Link href="https://www.linkedin.com/in/pankaj-korkalai-711723287/" className="hover:text-accent transition-all duration-300">
        <FaLinkedin /> {/* LinkedIn Icon */}
      </Link>

      <Link href="mailto:your-pankajkorkalai@gmail.com" className="hover:text-accent transition-all duration-300">
        <FaEnvelope /> {/* Email Icon */}
      </Link>

      {/* <Link href="https://www.instagram.com/pankaj_korkalai/" className="hover:text-accent transition-all duration-300">
        <FaInstagram /> {/* Instagram Icon */}
      {/* </Link> */}

      <Link href="" className="hover:text-accent transition-all duration-300">
        <FaTwitter /> {/* X (Twitter) Icon */}
      </Link>

      <Link href="https://leetcode.com/Pankaj_Korkalai" className="hover:text-accent transition-all duration-300">
        <SiLeetcode /> {/* LeetCode Icon */}
      </Link>
    </div>
  );
};

export default Socials;
