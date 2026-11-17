export default function Card({heading, content, index = 0}: {heading: string, content: Array<string>, index?: number}) {
  return (
    <div className="flex gap-6 flex-col items-start justify-start w-full">
      <div className={`flex w-full items-center gap-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200 inline-block whitespace-nowrap" id="about">About me</h1> 
      <span className="grow h-px bg-gray-300"></span>
      </div>
      <p className="mt-4 text-lg text-zinc-800 dark:text-zinc-200">
        {heading}
      </p>
      {content.map((paragraph, i) => (
        <p key={i} className="text-lg text-zinc-800 dark:text-zinc-200">
          {paragraph}
        </p>
      ))}
    </div>
  );
} 
