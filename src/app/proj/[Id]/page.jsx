// // "use client";
// // import { useEffect, useState } from "react";
// import { projectInfo } from "@/lib/projectData";

// export default function Info({ params }) {
//   // const [Info, setInfo] = useState([]);
//   // useEffect(() => {
//   //   async function libData() {
//   //     const response = projectInfo;
//   //     const data = response;
//   //     setInfo(data);
//   //   }
//   //   libData();
//   // }, []);

//   const response = projectInfo;
//   const data = response[0];

//   return (
//     <main className="min-h-screen flex flex-col gap-3">
//       {/* {Info.map((item) => {
//         return ( */}
//       <>
//         <div key={data.id} className="flex flex-col items-center gap-3">
//           <a>{data.image}</a>
//           <h1 className="flex flex-row justify-center text-xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
//             {data.name}
//           </h1>

//           <p>{data.info}</p>
//           <p>{data.by}</p>
//         </div>
//       </>
//       {/* );
//       })} */}
//     </main>
//   );
// }
import {
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Box,
  Container,
  Strong,
  Separator,
} from "@radix-ui/themes";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import { projectInfo } from "@/lib/projectData";
import Link from "next/link";

export default function Info({ params }) {
  // console.log("Params:", params);

  const { Id } = params;

  const data = projectInfo.find((project) => project.id == Id);

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col gap-3 items-center">
        <h1 className="text-2xl text-red-600">Project Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col gap-3 p-4 max-w-4xl mx-auto">
      <h1 className="flex flex-row justify-center text-3xl font-semibold text-orange-600 items-center">
        {data.name}
      </h1>
      <section className="flex flex-col items-center gap-3 ">
        <Card className="max-w-fit bg-gray-100 h-fit justify center p-0 m-0 g-0">
          <Image
            src={data.src}
            alt={data.name}
            height={550}
            width={600}
            className=" rounded-lg"
          />
          <div className="flex flex-row justify-center items-center gap-5 mt-2">
            <a
              href={data.git}
              target="_blank"
              className="flex flex-row text-xl text-orange-600 items-center hover:underline hover:text-blue-500"
            >
              <p className="flex flex-row items-center">
                <FaGithub />
                &nbsp;Git Hub Link
              </p>
            </a>
            <p className="text-orange-600">:</p>
            <a
              href={data.site}
              target="_blank"
              className="flex flex-row text-xl text-orange-600 items-center hover:underline hover:text-blue-500"
            >
              <p>Project Site Link</p>
            </a>
          </div>
        </Card>
      </section>

      <br></br>

      <p>Info: {data.info}</p>
      <p>By: {data.by}</p>

      <Link href={"/proj"}>
        This button will be removed
        <button className="bg-gray-700 text-white rounded-md w-[4.5rem] h-[2rem]  justify-center items-center hover:bg-gray-400  hover:shadow-xl hover:shadow-orange-600 hover:text-black">
          projects
        </button>
      </Link>
    </main>
  );
}

//! use modal instead of dynamic pages to show project-info??
