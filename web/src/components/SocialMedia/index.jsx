import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      <a href="https://www.linkedin.com/in/mariaesfreitas/" target="blank">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-customGray dark:text-white w-7 h-7 hover:text-customPink"
          />
        </div>
      </a>
      <a href="https://github.com/madusfx" target="blank">
        <div className="flex items-center justify-center bg-customGray dark:bg-white rounded-full w-7 h-7 hover:bg-customPink">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-white dark:text-slate-900 w-4 h-4"
          />
        </div>
      </a>
    </div>
  );
}
