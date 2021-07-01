import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";

const headerIcons = [
  {
    link: "facebook.com",
    icon: (
      <FaFacebookF className="group group-hover:text-blue-500 transition duration-500 ease-in text-xs" />
    ),
  },
  {
    link: "twitter.com",
    icon: (
      <FaTwitter className="group group-hover:text-blue-500 transition duration-500 ease-in text-xs" />
    ),
  },
  {
    link: "google.com",
    icon: (
      <FaGoogle className="group group-hover:text-blue-500 transition duration-500 ease-in text-xs" />
    ),
  },
  {
    link: "pinterest.com",
    icon: (
      <FaPinterest className="group group-hover:text-blue-500 transition duration-500 ease-in text-xs" />
    ),
  },
];

export default headerIcons;
