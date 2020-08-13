import {
  ZillowLogo,
  GizmodoLogo,
  RedBullMusicLogo,
  LifeHackerLogo,

} from "./components/CompanyLogos";

const companies = [
  {
    key: "https://www.redbullmusicacademy.com/",
    similarWebGlobalRank: 470372,
    name: "Redbull Music Academy",
    logo: RedBullMusicLogo,
    style: {},
    projects: {
      redbullmusicacademy: {
        title: "Redbull Music Academy",
        link: "https://www.redbullmusicacademy.com/",
        src: "/screenshots/thumbnails/redbullmusicacademy.com.jpg",
        width: 1280,
        height: 720,
      },
    },
  },
  {
    key: "https://gizmodo.com/",
    similarWebGlobalRank: 3189,
    name: "Gizmodo",
    logo: GizmodoLogo,
    style: {},
    projects: {
      gizmodo: {
        title: "Gizmodo",
        link: "https://gizmodo.com/",
        src: "/screenshots/thumbnails/gizmodo.com.jpg",
        width: 1280,
        height: 720,
        internalUrl: "gizmodo",
      },
    },
  },
  {
    key: "https://www.zillow.com/",
    similarWebGlobalRank: 42,
    name: "Zillow",
    logo: ZillowLogo,
    style: {},
    projects: {
      zillow: {
        title: "Zillow",
        link: "https://www.zillow.com/",
        src: "/screenshots/thumbnails/zillow.com.jpg",
        width: 1280,
        height: 720,
        internalUrl: "zillow",
      },
    },
  },
  {
  key: "https://www.lifehacker.com/",
  similarWebGlobalRank: 4821,
  name: "Life Hacker",
  logo:  LifeHackerLogo,
  style: {},
  projects: {
    lifehacker: {
      title: "Life Hacker",
      link: "https://lifehacker.com",
      src: "/screenshots/thumbnails/lifehacker.com.jpg",
      width: 1280,
      height: 720,
      internalUrl: "lifehacker",
    },
  },
},
];

export default companies;

// sorting logic: the more popular a website, the higher it gets listed
export const sortedCompanies = companies.sort(
  (a, b) => a.similarWebGlobalRank - b.similarWebGlobalRank
);
export const sortedProjects = sortedCompanies.reduce(
  (projects, company) => ({
    ...projects,
    ...Object.entries(company.projects || {}).reduce(
      (projects, [name, project]) => ({
        ...projects,
        [name]: {
          ...project,
          owner: company.name,
        },
      }),
      {}
    ),
  }),
  {}
);
