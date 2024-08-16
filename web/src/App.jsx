import { Footer, Header, Projects, TechStack } from './components';
import { useTheme } from './hooks/useTheme';
import { useTranslation } from 'react-i18next';

function App() {
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

      <section
        id="about"
        className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-32 items-center mt-12 p-12"
      >
        <div>
          <h1 className="font-bold text-4xl text-customBlue dark:text-white">
            {t('home.hello')}
            <br />
            <span className="text-gradient">Maria Eduarda Sundfeld</span>
            <br />
            {t('home.description')}
          </h1>
        </div>
        <div className="mt-12 sm:mt-0 rounded-full bg-customGradient w-72 h-72 p-2 overflow-hidden">
          <img
            src="/images/mariasundfeld-image.jpg"
            draggable={false}
            alt="Foto de Maria Eduarda Sundfeld"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </section>
      <TechStack t={t} />
      <Projects t={t} />
      <Footer t={t} />
    </main>
  );
}

export default App;
