import { SocialMedia } from '../SocialMedia';
import { MenuItem } from '../MenuItem';

export function Footer() {
  return (
    <footer className="mt-12 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="text-gradient text-2xl text-center">
          &#123;mariasundfeld&#125;
        </h1>
        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <a
            href="tel:5543998065320"
            className="text-customBlue hover:text-customPurple text-lg"
          >
            +55 4399806 5320
          </a>
          <a
            href="mailto:mariaesfreitas@gmail.com"
            className="text-customBlue hover:text-customPurple text-lg"
          >
            mariaesfreitas@gmail.com
          </a>
          <SocialMedia />
        </div>
      </div>
      <div className="mt-4 border"></div>
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-6">
          <MenuItem title={'Home'} />
          <MenuItem title={'About'} />
          <MenuItem title={'Technologies'} />
          <MenuItem title={'Projects'} />
          <MenuItem title={'Contact'} />
        </div>
        <p className="mt-4 sm:mt-0 font-bold text-customGray">
          Designed and built by{' '}
          <span className="text-gradient">Maria Sundfeld</span>
        </p>
      </div>
    </footer>
  );
}
