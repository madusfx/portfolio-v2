import React from 'react';
import { ExperienceCard, Footer, Header } from '../components';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCalendar,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

function About() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <main>
      <Header
        theme={theme}
        setTheme={setTheme}
        changeLanguage={changeLanguage}
        language={i18n.language}
        t={t}
      />
      <section className="flex flex-col mt-16 px-12 w=full sm:w-2/3">
        <h1 className="text-5xl text-customBlue dark:text-white font-bold">
          {t('about.title1')}
        </h1>
        <p className="mt-6 text-customGray dark:text-white text-lg">
          {t('about.description')}
        </p>
        <h1 className="mt-12 text-5xl text-customBlue dark:text-white font-bold">
          {t('about.title2')}
        </h1>
        <ExperienceCard
          title={t('about.experience1.title')}
          company={t('about.experience1.company')}
          location={t('about.experience1.location')}
          time={t('about.experience1.time')}
          duration={t('about.experience1.duration')}
        />
        <div className="mt-6 border w-full bg-customGray"></div>
        <ExperienceCard
          title={t('about.experience2.title')}
          company={t('about.experience2.company')}
          location={t('about.experience2.location')}
          time={t('about.experience2.time')}
          duration={t('about.experience2.duration')}
        />
        <div className="mt-6 border w-full bg-customGray"></div>
        <h1 className="mt-12 text-5xl text-customBlue dark:text-white font-bold">
          {t('about.title3')}
        </h1>
        <div className="mt-12 flex justify-between">
          <div>
            <p className="text-xl text-customGray dark:text-white">
              {t('about.education.title')}
            </p>
            <div className="flex gap-6">
              <div className="mt-4 flex gap-1">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="h-4 w-4 text-customGray dark:text-white"
                />
                <p className="text-xs text-customGray dark:text-white font-medium">
                  {t('about.education.university')}
                </p>
              </div>
              <div className="mt-4 flex gap-1">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-4 w-4 text-customGray dark:text-white"
                />
                <p className="text-xs text-customGray dark:text-white font-medium">
                  {t('about.education.location')}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="bg-customPurple rounded-md p-2 inline-flex text-white">
              {t('about.education.status')}
            </p>
            <div className="mt-4 flex items-center gap-1">
              <FontAwesomeIcon
                icon={faCalendar}
                className="h-4 w-4 text-customGray dark:text-white"
              />
              <p className="text-xs text-customGray dark:text-white font-medium">
                {t('about.education.duration')}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 border w-full bg-customGray"></div>
      </section>
      <Footer t={t} />
    </main>
  );
}

export default About;
