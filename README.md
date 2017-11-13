# PokeDex
Welcome to my first ever PokeDex! This is a simple single page site where users can find and explore content from the Pokemon API, https://pokeapi.co/. I spent ~ 6 hours on this project. Below you will find npm commands to run the code locally, a link to the deployed site on Heroku and a link to the repo on GitHub. 

### Delivery:
* How to access the code for the project:
    - clone pulic GitHub repo
    - cd into the directory
    - run [npm start] in your terminal
    - app will run on localhost:3000
* Github repository (public) preferred though not required: 
    - https://github.com/amandakoster/blink-api
* URL to view a live version of the site:
    - https://amanda-pokedex.herokuapp.com/

### Process
* Build generic scaffold: npm create-react-app
* Create GH repo, push scaffold to GH repo
* Organize scope: put scope into .md file and break out project into tasks
* Pseudo code the tasks into the scaffolding
* Create anticipated files for component that will build the app, pseudo code for each component
* Read about how the API works
* 1st API call: added search form
* Search for 1 poke, show prop (abilities)
* 2nd API call for all poke (limit = ~20)
* Mapped through the data
* Rendered poke on the page
* Styled a bit
* Deploy to firebase or gh pages: didn't work because node_modules are in .gitignore
* Deployed to Heroku

### Bonus tasks:
* Make the interface responsive: DONE
* Flourishes or niceties in the design (e.g. animations for search results) : minor - search bar glows blue
* Detailed modal popup for an item
* A mind for accessibility: DONE (alt text for images, Contrast Ratio of 16.26:1, appropriate html tags)
* Include a test plan and user tests: minor, there is a scaffolding for testing

### Using one of these APIs:
* implement the provided wireframe layout, 
* displaying the data from the API and
* allowing users to use the search bar to search or filter content.
* You can title your application
* select whatever background image you feel fits best for your application.
* This is your application, and design touches or flourishes are encouraged.

### With more time I would add the following: 
##### Functionality:
* refactor 2 API calls into 1 for speed.
* refactor App.js functionality into separate components. There is a lot of functionality in the App.js, not allowing for reusable components which is a benefit of React.js
* incorporate provided Pokeman API library, may have saved time.
* keep playing with this!

##### Features:
* List 3 characteristics for each Pokemon 'card'
* Add ways to filter these 3 characteristics in the header
* Upon searching a Pokemon, have an image of the Pokemon appear along with its abilities or other characteristics
* Clickable, animated 'cards' that link to a detail page for each Pokemon
* Modify the design to accommodate this additional data

