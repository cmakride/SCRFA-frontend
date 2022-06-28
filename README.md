# State Website Frontend Challenge:

## Worklog: 
### Thursday 06/23/2022:
Project Assigned, worked for about 1 hour 20min, created the react app, configured tailwind, added the fonts and their font-weights, just two Open Sans and Roboto Sans. The font weights shown on the PDF look a little "off" like Open Sans Bold looks like Open Sans SemiBold on Google fonts, so will have to see the Fonts Displayed to see, right now just added <br />
Open Sans:<br /> 
Light:300, Medium:400, and SemiBold:600<br />
Roboto Sans:<br />
Regular:400
Medium: 500<br />

 Added the Color Palette, for time sake, added in each color depending on the row number, for example in tailwind text-row3-5 would be the third row and 5th color to the right so based on the pdf file this would be the red color #E9261D

 ### Friday 06/24/2022:
 Did a focused hour before had to go into work. Setup the Navbar component, home page component, Installed React Router Dom. Wrapped the App component in Router so NavLinks can work in the Navbar. Wrote first route in App.jsx for "/" which was set to the <Home/> Component. Setup basic Navbar styling. Once get back will start to build out the Hamburger Functionality and Search bar drop down. 

 ### Monday 06/27/2022:
 Things that I want to add, minor animations for the navbar, transition when click the "Hamburger" Icon. Also line animations when hover over the Service Names in the Navbar Drop Down Menu for example "Data&Research. 

 Today was a productive day. Had to work Friday-Sat-Sunday so did not get as much time as I wanted to work on this project. Started working today at around 11-12. Started with building and styling the NavBar as it would look when a user first arrives on the site so no functionality yet. This was done using tailwind and taking advantage of display: flex. This took about an hour-hour and a half. Next goal was to get the Navbar functional and styled fully for Desktop. This included building the "hamburger" Icon to display a dropdown menu when clicked. This was done using React's "useState" to set a variable named isNavOpen to true when the "Hamburger" icon is clicked. When True, this will set the <div> of the dropdown menu to display:block and display:none when isNavOpen is false. The Dropdown menu was made into a component and within this component there are components for each services category, Data&Research, Geography&Mapping etc... I did this to try and make it easier to understand and follow the code. It is about 8:30 now, am going to take a small break and come back to try and complete the "hamburger" menu dropdown specifically when click on the dropdown the "hamburger" turns into a cross to represent closing the menu. I want to make the dropdown menu mobile responsive before the night ends. So goals are icon change when the navbar menu is activated and mobile responsive for the dropdown menu. Tomorrow I will start the search bar functionality in the NavBar 
 Something to add to work on in the future: Edit the style in the mid-large range, fine tune the responsiveness, like how navbar and navbardrop down is looking in mobile and large, there is some tweaks would like to make in the medium to large range, especially with the font size perhaps of the logo and title, along with the nav links. 


## Planning:
### 1. ~~Create App and Initialize Tailwind~~
### 2. ~~Add in all the fonts and colors into the class structure of the tailwind.config file~~
### 3. ~~Build the Nav Bar Component~~
   1. ~~Basic Nav Bar~~
   2. Search and Hamburger Functionality working
   3. Style and links of both search bar and Hamburger
### 4. Build the Nav Bar Drop Down Menu
   1. "Hamburger" Icon to activate the dropdown
   2. "Cross" Icon to deactivate the dropdown menu
   3. Make the Hamburger NavBar Drop Down Menu Mobile Responsive

### 5. Mobile Responsive Nav Bar
### 6. Build the Banner Component, Search and Links to Different Topics
### 7. Mobile Responsive Banner
### 8. Build Popular Services And Links Component
### 9. Popular Services and Links Mobile Responsive
### 10. Recent Updates and Calendar of Events Component
### 11. Recent Updates and Calendar of Events Mobile Responsive
### 12. Back To Top Button will automatically scroll up
### 13. Footer
### 14. Footer Mobile Responsive# SCRFA-frontend
