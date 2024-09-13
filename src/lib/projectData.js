import Image from "next/image";

export const projectInfo = [
  {
    id: 1,
    name: "Eggscape",
    info: "A Netflix style app made in the final week of the Tech Educators Bootcamp. We made this as team tackling Api's and Relational Databases",
    by: "Jake Darby, Richard Goodacre and Theo Reeves",
    image: (
      <Image
        src={"/eggscape-movies.png"}
        alt="Eggscpape movie"
        width={350}
        height={300}
        className="rounded cursor-pointer hover:grayscale"
      />
    ),
    src: "/eggscape-movies.png",
  },
  {
    id: 2,
    name: "A Social Network",
    info: "A Social Network made by me, exploring relational databses where uses can make posts. Users make like others posts, edit or delete their own",
    by: "Theo Reeves",
    image: (
      <Image
        src={"/gg.png"}
        alt="A social Network"
        width={350}
        height={300}
        className="rounded cursor-pointer hover:grayscale"
      />
    ),
    src: "/gg.png",
  },
];
