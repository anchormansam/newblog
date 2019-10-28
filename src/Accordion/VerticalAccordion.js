import React from 'react';
import { isTemplateElement } from '@babel/types';


function VerticalAccordion() {

  const LinkTitles = [
    {
      website:
        'insert link to actual page for about me',
      siteName:
        'blog site aboutme',
      description:
        'pages about me'
    },
    {
      website:
        'https://www.linkedin.com/in/samuel-wheeling-01121513a/',
      siteName:
        'Linkedin',
      description:
        'By Clicking this link you agree to checkout my Linkedin Profile'
    },
    {
      website:
        'https://github.com/anchormansam',
      siteName:
        'Github',
      description:
        'By Clicking this link you agree to checkout my Github Profile'
    },
  ]
  const LinkSlides = LinkTitles.map((item, idx) => {

    return (

      <body>
        <div class="container">
          <ul class="accordion">
            <li class="tabs">
              <div class="social-links twitter-icon">
                <a href="weblink={item.website}" >
                  siteName={item.siteName}
                </a>
              </div>
              <div class="paragraph">
                <p>
                  description={item.description}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </body>
    )
  });

  return (
    <div id="accordionSlides">
      {LinkSlides}
    </div>
  );
}


export default VerticalAccordion;