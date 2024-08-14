import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProjectCard({
  image,
  title,
  description,
  stack,
  preview,
  code,
  t,
}) {
  return (
    <div className="mt-12 w-full sm:w-96 bg-white dark:bg-slate-900 shadow-2xl rounded-md p-4 flex flex-col">
      <div className="-mx-4 -mt-4">
        <img src={image} alt="" className="w-full h-auto rounded-t-md" />
      </div>
      <h1 className="mt-2 font-medium text-2xl text-customBlue dark:text-white">
        {title}
      </h1>
      <p className="mt-2 text-lg font-light text-customBlue dark:text-white flex-grow">
        {description}
      </p>
      <p className="mt-2 text-customBlue dark:text-white text-sm">
        <span className="font-bold text-base text-customBlue dark:text-white">
          {t('projectcard.techstack')}:
        </span>{' '}
        {stack}
      </p>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLink}
            className="h-5 w-5 text-customBlue dark:text-white"
          />
          <a
            href={preview}
            target="blank"
            className="underline dark:text-white"
          >
            {t('projectcard.preview')}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-5 w-5 text-customBlue dark:text-white"
          />
          <a href={code} target="blank" className="underline dark:text-white">
            {t('projectcard.code')}
          </a>
        </div>
      </div>
    </div>
  );
}
