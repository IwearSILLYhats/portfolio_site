

export default function Resume () {
    return (
        <div className="flex flex-row bg-zinc-50 font-sans dark:bg-black p-0"> 
        <div className="flex flex-col flex-1 items-start bg-zinc-50 font-sans dark:bg-black p-8">
            <div className="flex flex-col bg-zinc-100 dark:bg-zinc-900 p-4 mb-4">
                <h1 className="text-2xl font-bold">Austin Moorer</h1>
                <h2 className="text-lg">Software Engineer</h2>
            </div>
            <div>
                <p>Email: <a href="mailto:austin.moorer@gmail.com">austin.moorer@gmail.com</a></p>
                <p>Phone: <a href="tel:+1-813-704-3551">(813) 704-3551</a></p>
                <p>Location: Saint Petersburg, FL</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/austin-moorer-325a9bb3/" target="_blank" rel="noopener noreferrer">linkedin.com/in/austin-moorer-325a9bb3</a></p>
                <p>GitHub: <a href="https://github.com/iwearsillyhats" target="_blank" rel="noopener noreferrer">github.com/iwearsillyhats</a></p>
            </div>
            <div>
                <h3>Education</h3>
                <p>The Odin Project</p>
                <p>Full Stack Web Development</p>
                <p>2022-2026</p>
            </div>
            <div>
                <h3>Skills</h3>
                <ul>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>PostgreSQL</li>
                    <li>Github</li>
                    <li>Prisma ORM</li>
                    <li>NPM</li>
                </ul>
            </div>
        </div>
        <div>
            <div>
            <h3>
                Career Objective
            </h3>
            <p>Full Stack Web Developer with experience in creating efficient and scalable web applications.</p>
            </div>
            <div>
                <h3>Work Experience</h3>
            <h4>Customer Account Specialist</h4>
            <h5>CH Robinson</h5>
            <p>March 2011 - August 2026</p>
            <p>Remote</p>
            <ul>
                <li>Maintained strong relationships with 10+ large logistics accounts and coordinated daily transportation operations using industry-standard software.</li>
                <li>Identified operational bottlenecks and designed process improvements that increase efficiency.</li>
                <li>Utilized SQL and PostgreSQL to build efficient queries, improving data retrieval processes for businss operations.
                </li>
                <li>Collaborated across departments to improve reporting and operational visibility.</li>
                <li>Translated complex business requirements into practical technical solutions.</li>
            </ul>
            </div>
            <div>
                <h3>Skills</h3>
                
            </div>
            <div>
                <h3>Projects</h3>
                <h4>Bluesky Clone</h4>
                <p>
                    <b>
                        <a href="https://github.com/iwearsillyhats/Odinbook" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                        </b>
                        </p>
                        <ul>
                            <li>Full-stack social media platform inspired by Bluesky, featuring threaded conversations, user profiles, likes, reposts, and follow relationships.</li>
                            <li>Utilizes a normalized PostgreSQL database schema using Prisma to model posts, replies, user interactions, and social graphs.</li>
                            <li>Secure JWT-based authentication and protected API endpoints.</li>
                            <li>Includes reusable React components and custom hooks to managed complex client-side state.</li>
                        </ul>
            </div>
        </div>
        </div>
    )
}