import { Avatar } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 max-w-4xl mx-auto">
      <section className="">
        <div className="flex flex-col pt-5">
          <Avatar size={"7"} radius="full" src="/tbr-snap.jpeg" fallback="TR" />
          <h1 className="text-2xl font-semibold pt-2">Theo Reeves</h1>
          <p className="text-sm">Junior Web/Software Developer </p>
          <br></br>
          <p className="text-sm">
            {" "}
            I am very ambitious and have been looking for solutions to break
            into the tech industry with a career change, while self learning
            through Codecademy and W3Schools I gained basic knowledge in HTML,
            CSS and some JavaScript. This inspired my exploration into software
            development and from here I applied into the Tech Educators bootcamp
            in Norwich. I successfully completed this course on 9 August 2024
            expanding my skills on HTML, CSS and Javascript while also learning
            about React, Postgres SQL with render and supabase, NextJs with
            Vercel, Authentication with Clerk, GitHub, Git Version Control and
            Docker. I graduated on the 15 August 2024 and will continue my
            development journey.
          </p>
        </div>
      </section>
    </main>
  );
}
