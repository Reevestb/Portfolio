import Link from "next/link";
import {
  Flex,
  Card,
  Container,
  Text,
  Strong,
  Separator,
} from "@radix-ui/themes";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <Container
      className=" flex flex-row bottom-0 z-40 self-center p-4"
      size="4"
    >
      <Flex
        justify="center"
        align="center"
        wrap="wrap"
        gap={"2"}
        // className="flex flex-row md:flex-row bottom-0 p-0 items-center"
      >
        <Link
          target="_blank"
          className="flex flex-row gap-2 text-[12px] hover:text-blue-600 items-center justify-center font-semibold"
          href="https://www.linkedin.com/in/theo-reeves-a13b77310/"
        >
          © 2024 Theo Reeves <Separator orientation={"vertical"} />{" "}
          <BsLinkedin className="hover:text-blue-600" />
        </Link>
      </Flex>
    </Container>
  );
}
