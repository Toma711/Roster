import "./styles.css";

export default function App() {
  let names = [
    {
      name: "Bob the Builder",
      school: "School of hard hats",
      year: 2001,
      color: "Yellow",
      music: "Nursery Rhymes",
      video: "https://www.youtube.com/watch?v=kXj_1u7YlUY",
      media: "Tik Tok",
      place: "Mountains"
    },
    {
      name: "Karin",
      school: "UC Berkeley",
      year: 2017,
      color: "Sage",
      music: "Country",
      video: "https://www.youtube.com/watch?v=oOlDewpCfZQ",
      media: "Instagram",
      place: "Beach"
    },
    {
      name: "Ana",
      school: "CSUEB",
      year: 2016,
      color: "Green",
      music: "Reggea",
      video: "https://www.youtube.com/channel/UCKxbp_TrC0liu7tl0xsmdoA",
      media: "Instagram",
      place: "Beach"
    },
    {
      name: "Joe",
      school: "School of Schools",
      year: 2021,
      color: "Orange",
      music: "Music",
      video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      media: "",
      place: ""
    },
    {
      name: "Jayden",
      school: "Burton High School",
      year: "2023",
      color: "Blue",
      music: "No Prefrence",
      video: "",
      media: "Instagram",
      place: "Beach"
    },
    {
      name: "uber",
      school: "lowella",
      year: "1940",
      color: "burger",
      music: "classic",
      url: "",
      socialMedia: "",
      beachOrMountain: ""
    },
    {
      name: "Maya",
      school: "UC San Diego",
      year: "2016",
      color: "Purple",
      music: "Dance pop",
      url: "https://www.youtube.com/c/Taskmaster",
      socialMedia: "Instagram",
      beachOrMountain: "Mountains"
    },
    {
      name: "David",
      school: "Burton",
      year: "2023",
      color: "Crimson Red",
      music: "Folk",
      url: "https://www.youtube.com/watch?v=vWJvQveHDLk",
      socialMedia: "",
      beachOrMountain: ""
    },
    {
      name: "Kevin",
      school: "Carnegie Mellon",
      year: "2015",
      color: "Blue",
      music: "Pop",
      url: "https://www.youtube.com/c/twosetviolin",
      socialMedia: "Instagram",
      beachOrMountain: "Beach"
    },
    {
      name: "Old",
      school: "School",
      year: "1987",
      color: "Red",
      music: "Rock",
      url: "",
      socialMedia: "",
      beachOrMountain: "Mountains"
    },
    {
      name: "ca",
      school: "bal",
      year: "2022",
      color: "blue",
      music: "pop",
      url: "N/A",
      socialMedia: "N/A",
      beachOrMountain: ""
    },
    {
      name: "Mike Wazowski",
      school: "Monster University",
      year: "5021",
      color: "lime green",
      music: "Kpop",
      url: "https://www.youtube.com/watch?v=QllBbRPTsE0",
      socialMedia: "TikTok",
      beachOrMountain: "Mountains"
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{names[8].name}</p>
    </div>
  );
}
