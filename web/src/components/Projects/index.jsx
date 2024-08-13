import { ProjectCard } from '../ProjectCard';

export function Projects() {
  return (
    <section className="flex flex-col items-center mt-12 p-6">
      <h1 className="font-bold text-4xl text-customBlue dark:text-white">
        Projects
      </h1>
      <h2 className="mt-4 text-3xl text-customBlue dark:text-white">
        Things I’ve built so far
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title={'Project Tile goes here'}
          description={
            'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
          }
          stack={' HTML , JavaScript, SASS, React'}
        />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}
