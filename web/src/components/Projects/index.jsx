import { ProjectCard } from '../ProjectCard';
import MoraesAdv from '../../../public/images/moraes-adv.png';
import Focus from '../../../public/images/focus.png';
import HabitSync from '../../../public/images/habitsync.png';
import ToDoList from '../../../public/images/todolist.png';

export function Projects({ t }) {
  return (
    <section className="flex flex-col items-center mt-12 p-6">
      <h1 className="font-bold text-4xl text-customBlue dark:text-white">
        {t('projects.title')}
      </h1>
      <h2 className="mt-4 text-3xl text-center text-customBlue dark:text-white">
        {t('projects.subtitle')}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectCard
          image={MoraesAdv}
          title={t('project1.title')}
          description={t('project1.description')}
          stack={t('project1.technologies')}
          t={t}
          preview={'https://moraes-adv.vercel.app/'}
          code={'https://github.com/madusfx/moraes-adv'}
        />
        <ProjectCard
          image={Focus}
          title={t('project2.title')}
          description={t('project2.description')}
          stack={t('project2.technologies')}
          t={t}
          preview={'https://focus-two-beta.vercel.app/'}
          code={'https://github.com/madusfx/focus'}
        />
        <ProjectCard
          image={HabitSync}
          title={t('project3.title')}
          description={t('project3.description')}
          stack={t('project3.technologies')}
          t={t}
          preview={'https://github.com/madusfx/habitsync'}
          code={'https://github.com/madusfx/habitsync'}
        />
        <ProjectCard
          image={ToDoList}
          title={t('project4.title')}
          description={t('project4.description')}
          stack={t('project4.technologies')}
          t={t}
          preview={'https://to-do-list-gamma-opal.vercel.app/'}
          code={'https://github.com/madusfx/to-do-list'}
        />
      </div>
    </section>
  );
}
