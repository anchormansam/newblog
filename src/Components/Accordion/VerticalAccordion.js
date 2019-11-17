import React from 'react';
import { isTemplateElement } from '@babel/types';



function VerticalAccordion() {

  const LinkTitles = [
    {
      iconImages: 
        '',
      websiteTitle:
        '',
      actualLink:
        '',
      locationTaken:
        ''
    },
   
  ]
  const LinkSlides = LinkTitles.map((item, idx) => {

    return (


      <li className="tabs" id={idx} key={idx}>
        <div className={item.iconImages}>
          <a href={item.websiteTitle}>
            {item.actualLink}
          </a>
        </div>
        <div className="paragraph">
          <p>
            {item.locationTaken}
          </p>
        </div>
      </li>

    )
  });

  return (
    <div className="container">
      <ul className="accordion">
        {LinkSlides}
      </ul>
    </div>
  );
}


export default VerticalAccordion;