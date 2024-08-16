import React from 'react';
import { Footer, Header } from '../components';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactPage() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Header
        theme={theme}
        setTheme={setTheme}
        changeLanguage={changeLanguage}
        language={i18n.language}
        t={t}
      />
      <section className="flex-grow flex flex-col justify-center items-center p-8">
        <h1 className='text-5xl text-customBlue dark:text-white font-bold text-center'>{t('contact.title')}</h1>
        <p className='mt-4 text-2xl text-customBlue dark:text-white font-medium text-center'>{t('contact.subtitle')}</p>
        <div className='flex flex-col sm:flex-row gap-16 justify-center mt-16'>
          <a href='mailto:mariaesfreitas@gmail.com' target='blank' className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faEnvelope} className='w-8 h-8 text-customBlue dark:text-white' />
            <p className='mt-2 text-xl text-customBlue dark:text-white'>mariaesfreitas@gmail.com</p>
          </a>
          <a href='phone:5543998065320' target='blank' className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faPhone} className='w-8 h-8 text-customBlue dark:text-white' />
            <p className='mt-2 text-xl text-customBlue dark:text-white'>+55 (43) 99806 5320</p>
          </a>
          <a href='https://www.linkedin.com/in/mariaesfreitas/' target='blank' className='flex flex-col items-center'>
            <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 text-customBlue dark:text-white' />
            <p className='mt-2 text-xl text-customBlue dark:text-white'>mariaesfreitas</p>
          </a>
        </div>
      </section>
      <Footer t={t} />
    </main>
  );
}

export default ContactPage;
