import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rectangle from '../../../public/images/rectangle.png';

export function ProjectCard({
  image,
  title,
  description,
  stack,
  preview,
  code,
}) {
  return (
    <div className="mt-12 w-full sm:w-96 bg-white dark:bg-slate-900 shadow-2xl rounded-md p-4">
      <div className="-mx-4 -mt-4">
        <img src={rectangle} alt="" className="w-full h-auto rounded-t-md" />
      </div>
      <h1 className="mt-2 font-medium text-2xl text-customBlue dark:text-white">
        {title}
      </h1>
      <p className="mt-2 text-lg font-light text-customBlue dark:text-white">
        {description}
      </p>
      <p className="mt-2 text-customBlue dark:text-white text-sm">
        <span className="font-bold text-base text-customBlue dark:text-white">
          Tech stack:
        </span>{' '}
        {stack}
      </p>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLink}
            className="h-5 w-5 text-customBlue dark:text-white"
          />
          <a href={preview} className="underline dark:text-white">
            Live Preview
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faGithub}
            className="h-5 w-5 text-customBlue dark:text-white"
          />
          <a href={code} className="underline dark:text-white">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
