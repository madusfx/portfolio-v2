import { FaHtml5, FaCss3, FaReact, FaNode, FaDocker } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiStyledcomponents,
  SiJest,
  SiCypress,
  SiPostgresql,
} from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrGraphQl } from 'react-icons/gr';
import { VscVscode } from 'react-icons/vsc';
import { BiLogoMongodb } from 'react-icons/bi';

export function TechStack({ t }) {
  return (
    <section className="flex flex-col items-center justify-center mt-12 p-6">
      <h1 className="font-bold text-4xl text-customBlue dark:text-white">
        {t('techstack.title')}
      </h1>
      <h2 className="mt-4 text-3xl text-customBlue dark:text-white">
        {t('techstack.subtitle')}
      </h2>
      <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-12">
        <FaHtml5 className="w-16 h-16" color="#E34F26" />
        <FaCss3 className="w-16 h-16" color="#1572B6" />
        <IoLogoJavascript className="w-16 h-16" color="#F7DF1E" />
        <SiTypescript className="w-16 h-16" color="#3178C6" />
        <FaReact className="w-16 h-16" color="#61DAFB" />
        <FaNode className="w-16 h-16" color="#339933" />
        <SiNextdotjs className="w-16 h-16" color="#000000" />
        <SiNestjs className="w-16 h-16" color="#E0234E" />
        <RiTailwindCssFill className="w-16 h-16" color="#38B2AC" />
        <SiStyledcomponents className="w-16 h-16" color="#DB7093" />
        <GrGraphQl className="w-16 h-16" color="#E10098" />
        <SiJest className="w-16 h-16" color="#99424F" />
        <SiCypress className="w-16 h-16" color="#17202C" />
        <BiLogoMongodb className="w-16 h-16" color="#47A248" />
        <SiPostgresql className="w-16 h-16" color="#336791" />
        <FaDocker className="w-16 h-16" color="#2496ED" />
        <VscVscode className="w-16 h-16" color="#007ACC" />
      </div>
    </section>
  );
}
