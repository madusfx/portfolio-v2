import { SocialMedia } from '../SocialMedia';
import { MenuItem } from '../MenuItem';

export function Footer({ t }) {
  return (
    <footer className="mt-12 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center ">
        <h1 className="text-gradient text-2xl text-center">
          &#123;mariasundfeld&#125;
        </h1>
        <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          <a
            href="tel:5543998065320"
            className="text-customBlue dark:text-white hover:text-customPurple text-lg"
          >
            +55 4399806 5320
          </a>
          <a
            href="mailto:mariaesfreitas@gmail.com"
            className="text-customBlue dark:text-white hover:text-customPurple text-lg"
          >
            mariaesfreitas@gmail.com
          </a>
          <SocialMedia />
        </div>
      </div>
      <div className="mt-4 border"></div>
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-6">
          <MenuItem href="/" title={t('menu.home')} />
          <MenuItem href="/about" title={t('menu.about')} />
          <MenuItem href="/technologies" title={t('menu.techstack')} />
          <MenuItem href="#" title={t('menu.projects')} />
          <MenuItem href="#" title={t('menu.contact')} />
        </div>
        <p className="mt-4 sm:mt-0 font-bold text-customGray dark:text-white">
          {t('footer.credits')}{' '}
          <span className="text-gradient">Maria Sundfeld</span>
        </p>
      </div>
    </footer>
  );
}
