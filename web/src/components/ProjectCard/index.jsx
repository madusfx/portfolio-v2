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
    <div className="mt-12 w-96 bg-white shadow-2xl rounded-md p-4">
      <div className="-mx-4 -mt-4">
        <img src={rectangle} alt="" className="w-full h-auto rounded-t-md" />
      </div>
      <h1 className="mt-2 font-medium text-2xl">{title}</h1>
      <p className="mt-2 text-lg font-light">{description}</p>
      <p className="mt-2 text-customBlue text-sm">
        <span className="font-bold text-base">Tech stack:</span> {stack}
      </p>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLink} className="h-5 w-5" />
          <a href={preview} className="underline">
            Live Preview
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
          <a href={code} className="underline">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
