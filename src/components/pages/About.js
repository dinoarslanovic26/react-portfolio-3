import React from 'react';
import Self from '../../images/headshot.jpeg'

export default function About() {
  return (
      <div className='page-wrap'>
        <img src={Self} alt='pic-of-me' className='pic'/>
        <h3 className='info'>Hello there, my name is Dino Arslanovic.</h3>
        <p>I'm a soon to be Full Stack Developer from good old Iowa. This is my own page where you can check out some of my work that I've done! I am a gradute from Iowa State University with a double major in Finance and BA & M.</p>
      </div>
  );
};
