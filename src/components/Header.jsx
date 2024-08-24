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
    <nav className="sticky top-0 z-40 pt-2 self-center">
      <Container className="pl-2 pr-2">
        <Card>
          <Flex
            direction={"row"}
            justify={"between"}
            gap={"2"}
            align={"center"}
          >
            <div className="flex flex-row justify-center gap-2">
              <Avatar
                size={"2"}
                radius="full"
                src="/tbr-snap.jpg"
                fallback="TR"
              />
              <Text size={"5"} color="orange">
                <Strong>Theo Reeves</Strong>
              </Text>
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
