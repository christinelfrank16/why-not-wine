# Why Not Wine

#### A React application for a wine tasting room, 15-Nov-2019

#### By **Christine Frank**

## Description

This is a React application which welcomes the user to Why Not Wine and provides a list of all available wines along with a suggested paired food item. The user can view a per glass or per bottle price, details on specific wine selections, and how much of wine is left for tastings.

## Setup/Installation Requirements

* Clone this repository to your desktop
* Install Node.js (if not already installed, see https://www.npmjs.com/get-npm for details on installing)
* Open a new Command Terminal and route to the root of the local repository
* Enter command 'npm install' into the Terminal
* Once above is complete, enter command 'npm start run' into the Terminal
* Open a new browser to the page: http://localhost:8080


## Known Bugs

None known at this time.

## Support and contact details

Find a bug?! Add an issue to the GitHub Repo. <br>
Repo: https://github.com/christinelfrank16/why-not-wine

Other Contact <br>
Email: christine.braun13@gmail.com <br>
LinkedIn: https://www.linkedin.com/in/christine-frank/

## Application Specifications
* As a user, I want to see a list of available wines for tastings and what container it is served from (bottle/keg). The list should show name, maker, price per tasting and/or bottle.
* As a user, I want to see how much wine is left in a container if the container type is a keg or remaining bottle count if the container type is a bottle
* As a user, I want to see wine description and details for selected wines. Including grape varietals, origin, tasting profile, and suggested menu item(s) for pairing.
* As a user, I want the types of wine to be easily distinguishable from each other (red, white)
* As a user, I want the 'remaining' values to change based on how much wine is left for tastings
* As a user, I want to see a food menu and pricing that is available seperately from the wine tasting list. The menu should include the name and price of the food item, with a short description.
* As an employee, I want to be able to modify the menu to add/remove/update food items
* As an employee, I want to fill out a form when I open a new bottle type or keg of wine, and have it added to the list
* As an employee, I want to be able to decrement the wine available in a keg when I sell a tasting. It should allow me to decrement by pre-set amounts (2oz, 4oz, 6oz) if the container type is a keg, or decrement by bottle count if the container type is a bottle.
* As an employee, I a wine listing to be removed automatically when there is no more available for tastings (keg is empty, no more bottles)
* As an employee, I want to see wines with less than 16oz tasting remaining if in a keg, or if only 2 bottles are left.
* As an employee, I want to see at least 1 recommended replacement wine (max 3) based on the wine profile per wine that is low

## Technologies Used

* React
    * react-router
    * JSX
* HTML
* CSS

### License

*This application is licensed under the MIT license*

Copyright (c) 2019 **Christine Frank**