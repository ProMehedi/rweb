import React from 'react'
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import '../assets/css/Hero.css'
import Button from './Button'

const Hero = ({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart}) => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
          <div className="container">
            <div
              className="row home__hero-row"
              style={{ flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
            >
              <div className="col">
                <div className="home__hero-text-wrapper">
                  <div className="top-line">{topLine}</div>
                  <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                  <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                  <Link to="/sign-up">
                    <Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button>
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="home__hero-img-wrapper">
                  <img src={img} alt={alt} className="home__hero-img"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}

export default Hero
