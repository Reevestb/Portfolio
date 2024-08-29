import {
  Button,
  Flex,
  Card,
  Container,
  Separator,
  Avatar,
  Text,
  Strong,
} from "@radix-ui/themes";
import { ActiveLink } from "./ActiveLink";
import LD from "@/components/light-dark";

export default function Header() {
  return (
    <nav className="sticky top-0 z-40 pt-1 self-center">
      <Container className="pl-2 pr-2 ">
        <Card className="p-0 m-0">
          <Flex
            direction={"row"}
            justify={"between"}
            gap={"2"}
            align={"center"}
            // className="pt-1"
          >
            <div className="flex flex-row justify-center gap-2 items-center p-0 m-0">
              <a href="/">
                <Avatar
                  size={"2"}
                  radius="full"
                  src="/tbr-snap.jpeg"
                  fallback="TR"
                />
                <Text
                  size={"5"}
                  // color="orange"
                  className="pl-1 text-orange-500 justify-center"
                >
                  <Strong>Theo Reeves</Strong>
                </Text>
              </a>
            </div>
            <div className="flex flex-row gap-2  items-center">
              <ActiveLink href={"/"}>
                <p>Home</p>
              </ActiveLink>
              <Separator orientation={"vertical"} size={"2"} />
              <ActiveLink href={"/projects"}>
                <p>Projects</p>
              </ActiveLink>
              <Separator orientation={"vertical"} size={"2"} />
              <LD />
            </div>
          </Flex>
        </Card>
      </Container>
    </nav>
  );
}
