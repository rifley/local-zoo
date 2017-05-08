# Zoo Knew?

### By _Riley Watts_ 05/07/2017

## Description

"Zoo knew?" is an animal tracking web-based application that allows Zoo employees to manage information associated with each animal. Users can add and edit Animals

## Installation

* In your terminal, run `$ git clone https://github.com/rifley/local-zoo.git`
* navigate to the local-zoo repository
* Once inside the repository, run `$ npm install` followed by `$ bower install`
* When each of those are done you can run `$ gulp build && gulp serve` which should build and open the web-app in your default browswer.
* If it doesn't automatically open click this link [http://localhost:3000](http://localhost:3000)


## Planning

1. Integration
  * animal.model.ts for animal object constructor
  * new-animal.component.ts - contains new animal form
  * animal-list.component.ts - shows list of all current animals
  * age.pipe.ts - filters animals based on age
  * edit-animal.component.ts - contains edit form, two way binding

2. UX/UI
  * high contrast between text/background, large font, alt tags for high accessibility to users
  * style fits zoo theme

3. Polish
  * spend more time on UX/UI to ensure readability/accessibility
  * add in further exploration elements

## License
This software is licensed under the MIT license. Copyright (c) 2017 Riley Watts
