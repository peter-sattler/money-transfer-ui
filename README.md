# Money Transfer Web UI
[![NYU SPS Badge](http://basno.com/5mt19i5p.png)](http://basno.com/5mt19i5p)

# Background

This web user interface (UI) was created for and submitted as the final project in JAVASCRIPT - FULL STACK WEB DEVELOPMENT. This course was held at New York University's School of Professional Studies (NYU SPS) during the Summer of 2019. This project concentrates on the basics; intentionally avoiding heavy Javascript frameworks like JQuery.

# Project Requirements

Design and develop a web project on any subject you wish, providing that the content of the project includes dynamic DHTML effects/behavior, event handling, at least one form with form validation, and cookies or web storage. 

## Getting Started

These instructions will get you a copy of this project up and running on your local machine: 

1. Download and install the latest LTS version of [Node.js](https://nodejs.org/en/).
2. Clone this Git repository:
```text
git clone https://github.com/peter-sattler/money-transfer-ui
cd money-transfer-ui
```
3. Install and start the [Express Web Server](https://expressjs.com): 
```text
npm update
npm start
```
4. Install and start the [Money Transfer REST API](https://github.com/peter-sattler/money-transfer-api/blob/main/README.md#getting-started).
5. Once both back-end services are running, the application's home page will be available [here](http://localhost:3000).

## Personal Goal 

Write a fully interactive front-end to an existing Java REST service while still fulfilling the final project's _Sultan-ian_ requirements.

## Application Perspective

**RULE # 1:** There is only one bank; _Pete's World Banking Empire_. Herein referred to as _The Empire_.

This application is intended to be used by internal employees of *The Empire* only. Both our branch representatives and our call center are required to use it or suffer the consequences. It includes internal reminders to apply pressure to the customer where required. After all, we are an evil empire.

Like any evil empire, our journey to world domination starts in _Toon Town_.

## Implementation Details

:moneybag: Implemented using HTML, CSS and Javascript (including AJAX)  
:moneybag: Static content is served via an embedded Express web server (https://expressjs.com)  
:moneybag: The [JSON generator](https://next.json-generator.com) was used to create the initial test data  

## Assumptions / Limitations 

:moneybag: I did NOT strive for cross-browser compatibility (tested on Safari only).  
:moneybag: Customer images are available for pre-loaded data only.  
:moneybag: Used CSS for rollovers since my navigation bar is text only. Javascript rollovers didn't make sense to me.  
:moneybag: Used session based cookies since nothing about the application is persistent anyway.  
    
## Lessons Learned

:moneybag: A surprising number of Looney Tunes characters are MALE (lawsuit pending).    
:moneybag: For the final project, always begin a Google search using the phrase _vanilla javascript_ or _vanilla js_.  
:moneybag: <ins>AJAX CORS (Cross-Origin Resource Sharing) Issues</ins> - The port number of the web server (3000) and REST service (8080) are different, so Javascript doesn’t consider them from the _same origin_. I had to add a CORS filter to the REST service in order to relax these restrictions.  
:moneybag: <ins>HTML 5 Input Types</ins> - Both the new input types (*tel*, *email* and *date*) and built-in pattern matching worked as advertised, but did not integrate well with my overall error handling mechanism.  

## Enhancement History

### [Version 1.0.1] September 2019 Updates
:moneybag: Removed account number field since the underlying REST service now automatically assigns it.  
:moneybag: Show transfer link only when there are at least two accounts.  
:moneybag: Check for concurrent update conditions from back-end.  

### [Version 1.0.2] October 2019 Updates
:moneybag: Added source and target account smart drop-downs to transfer page (selection in one removes it from the other).  

## Special Thanks

Special thanks to Professor Sam Sultan (http://samsultan.com) for his humor, patience and knowledge of Javascript. You are an excellent instructor. It was a pleasure to be part of your class.

Pete Sattler  
14 August 2019  
_peter@sattler22.net_  
