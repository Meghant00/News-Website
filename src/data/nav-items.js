const navItems = [
  {
    name: "Home",
    link: "/",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "News",
    link: "news",
    dropdown: false,
    dropdownItems: [],
  },
  {
    name: "Economy",
    link: "economy",
    dropdown: false,
    dropdownItems: [
      
    ],
  },
  {
    name: "Entertainment",
    link: "",
    dropdown: true,
    dropdownItems: [
      {
        dropdownName: "Festival",
        link: "festival",
      },
      {
        dropdownName: "Music",
        link: "music",
      },
    ],
  },
  {
    name: "jobs",
    link: "jobs",
    dropdown: false,
    dropdownItems: [],
  },
];

export default navItems;
