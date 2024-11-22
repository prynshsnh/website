import type { Metadata, Site, Socials, Links, Updates } from "@types";

export const SITE: Site = {
  TITLE: "Priyanshu Sinha",
  DESCRIPTION: "Priyanshu Sinha is a senior at DTU, this website is his reflection about work and interesting stuff.",
  EMAIL: "priyanshusinha.dtu@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Priyanshu Sinha",
  DESCRIPTION: "Priyanshu Sinha is a senior at DTU studying electronics and economics, analog VLSI enthusiast, Vice Captain of Team Raftaar, F1 fan, movie buff, and pop culture geek.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Where I have studied, worked and what I have done.",
};

export const LINKS: Links = [
  { 
    TEXT: "home", 
    HREF: "/", 
  },
  { 
    TEXT: "blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "about", 
    HREF: "/about", 
  }
]

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/PriyanshuSinhaX",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/priyanshusinha7/",
  },
  {
    NAME: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=NjDqj8MAAAAJ&hl=en",
  },
  {
    NAME: "Pinterest",
    HREF: "https://www.pinterest.com/priyanshusinha7/",
  },
  {
    NAME: "Letterboxd",
    HREF: "https://letterboxd.com/priyanshusinha/",
  },
  {
    NAME: "Goodreads",
    HREF: "https://www.goodreads.com/priyanshusinha",
  },
  {
    NAME: "The StoryGraph",
    HREF: "https://app.thestorygraph.com/profile/priyanshusinha",
  },
  {
    NAME: "Spotify",
    HREF: "https://open.spotify.com/user/4851xnqv7ijz5xj923m8ubp8r",
  },
  {
    NAME: "YouTube",
    HREF: "https://www.youtube.com/@PriyanshuSinhaYT",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/prynshsnh",
  },
  {
    NAME: "Mastodon",
    HREF: "https://mastodon.social/@priyanshusinha",
  },
  {
    NAME: "read.cv",
    HREF: "https://read.cv/priyanshusinha",
  },
  {
    NAME: "Resume",
    HREF: "https://drive.google.com/file/d/1BUDhZRYuNUFqeU71aLdT_TYB478ZHAXA/view?usp=sharing",
  },
];


export const UPDATES: Updates = [
  { 
    ACTION: "Reading",
    TEXT: "Songs My Mother Taught Me by Marlon Brando",  
  },
  { 
    ACTION: "Watching",
    TEXT: "From on Prime Video",  
  },
  { 
    ACTION: "Listening",
    TEXT: "Childish Gambino, ZAYN, The Weeknd",
  }
]