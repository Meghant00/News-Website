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
    dropdownItems: [],
  },
  {
    name: "Entertainment",
    link: "",
    dropdown: true,
    dropdownItems: [
      {
        dropdownName: "Festival",
        link: "entertainment",
      },
      {
        dropdownName: "Music",
        link: "entertainment",
      },
    ],
  },
];

export default navItems;
