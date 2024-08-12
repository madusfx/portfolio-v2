import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      <a href="">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-customGray w-7 h-7 hover:text-customPink"
          />
        </div>
      </a>
      <a href="">
        <div className="flex items-center justify-center bg-customGray rounded-full w-7 h-7 hover:bg-customPink">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-white w-4 h-4" />
        </div>
      </a>
    </div>
  );
}
