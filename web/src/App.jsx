import { Header, Projects, TechStack } from './components';
import mariasundfeld from '../public/images/mariasundfeld-image.jpg';

function App() {
  return (
    <main>
      <Header />
      <section
        id="about"
        className="flex flex-col sm:flex-row justify-between items-center mt-12 p-12"
      >
        <div>
          <h1 className="font-bold text-4xl text-customBlue">
            Hi,
            <br /> my name is
            <br />
            <span className="text-gradient">Maria Eduarda Sundfeld</span>
            <br />I build things for web.
          </h1>
        </div>
        <div className="mt-12 sm:mt-0 rounded-full bg-customGradient w-72 h-72 p-2 overflow-hidden">
          <img
            src={mariasundfeld}
            alt="Foto de Maria Eduarda Sundfeld"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </section>
      <TechStack />
      <Projects />
    </main>
  );
}

export default App;
