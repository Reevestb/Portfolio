"use client";
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
import { useEffect, useState } from "react";
import { projectInfo } from "@/lib/projectData";
import Link from "next/link";

export default function Info() {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    async function libData() {
      const response = projectInfo;
      const data = response;
      setInfo(data);
    }
    libData();
  }, []);
  //
  return (
    <main className="flex flex-col md:flex-row justify-center gap-4 min-h-screen p-4">
      {Info.map((item) => {
        return (
          <>
            <Card className="max-w-fit bg-gray-100 h-fit">
              <div key={item.id} className="flex flex-col items-center gap-3">
                <Link href={`proj/${item.id}`}>
                  {item.image}
                  <h1 className="flex flex-row justify-center text-xl text-orange-600 items-center mt-2 hover:underline hover:text-blue-500">
                    {item.name}
                  </h1>
                </Link>
                {/* <p>{item.info}</p> */}
                {/* <p>{item.by}</p> */}
              </div>
            </Card>
          </>
        );
      })}
    </main>
  );
}
