export default function About() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <header className="flex flex-col items-center justify-between w-full sm:flex-row">
                    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">About</h1>
                </header>
                <div className="mt-8 text-lg text-zinc-800 dark:text-zinc-200">
                    <p>
                        Hello! My name is Austin Moorer, and I am a software engineer and web developer. I have a passion for creating beautiful and functional web applications that provide value to users. I have experience with a variety of technologies, including React, Next.js, Node.js, and more.
                    </p>
                    <p className="mt-4">
                        In my free time, I enjoy snorkeling, learning new technologies, and cooking. I am always looking for new challenges and opportunities to grow as a developer.
                    </p>
                </div>
            </main>
        </div>
    )}