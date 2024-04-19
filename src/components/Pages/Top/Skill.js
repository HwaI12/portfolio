// Skill.js
import React from 'react';

import pythonLogo from '../../../Images/icon_image/python_logo_icon_168886.png';
import jsLogo from '../../../Images/icon_image/javascript_plain_logo_icon_146454.png';
import tsLogo from '../../../Images/icon_image/typescript_original_logo_icon_146317.png';
import reactLogo from '../../../Images/icon_image/react_original_logo_icon_146374.png';
import vueLogo from '../../../Images/icon_image/file_type_vue_icon_130078.png';
import nextLogo from '../../../Images/icon_image/nextjs_icon_132160.png';
import nodeLogo from '../../../Images/icon_image/nodejs_plain_logo_icon_146409.png';
import postgresLogo from '../../../Images/icon_image/postgresql_original_logo_icon_146391.png';
import supabaseLogo from '../../../Images/icon_image/supabase_logo_icon_249481.png';
import htmlLogo from '../../../Images/icon_image/file_type_html_icon_130541.png';
import cssLogo from '../../../Images/icon_image/file_type_css_icon_130661.png';
import gitLogo from '../../../Images/icon_image/git_plain_logo_icon_146507.png';
import githubLogo from '../../../Images/icon_image/github-logo_icon-icons.com_73546.png';
import dockerLogo from '../../../Images/icon_image/docker_icon_146192.png';


const Skill = () => {
    const skillLogos = [
      { src: pythonLogo, alt: 'Python' },
      { src: jsLogo, alt: 'JavaScript' },
      { src: tsLogo, alt: 'TypeScript' },
      { src: reactLogo, alt: 'React' },
      { src: vueLogo, alt: 'Vue.js' },
      { src: nextLogo, alt: 'Next.js' },
      { src: nodeLogo, alt: 'Node.js' },
      { src: postgresLogo, alt: 'PostgreSQL' },
      { src: supabaseLogo, alt: 'Supabase' },
      { src: htmlLogo, alt: 'HTML' },
      { src: cssLogo, alt: 'CSS' },
      { src: gitLogo, alt: 'Git' },
      { src: githubLogo, alt: 'GitHub' },
      { src: dockerLogo, alt: 'Docker' },
    ];
  
    return (
      <section className="page-section" id="Skill">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Skill</h2>
            <div className="skill-image-list">
              <ul>
                {skillLogos.map((logo, index) => (
                  <li key={index}>
                    <img src={logo.src} alt={logo.alt} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Skill;
