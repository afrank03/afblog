const coding = require("./sidebars/coding-sidebar.js");
const pd = require("./sidebars/pd-sidebar.js");

module.exports = {
  title: "📝 Arthur Frank",
  description: "Coding, Personal Development, Leadership, IT, Courses",
  themeConfig: {
    searchPlaceholder: "Search...",
    nav: [
      { text: "Home", link: "/" },
      { text: "Coding", link: "/coding/" },
      { text: "Personal Development", link: "/pd/" },
      { text: "About", link: "/about/" }
    ],
    sidebar: {
      "/coding/": coding.sidebar,
      "/pd/": pd.sidebar
    }
  }
};
