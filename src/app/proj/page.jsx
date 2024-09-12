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
    <main className="flex min-h-screen flex-col items-center p-4">
      <Heading size={"6"} className="p-2 pb-4 underline underline-offset-8">
        <Strong>Previous Projects</Strong>
      </Heading>
      <div className="flex flex-col gap-6 lg:flex lg:flex-row md:flex-row">
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
      </div>
    </main>
  );
}
