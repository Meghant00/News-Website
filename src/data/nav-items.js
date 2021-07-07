const navItems = [
  {
    name: "Home",
    link: "home",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "About",
    link: "about",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "post & pages",
    link: "",
    dropdown: true,
    dropdownItems: [
      {
        dropdownName: "Video Post",
        link: "video-post",
      },
      {
        dropdownName: "gallery Post",
        link: "gallery-post",
      },
      {
        dropdownName: "audio Post",
        link: "audio-post",
      },
    ],
  },
  {
    name: "thinking",
    link: "",
    dropdown: true,
    dropdownItems: [
      {
        dropdownName: "home & living",
        link: "home-living",
      },
      {
        dropdownName: "lifestyle",
        link: "lifestyle",
      },
    ],
  },
  {
    name: "politics",
    link: "",
    dropdown: true,
    dropdownItems: [
      {
        dropdownName: "house & living",
        link: "house-living",
      },
      {
        dropdownName: "travel",
        link: "travel",
      },
    ],
  },
  {
    name: "contact",
    link: "contact",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "buy now",
    link: "buy-now",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "document",
    link: "document",
    dropdown: false,
    dropdownItems: [],
  },
];

export default navItems;
