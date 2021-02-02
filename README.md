# **Holiday Planner** 
<img src="/assets/readmeAssets/holiday_planer_ami_image.jpg">

## Index

- [Introduction](#Introduction)
- [Project Motivation](#Project_Motivation)
- [UX](#UX) 
    - [User Stories](#User_Stories)
    - [Wireframes](#Wireframes)
- [Features](#Features)
    - [Existing Features](#Existing_Features)
    - [Future Enhancements](#Future_Enhancements)
- [Technologies Used](#Technologies_Used)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)
    - [Content](#Content)
    - [Media](#Media)
    - [Acknowledgements](#Acknowledgements)

- - - -
## **<ins>Introduction</ins>**
This is my milestone 2 project for the Fullstack Web Developer course with the [Codeinistitute](https://codeinstitute.net/). The project is not complete 
due to time constraints and the need to deploy the final version earlier than expected. I was working towards a date of the 
14th of March on the Schedule Generator but the due date is the 05th of February. None the less the site is functional and 
has 90+% of the functions and layout envisaged at concept stage. As with my prior project I have tried to use a Agile methodology on the project and 
as such this is considered a deployment of the Minimum Viable Product (MVP), the site has the required functionality but has other features that would be 
included in subsequent deployments. I will outline in the [Future Enhancements](#Future_Enhancements) sections details of the additional features 
that will be considered for future iterations.

## **<ins>Project_Motivation</ins>**
The main driver behind the development of this site was to create a holiday planner, that would become a trusted site for reviews and information on 
sites around Ireland for staycations. The site is limited Ireland, but the scope could be expanded when Covid-19 travel restrictions are eased and 
travel abroad to complete review is again possible. The reviews are individual and only added by the site owners so all review can be  stood over by the
site owner, with no anonymous  review and information included.

As part of the design and deployment, I wanted to include two important features, the first being the ability to quickly add new locations without the needing to 
recode any of the page and the second was to make the interactive map section user friendly and intuitive to use. 
The ability to add new locations quickly was achieved by placing all the location data in one file, creating a new entry for a location the site picks up the new location on the next
load of the page. As all the information is dynamically pick up from this file no further updates are needed. 
To make site easy to use, the user required inputs are presented sequentially to make it easy to follow and let the user know what information the need to provide. The menus are populated 
from the locations file so only contain options when there is supporting data in the locations file. 

<img src="/assets/readmeAssets/menuView.jpg">

Add descriptive text here
  Bullet if you need them
  - Bullet 1
  - Bullet 2
  - Bullet 3

## **<ins>UX</ins>**
Once the concept or the site was developed, as part of the UX design phase it I decided to make the site a one page site with distinctive containers for each 
section. The site would have 5 major components,

- Header
- Introduction
- Destinations Information. 
- Interactive Map
- Form
- Footer

Bootstrap was chosen as the main library for the major design elements, it provides the responsiveness required to ensure the site looks good and works well 
across all device sizes. On top of bootstrap, custom CSS was used to provide a unique look an feel and set the site apart. 

**Header**
The header consists of a nav bar, locked to the top of the screen as the page is long the user always has access to the nav bar to jump to the desired 
location. Under that I included a hero image with crisp white text to capture the users attention. 

**Introduction**
Consists of a short introduction to the site, some information on staycations in Ireland and a video that gives the users some media content to show case 
Ireland and holiday locations. The video is embedded as I don’t want users to leave the page in such and early stage. I decided that in this section, the 
information would be limited to generate interested but ensure the user does not get over whelmed with information and leave the site before exploring further down the page. 
 
**Destination**
To provide some more value to the users, I have included a section with some cards on major destinations and locations in Ireland. The idea here was to provide 
some information to the user if they are still deciding on the type of holiday or location within Ireland. 

**Interactive Map**
The map section is the main part of the site and as I have described above in the introduction section, this map is driven by a file with the reviewed locations 
and the menus are dynamic in such that they only populate type, province & county where information to support the search is contain in the file. The file will continue 
to grow with locations. The design of the menus for the map section was set-up to guide the user through the required selections, the menus are show when the user 
makes the previous selection and when all selections are made the button to render the map is shown. This was a design feature to make it institutive for the user. Once 
the map is rendered the user can click on the map pin to provide additional useful information the selected site as well as the review information that is the main content for this site.

**Form**
The form section, was included to allow site users to submit locations that they would like to have reviewed and added to the site. The thinking behind the including the 
form was, two fold, first get location information to grow the site location data quickly and second, allow the user have input to the site and get invested in the sites success. 


### <ins>User_Stories</ins>

**Site User;**
- I want to find somewhere in Ireland, where I can go for my holidays. 
- I want to get additional review information on the accommodation location, outside the generic google review.
- I want to quickly link to the site of a selected accommodation if I want to book or find more information.
- A stie where I can search on a wide variety of accommodation types and then narrow my search down.

**Site Owner;**
- As the site owner, I want to be able to add new locations quickly and easily without needing to update the code. 
- I want to get input from users, where do they suggest that we review and include in the site.
- Become a trusted source for reviews of accommodation


### <ins>Wireframes</ins>
Add links to any wireframes created
| Title | Link to Wirefram (pdf) |
| --- | --- |
| Title 1 | https://link |
| Title 2 | https://link |
| Title 3 | https://link |

[Index](#Index)
- - - -
## **<ins>Features</ins>**
Add descriptive text here
### <ins>Existing_Features</ins>
- Add descriptive text here

**Responsiveness;**
 - Add descriptive text here

### <ins>Future_Enhancements</ins>
Add descriptive text here
 - Add descriptive text heres. 

[Index](#Index)
- - - -
## <ins>Technologies_Used</ins>
**Balsamiq**    https://balsamiq.com/wireframes/
- Basamiq was used in the design phase to create wireframes of the proposed web site.

**Github** https://github.com/
- Github is the repository used for version control & storage of the project.
- Github pages was used for the deployment of the site.

**Gitpod** https://www.gitpod.io/
- Gitpod was the IDE used for the development throughout the project.

**Bootstrap** https://getbootstrap.com/
- Bootstrap library was chosen for the initial layout & to provide responsiveness across devices sizes, layout was customised on top of bootstrap.

**Google Fonts** https://fonts.google.com/
- Google fonts provided fonts for the project (Roboto Condensed & Serrat)

**Font Awesome** https://fontawesome.com/
- Icons used through the web site are sourced from Font Awesome

**W3C Validation Service** https://validator.w3.org/
- HTML & CSS code was checked on W3C validator at the end of the project.

**HTML Formatter** https://webformatter.com/html
- HTML code was run through HTML formatter to fix any indentation issues.

**ami.responsivedesign** http://ami.responsivedesign.is/#
- The project was tested on ami.responsivedesign
- image used in readme file was taken from ami.responsivedesign site


[Index](#Index)
- - - -
## <ins>Testing</ins>
The project was developed in a DevOps type process. During the development of the website, there were frequent deployments and ongoing testing and fixing of issues. Issues that were found were logged in Github and fixes were deployed on the next development cycle
Automated testing was complete on all html & CSS files in W3C code checker and for responsiveness on mi.responsivedesig.

In addition, final testing was complete at the end of the project with the results in the linked manual testing excel file. 
| File Name | Location |
| --- | --- |
| Athboy Website (MS1) Testing Checklist | https://app.box.com/s/hptfyxe9syfs8x1is1entqxzu51beunv |

[Index](#Index)
- - - -

## <ins>Deployment</ins>
The project was developed using GitHub as the repository and I chose to deploy the live project on GitHub Pages,
The live site can be accessed at https://meltaylor78.github.io/holiday_planner/

**Important Note**
The main data for the locations and data that drives the interactive map are contain in the location.js file.
This file drives the menus for the map. Ensure this file remains correctlyt linked if you deploy the site or make a local copy of the repo.

**To complete the deployment;**
- From the Github repository 
- Navigate to the settings tab on the top of the repository page
- Scroll down to the section GitHub Pages. 
- In this GitHub Pages section, complete the deployment selection;
- Select the Branch to deploy from the first menu
    -	Select the folder from the second menu
    -	Save the settings
Further updates can be made, such as custom domain and enforce HTTPS. I did not opt for a custom domain but did select to enforce HTTPS 
for the additional security it offers. 

GitHub also provides the option to clone the repository, clone allows you to make a local copy of the repository on your machine. 
You can complete this using the code drop down menu to get details to clone the repositor. You can find more information on how to clone a 
repository on GitHub Docs [Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


[Index](#Index)
- - - -

## <ins>Credits</ins>
The developers of the Athboy community hub would like to thanks all those who contributed directly to the development of the site or through providing media and content for the site.
- - - -

| Details | Site | Link |
| --- | --- | --- |
| Historical Content | Athboy Wikipedia | https://en.wikipedia.org/wiki/Athboy |
| Historical Content | Athboy 100 | https://athboy100.com/ |
| Event Description | Puca Festival | https://www.pucafestival.com/ |
| Event Description | Blue Jean Festival | http://bluejeanfest.com/ |

[Index](#Index)
- - - -

### <ins>Media</ins>

| Details | Site | Link |
| --- | --- | --- |
| Google Maps | Google | https://www.google.ie/maps |
| Historical Images | Athboy 100 | https://athboy100.com/ |
| Images | Athboy Parish | https://www.athboyparish.ie/ |
| Video - Rambling Around Athboy | Rambling Girl - YouTube | https://www.youtube.com/watch?v=NPB_WZzZwJs&feature=youtu.be |
| Video - Athboy Co. Meath Ireland. | Nick Eogans Adventures - YouTube | https://www.youtube.com/watch?v=iXYbLqi1xWU&feature=youtu.be |
| Image | Puca Festival | https://www.pucafestival.com/ |
| Image | Blue Jean Festival | http://bluejeanfest.com/ |

[Index](#Index)
- - - -

### <ins>Acknowledgements</ins>
| Name | Acknowledgement | Acknowledgement |
| --- | --- | --- |
| Caroline Taylor | Initial Idea | Provide the initial idea for the project and help develop the wireframes of what would be included. |
| Caroline Taylor | Content Provider | Provided images and content for the site. |
| Caroline Taylor | User Acceptance Testing | Helped with the testing of the site during the development and final user acceptance testing. |
| Rahul Lakhanpal | Project Mentor | Rahul provided me with the guidance to complete the project and advise on areas to better meet the project brief. |
| Athboy Community | Content | The sports clubs, activity groups for all the content and information to include on the site. |

[Index](#Index)
- - - -