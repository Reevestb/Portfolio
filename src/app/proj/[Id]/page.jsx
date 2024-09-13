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
import Image from "next/image";

import { projectInfo } from "@/lib/projectData";

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
    <main className="min-h-screen flex flex-col gap-3 p-4">
      <div key={data.id} className="flex flex-col items-center gap-3">
        {/* <a>{data.image}</a> */}
        <Image
          src={data.src}
          alt={data.name}
          height={500}
          width={500}
          className=" bg-gray-600 p-2"
        />
        <h1 className="flex flex-row justify-center text-xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
          Project Name: {data.name}
        </h1>

        <p>Info: {data.info}</p>
        <p>By: {data.by}</p>
      </div>
    </main>
  );
}
