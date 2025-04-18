import {
  IconArticle,
  IconCode,
  IconDeviceLaptop,
  IconFileCv,
  IconHome,
  IconUser,
} from "@tabler/icons-react";

export const FloatingDockLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-300" />
    ),
    href: "/",
  },

  {
    title: "About",
    icon: (
      < IconUser className="h-full w-full text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Blogs",
    icon: (
      <IconArticle className="h-full w-full text-neutral-300" />
    ),
    href: "https://medium.com/@amitvaibhavtiwari",
  },

  {
    title: "Projects",
    icon: (
      <IconDeviceLaptop className="h-full w-full text-neutral-300" />
    ),
    href: "/projects",
  },

  {
    title: "Resume",
    icon: (
      <IconFileCv className="h-full w-full text-neutral-300" />
    ),
    href: "/resume",
  },
  {
    title: "Snippets",
    icon: (
      <IconCode className="h-full w-full text-neutral-300" />
    ),
    href: "/snippets",
  },
];
