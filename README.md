# Website for 'Dom Designs'

This project builds website for 'Dom Designs' - an interior design company <br>
with main office based in London UK and projects in Europe, US and Russia.



## Website URL

https://koleaby4.github.io/dom-designs



## Dom Designs' business goal

The main target we are trying to achieve by developing website for Dom Designs<br>
is to increase online presence in order to increase customer base<br>
and provide information about their business to potential customers.



## Customers' needs

Company's website should allow potential customers, who consider involving interior designers into their projects, to:
   1. Find the company's website online ([Story 31](https://github.com/koleaby4/dom-designs/issues/31)
      and [Story 28](https://github.com/koleaby4/dom-designs/issues/28))
   2. Find out about range of services offered by Dom Designs and compare them with competitors
      ([Story 12](https://github.com/koleaby4/dom-designs/issues/12) and [Story 13](https://github.com/koleaby4/dom-designs/issues/13))
   3. See photos of completed projects ([Story 14](https://github.com/koleaby4/dom-designs/issues/14)
      and [Story 15](https://github.com/koleaby4/dom-designs/issues/15))
   4. Read feedback from existing customers ([Story 16](https://github.com/koleaby4/dom-designs/issues/16)
      and [Story 17](https://github.com/koleaby4/dom-designs/issues/17))
   5. Find contact details and enquire about engaging Dom Designs into project work ([Story 18](https://github.com/koleaby4/dom-designs/issues/18)
      and [Story 19](https://github.com/koleaby4/dom-designs/issues/19))



## User Stories

All user stories have been tracked using GitHub's [issues section](https://github.com/koleaby4/dom-designs/issues?utf8=%E2%9C%93&q=is%3Aissue),
which is a lightweight equivalent of [Jira](https://www.atlassian.com/software/jira), <br>
which is widely used for planning and tracking software development activities.

By default all tickets represent user stories.<br>
Example of a user story: [Build 'Testimonials' section for mobile view](https://github.com/koleaby4/dom-designs/issues/16)

Only tickets with 'bug' label, represent defects in code, which have been found during testing.
Example of a bug: [Contacts section is misaligned in IE11](https://github.com/koleaby4/dom-designs/issues/24)

Additional labels have been introduced to help categorising and filtering tasks:
   1. Non-functional requirements are marked [by NFR label](https://github.com/koleaby4/dom-designs/issues?utf8=%E2%9C%93&q=label%3ANFR)
   1. Accessibility stories are marked [by a11y label](https://github.com/koleaby4/dom-designs/issues?q=is%3Aissue+label%3Aa11y)

Performance considerations
      1. At the first stage of the project we want to [limit size of images to 300Kb](https://github.com/koleaby4/dom-designs/issues/30)
      2. In the future, we want different resolution images to be used for [mobile](https://github.com/koleaby4/dom-designs/issues/3)  and [desktops](https://github.com/koleaby4/dom-designs/issues/4)
      3. Loading of JavaScript libraries is [deferred](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)



## Wireframes

Wireframes have been implemented using [balsamiq](https://balsamiq.com) <br>and attached to respective user stories.
In this way developers would know exactly what they should implement, which picking up respective stories.

Examples:
   - [Desktop Contacts Section](https://github.com/koleaby4/dom-designs/issues/19)
   - [Mobile Projects Section](https://github.com/koleaby4/dom-designs/issues/14)



## How we tested it

Functional tests have been carried out manually on regular basis using:
   - Physical devices
      * Windows10 & Chrome desktop
      * Windows10 & IE11 desktop
      * Google Pixel 2 & Chrome mobile
   - Virtual devices: Apple iPhone X via [SauceLabs](https://saucelabs.com)

Automated tests using [cypress](https://www.cypress.io) have been added to landing and services sections.
We also created a task to [add more automated tests](https://github.com/koleaby4/dom-designs/issues/20) in the future.

Two accessibility scanners were used to validate website:
   * [aXe](https://www.deque.com/axe)
   * [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

Finally, a series of peer reviews helped identifying additional issues such as:
   * a number of orthographic mistakes
   * gaps in documentation
   * text alignment on extra small devices ([Issue 32](https://github.com/koleaby4/dom-designs/issues/32))



### Known issues

All known defects have been captured as GitHub issues and [marked by 'bug' label](https://github.com/koleaby4/dom-designs/issues?q=is%3Aissue+label%3Abug).<br>
Example: [Occasional JS error seen in console when loading project photos](https://github.com/koleaby4/dom-designs/issues/24).



## How to run cypress tests

   Prerequisites:
   1. Clone project's source codes
   2. Make sure you have [npm installed](https://www.npmjs.com/get-npm)

   To execute tests:
   1. In terminal navigate to project folder
   2. Run `npm install`
   3. Run
      1. `npm run cypress:run` to execute all tests in headless mode
      2. or `npm run cypress:open` to open cypress UI and cherry-pick which tests to run



## How website was published

Website had been published into GitHub pages by following instructions provided in<br>
[Configuring a publishing source for GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages).

I truly believe it is a very clear set of instructions and trying to re-write them in my own words:
   1. Won't make them any better
   2. Will violate [KISS principles](https://en.wikipedia.org/wiki/KISS_principle)



## How to open it locally

1. Navigate to project repository: https://github.com/koleaby4/dom-designs
2. Follow [GitHub cloning instructions](https://help.github.com/en/articles/cloning-a-repository) to download or clone source files
3. Navigate to the project folder and open `index.html` in your web browser



## Validations

1. HTML validations:
   - [User story](https://github.com/koleaby4/dom-designs/issues/21)
   - [Full report](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fkoleaby4.github.io%2Fdom-designs%2F)
2. CSS validations:
   - [User story](https://github.com/koleaby4/dom-designs/issues/22)
   - [Full report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fkoleaby4.github.io%2Fdom-designs&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)



## List of technologies used

 1. IDE: [Visual Studio Code](https://code.visualstudio.com/)
 2. Web technologies:
    - [HTML](https://en.wikipedia.org/wiki/HTML5)
    - [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
 3. Styling libraries and components:
    - [normalize.css](https://necolas.github.io/normalize.css)
    - [Bootstrap](https://getbootstrap.com)
    - [Bootswatch](https://bootswatch.com)
    - [Google fonts](https://fonts.google.com)
    - [Fontawesome](https://fontawesome.com)
    - [Fancybox](https://fancyapps.com)
 4. Source code versioning:
    - [Git](https://en.wikipedia.org/wiki/Git)
    - [GitHub](https://github.com)
 5. Validators:
    - [HTML validator](https://validator.w3.org/)
    - [CSS validator](http://jigsaw.w3.org/css-validator/)
 6. Testing tools:
    - [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
    - [aXe accessibility scanner](https://www.deque.com/axe)
    - [SauceLabs](https://saucelabs.com) for cross-platform & cross-browser compatibility
 7. Wireframes: [balsamiq](https://balsamiq.com)
 8. favicon generator: [favicon.io](https://favicon.io/favicon-generator)



## External resources / credits

1. Images: https://unsplash.com
2. Testimonials: https://camelliainteriors.co.uk/design-testimonials
3. Code snippets:
   - [Blockquote formatting](https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling)
   - [Image overpay](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade)
   - [Favicons](https://www.34sp.com/blog/the-favicon-is-dead-long-live-the-favicon)



## Acknowledgements

Special thank you to the people who guided and supported me during planning, execution and testing of this project:
   *  Anna Greaves
   *  Anthony O'Brien
   *  Marie Obradovic
   *  Simen Daehlin (mentor)


## Disclaimer

This project was created for educational purposes only.