"use client";
import { useEffect, useState } from "react";
import { projectInfo } from "@/lib/projectData";

export default function Info({ params }) {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    async function libData() {
      const response = projectInfo;
      const data = response;
      setInfo(data);
    }
    libData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col gap-3">
      {Info.map((item) => {
        return (
          <>
            <div key={item.id} className="flex flex-col items-center gap-3">
              <a>{item.image}</a>
              <h1 className="flex flex-row justify-center text-xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
                {item.name}
              </h1>

              <p>{item.info}</p>
              <p>{item.by}</p>
            </div>
          </>
        );
      })}
    </main>
  );
}
