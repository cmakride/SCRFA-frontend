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
 Did a focused hour before had to go into work. Setup the Navbar component, home page component, Installed React Router Dom. Wrapped the App component in Router so NavLinks can work in the Navbar. Wrote first route in App.jsx for "/" which was set to the Home Component. Setup basic Navbar styling. Once get back will start to build out the Hamburger Functionality and Search bar drop down. 

 ### Monday 06/27/2022:
 Today was a productive day. Had to work this past weekend so today was the first "full day" focusing on the project. Started at about 11-12 with building and styling the NavBar as it would look when a user first arrives on the site. This took about an hour-hour and a half. Next goal was to get the Navbar functional and styled fully for Desktop. This included building the "hamburger" Icon to display a dropdown menu when clicked. This was done using React's "useState". The Dropdown menu was made into a component and there are additional components for each services category, Data&Research, Geography&Mapping etc... I did this to try and make it easier to understand and follow the code. This took about 1 hour and a half - 2 hours. It is 8:30 now, am going to take a small break and come back to try and complete the "hamburger" menu dropdown specifically when click on the dropdown the "hamburger" turns into a cross to represent closing the menu. I want to make the dropdown menu mobile responsive before the night ends.  Goals are icon change when the navbar menu is activated and mobile responsive for the dropdown menu. 
 Something to add to work on in the future: Edit the style in the mid-large range, fine tune the responsiveness, like how navbar is displayed in mobile and large screen, there are some tweaks would like to make in the medium to large range, especially with the font sizes.
 10:00pm got back from break and finished the icon toggle with the hamburger icon, and worked on the responsiveness of the navbar dropdown and the navbar. Got to tweak and experiment with some size changes in the media queries in tailwind. The navbar dropdown is styled using display grid (one column for mobile, 2 columns for desktop). In mobile screen size, the navbar drop down is showing a lot of vertical space for the first grid item. Tomorrow I want to fix this. In addition, noticed that the search button would be nice to have in the mobile/tablet version as it is currently hidden in mobile. Here is a list of what would like to accomplish tomorrow:
1.~~Fix Mobile Navbar dropdown first grid space issue~~
2.~~Implement the search button in mobile and tablet~~
3.~~Start the search bar dropdown menu~~

NavBar is almost to where would like it to be before I move onto the next components. If can finish 1. and 2. of the goals for tomorrow would be in a good place to have a complete model to show by friday as Wednesday have all day and Thursday have all day. Total time today was 6-8 hours.

Notes For Later: Things that I want to add, minor animations for the navbar, transition when click the "Hamburger" Icon. Also line animations when hover over the Service Names in the Navbar Drop Down Menu for example "Data&Research. 
After Today another thing if had more time would be to update and tweak the mobile and tablet responsiveness, set custom media queries in tailwind to deal with more size options


### Tuesday 06/28/2022:
Spent an hour and a half before work. Fixed the navbar dropdown menu grid cell size issue. Made the dimensions smaller for the first cell of that grid display. Next made the search button show on the mobile and tablet on the navbar. Noticed on the 320px there may be some pixelation occurring on the Logo, if have time will look into that. Looks like it just occurs on the 320px.
With the search bar planning on putting the form data in state, and will be updated as the user types in either search bar.
Got the search button to dispay a search bar when clicked. Have to do styling on the search bar to match the Guide. 
Finished off the morning doing media queries for the Searchbar Dropdown 1024px and 640px. 
Tomorrow first task will be to style the SearchBar Drop down.

### Wednesday 06/29/2022:
9:00am-10:20am: Did the styling for the search bar dropdown. In desktop the width is 30% in tablet it is 420px and on phone it is 320px on the smallest screen 320px will take up the entire width, which I think looks sufficient for that size. For time want to move on to other contents of the page, the navbar is complete. Moving onto banner and search. 

10:20am-11:30am built the banner with background image of the capitol building. With the text and a search bar. Made a component for the search bar. 

11:30am-12:00pm was spent doing Media Queries for the Banner on mobile and tablet

Notes to add: Would make distinct media queries built into tailwind for small 320px, 420px, 520, etc… Would also change the small medium and large fonts in tailwind to match the sizes in the Guide.

Came back at night started at
8:30pm-9:10pm started the footer component and got it to display at the bottom of the page, had to do a little research on an effective way to do that in tailwind. 

9:10pm-9:47pm Built out the footer component and styled it. Used grid and flex in tailwind

9:47pm-10:13pm Styled the footer component for mobile and tablet, took out the addresses/locations part on small and medium screens, only shows up on large screens, used mainly grid to do the media queries, 2 columns for mobile and tablet, 3 columns for large screen. Text Size Changes as well. Small on mobile/tablet, goes to large on desktop

### Thursday 06/30/2022:

2:00pm-3:00pm created the categories component and basic styling for mobile tablet and desktop. There is a hover effect on each card to scale up by 10%. Also want to look at the Nav bar font sizes noticed they seem a little off in Medium Size Screens. For time, going to move on to make the “Popular Services and Links” component. 

3:00pm-4:11pm created and styled the Popular Links Component with styling for desktop, tablet and mobile. 
Deployed the site today on netlify noticed on Safari the search bars do not match what show on Chrome or Firefox. 
Took an hour break

At about 5:00-6:15 started building out the Recent Updates Component and the Calendar Component. Within each component there is an additional component one named UpdateCard and another DateCard. This will make code more readable as have an array of objects representing the information to populate each RecentUpdate or each Calendar Date. Made a grid of two columns for desktop and tablet, then it goes to just one column on mobile. 

6:15-6:38 built out the Recently updated component and Calendar, to make it more efficient made a Header 2 component representing the styling for Header 2 on the guide. Also made a button component. These two components will be used in both the Recent Updates and Calendar. 

6:38-8:00 built and finished the Calendar Component this included the CalendarCard. Styled this for desktop, mobile, and tablet. 

### Friday 07/01/2022:
8:00am-8:10am Did some style updates to calendar and "exit navbar drop down button".
8:10am-8:50am built the "Back to Top Button" component, styled it as well.

### Future Updates Going Forward 07/01/2022:
1. Noticed the search bars when on Mobile specifically on safari the styling does not match the styling when building on desktop. Think it may have to do with Tailwind on mobile. I would look into this, and see if it can be fixed or make the styling better for those specifications  
2. I would keep tweaking and updating the styling and responsiveness of the app. Specifically the media queries for mobile. Would want to add a size in tailwind for extra small, medium small, and large small etc… 
3. Would look over the guide again to check the font sizes make sure they are correct
4. Would try and convert the logo into an SVG if possible
5. Add an animation for the dropdown navbar to slide down when the hamburger icon is clicked, this is an effect that can be done in tailwind
 


## Planning:
### 1. ~~Create App and Initialize Tailwind~~
### 2. ~~Add in all the fonts and colors into the class structure of the tailwind.config file~~
### 3. ~~Build the Nav Bar Component~~
   1. ~~Basic Nav Bar~~
   2. ~~Search and Hamburger Functionality working~~
   3. ~~Style and links of both search bar and Hamburger~~
### 4. ~~Build the Nav Bar Drop Down Menu~~
   1. ~~"Hamburger" Icon to activate the dropdown~~
   2. ~~"Cross" Icon to deactivate the dropdown menu~~
   3. ~~Make the Hamburger NavBar Drop Down Menu Mobile Responsive~~

### 5. ~~Mobile Responsive Nav Bar~~
### 6. ~~Build the Banner Component, Search and Links to Different Topics~~
### 7. ~~Mobile Responsive Banner~~
### 8. ~~Build Popular Services And Links Component~~
### 9. ~~Popular Services and Links Mobile Responsive~~
### 10. ~~Recent Updates and Calendar of Events Component~~
### 11. ~~Recent Updates and Calendar of Events Mobile Responsive~~
### 12. ~~Back To Top Button will automatically scroll up~~
### 13. ~~Footer~~
### 14. ~~Footer Mobile Responsive~~
