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
import Image from "next/image";

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
      <div className="flex flex-col justify-center gap-6 lg:flex lg:flex-row md:flex-row flex-wrap">
        {Info.map((item) => {
          return (
            <>
              <Card className="max-w-[50rem] bg-gray-100">
                <div key={item.id} className="flex flex-col items-center gap-3">
                  <Link href={`proj/${item.id}`}>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={350}
                      height={300}
                      className="rounded cursor-pointer hover:grayscale"
                    />
                    <h1 className="flex flex-row justify-center text-xl text-orange-600 items-center mt-1 hover:underline hover:text-blue-500">
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
