# Website for 'Dom Designs'

This project builds website for 'Dom Designs' - an interior design company <br>
with main office based in London UK and projects in Europe, US and Russia.



## Website URL

https://koleaby4.github.io/dom-designs



## Dom Designs' business goal

The main target we are trying to achieve by developing website for Dom Designs<br>
is to increasing online presence in order to increase customer base<br>
and provide information about their business to potential customers.



## Customers' needs

Company's website should allow potential customers, who are considering to involve interior designers into their projects, to:
   1. find the company's website online
   2. find out about range of services offered by Dom Designs and compare them with competitors
   3. see photos of completed projects
   4. read feedback from existing customers
   5. find contact details and enquire about engaging Dom Designs into project work



## Requirements

   1. Requirements have beed tracked [in issues part](https://github.com/koleaby4/dom-designs/issues?utf8=%E2%9C%93&q=is%3Aissue) of GitHub project page
   2. Non-functional requirements are marked [by NFR label](https://github.com/koleaby4/dom-designs/issues?utf8=%E2%9C%93&q=label%3ANFR)
   3. Accessibility stories are marled [by a11y label](https://github.com/koleaby4/dom-designs/issues?q=is%3Aissue+label%3Aa11y)
   4. Performance considerations
      1. Different resolution images used for mobile and desktops
      2. Until this is implemented - limit image size to 1MB
      3. Loading of javascript libraries is [deferred](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)



## Wireframes

Wireframes have been implemented using [balsamiq](https://balsamiq.com) <br>and attached to respective user stories.

Examples:
   - [Desktop Contacts Section](https://github.com/koleaby4/dom-designs/issues/19)
   - [Mobile Projects Section](https://github.com/koleaby4/dom-designs/issues/14)



## How we tested it

Functional tests have been carried out manually on regular basis using:
   - physicsl devices
      * Windows10 & Chrome desktop
      * Windows10 & IE11 desktop
      * Google Pixel 2 & Chrome mobile
   - virtual devices: Apple iPhone X via [SauceLabs](https://saucelabs.com)

Automated tests using [cypress](https://www.cypress.io) have been added to landing and services sections.
Further tests to be added in the future.

Two accessibility acanners were used to validate website:
   * [aXe](https://www.deque.com/axe)
   * [Lighthouse](https://developers.google.com/web/tools/lighthouse/)


## How to run cypress tests

   Prerequisites:
   1. clone project's source codes
   2. make sure you have [npm installed](https://www.npmjs.com/get-npm)

   To execute tests:
   1. in terminal navigate to project folder
   2. run `npm install`
   3. run
      1. `npm run cypress:run` to execute all tests in headless mode
      2. or `npm run cypress:open` to open cypress UI and cherry-pick which tests to run


## How website was published

Website had been published into GitHub pages by following instructions provided in<br>
[Configuring a publishing source for GitHub Pages](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages).

I truly believe it is a very clear set of instructions and trying to re-write them in my own words:
   1. won't make them any better
   2. will violate [KISS principles](https://en.wikipedia.org/wiki/KISS_principle)

I really hope I am not getting penilised for being honest here.



## Validations

1. HTML validations should pass
2. CSS validations should pass
3. Accessibility tests should pass
4. Should work on iPhone and Chrome



## List of technologies used

 1. IDE: [Visual Studio Code](https://code.visualstudio.com/)
 2. Web technologies:
    - [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_3)
 3. Styling libraries and components:
    - [normalize.css](https://necolas.github.io/normalize.css)
    - [Bootstrap](https://getbootstrap.com)
    - [Bootswatch](https://bootswatch.com)
    - [Google fonts](https://fonts.google.com)
    - [Fontawesome](https://fontawesome.com) || [flaticon](https://www.flaticon.com) || [ionicons](https://ionicons.com/)
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
   - blockquote formatting: https://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/
   - image overpay: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_fade
 4. favicons: https://www.34sp.com/blog/the-favicon-is-dead-long-live-the-favicon/