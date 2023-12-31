import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className='container'>
        <div className='hero__wrapper'>
          <div className='left'>
            <h1 className='hero__heading'>Lahir untuk Respublica</h1>
            <ParagraphText className='hero__text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptatibus quia quibusdam quos cumque, voluptates,
              quod quae doloribus.
            </ParagraphText>
            <Button to='/blogs' tag={Link} className='hero__button'>
              Explore Blogs
            </Button>
          </div>
          <div className='right'>
            <StaticImage
              className='hero__image'
              src='../../images/Hero.webp'
              alt='vr guy'
              placeholder='blurred'
              objectPosition='50% 30%'
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
