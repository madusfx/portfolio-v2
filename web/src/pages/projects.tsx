import React from 'react';
import { Footer, Header, Projects } from '../components';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

function ProjectsPage() {
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
      <section className="flex-grow">
        <Projects t={t} />
      </section>
      <Footer t={t} />
    </main>
  );
}

export default ProjectsPage;
