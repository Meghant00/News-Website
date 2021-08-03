import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter } from "react-icons/fa";

const footerIcons = [
  {
    link: "facebook.com",
    icon: <FaFacebookF className="group group-hover:text-white z-10" />,
  },
  {
    link: "twitter.com",
    icon: <FaTwitter className="group group-hover:text-white z-10" />,
  },
  {
    link: "google.com",
    icon: <FaGoogle className="group group-hover:text-white z-10" />,
  },
  {
    link: "pinterest.com",
    icon: <FaPinterest className="group group-hover:text-white z-10" />,
  },
];

export default footerIcons;
