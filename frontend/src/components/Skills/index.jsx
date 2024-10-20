import React from 'react';
import './styles.scss'; // Импортируем стили
import skills from '../../db/Skills.json';
import { context } from "../../store"
import { useState, useEffect, useContext } from 'react';
import { useTranslation } from "react-i18next"
import AnimatedComponent from '../AnimationComp';
import BgAnimation from '../bg_anim/BgAnimation.jsx'

function Skills() {
  const { t, i18n: { changeLanguage } } = useTranslation();

  return (
    <div className="skills-container" id="skills">
      <BgAnimation/>
      <div className="skills-wrapper">
        <h1 className="skills-title">{t("skills.title")}</h1>
        <p className="skills-desc">
          {t("skills.description")}
        </p>
        <div className="skills-list">
          {skills.map((skill) => (
            <AnimatedComponent>
              <div className="skill-card" key={skill.title}>
                <h2 className="skill-card-title">{skill.title}</h2>
                <div className="skill-items">
                  {skill.skills.map((item) => (
                    <div className="skill-item" key={item.name}>
                      <img className="skill-item-image" src={item.image} alt={item.name} />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedComponent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
