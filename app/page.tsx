import CategoryCard from "./components/TechnologyCard";
import {skills} from "../public/content";

export default function Home() {
  return (
    <div>
    <div className="flex gap-6 flex-col items-start justify-start w-full">
      <div className="flex w-full items-center gap-4">
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 inline-block mr-2 whitespace-nowrap" id="about">About me</h1> 
      <span className="grow h-px bg-gray-300"></span>
      </div>
      <p className="mt-4 text-lg text-zinc-800 dark:text-zinc-200">
        I am a highly experienced Operations Analyst and full-stack web developer with over 15 years of expertise in logistics, workflow optimization, and operational problem-solving. My technical skills span modern web technologies including React, Node.js, Express, PostgreSQL, Prisma, and TypeScript, and I have a strong passion for designing intuitive user experiences, building secure REST APIs, and developing maintainable software that drives real-world business improvements.
      </p>
      <p className="text-lg text-zinc-800 dark:text-zinc-200">
        I bring a proven track record from my previous role, where I maintained key logistics accounts, streamlined transportation operations, and delivered impactful process improvements. My ability to automate and optimize reporting workflows using SQL, PostgreSQL, and Microsoft Office tools has significantly increased efficiency, reducing manual reporting time and enhancing operational visibility. My collaborative approach and talent for translating complex business requirements into practical technical solutions set me apart.
      </p>
    </div>
    <div className="flex gap-6 flex-col items-start justify-start w-full mt-8">
      <h1>Skills</h1>
      <div className="flex gap-4 flex-wrap items-start justify-start w-full">
      {skills.map((category, index) => (
        <CategoryCard key={index} heading={category.heading} content={category.items} />
      ))}
      </div>
    </div>
    </div>
  );
} 
