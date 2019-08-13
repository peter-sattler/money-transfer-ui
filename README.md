# Money Transfer Web UI
![Money Stack](https://github.com/peter-sattler/money-transfer-api/blob/master/img/money-stack.gif)

# Background

This user interface is the final project for a class I attended at New York University's School of Professional Studies (NYU SPS INFO1-CE9755) during the Summer of 2019. As such, it concentrates on the basics and avoids heavy Javascript frameworks like JQuery. Special thanks to Professor Sam Sultan (http://samsultan.com) for his humor, patience and knowledge of Javascript. You are an excellent instructor. It was a pleasure to learn under your guidance.

# Requirements

Design and develop a web project on any subject you wish, providing that the content of the project includes dynamic DHTML effects/behavior, event handling, at least one form with form validation, and cookies or web storage. 

All back-end related services are provided by my REST API project (https://github.com/peter-sattler/money-transfer-api) which is also available here on Github.

## Getting Started

These instructions will get you a copy of this project up and running on your local machine. Once the WEB service is running, it will serve all the static content that is needed.

```text
git clone https://github.com/peter-sattler/money-transfer-ui
cd money-transfer-ui
npm start
```

## Implementation Details

:moneybag: Implemented using HTML, CSS and Javascript (including AJAX) only  
:moneybag: Static content is served via an embedded Express web server (https://expressjs.com)   
:moneybag: No heavy frameworks were used  
:moneybag: Home page is available at http://localhost:3000

## Personal Goal 

Write a fully interactive front-end to an existing REST service written in Java while still fulfilling the final project “Sultan-ian” requirements.

## Assumptions 

:moneybag: Did NOT strive for cross-browser compatibility (Safari only)  
:moneybag: Customer images available for pre-loaded data, but not for newly added ones  
    
## Lessons Learned

:moneybag: A surprising number of Looney Tune characters are MALE. Law suite pending  
:moneybag: Always Google using “vanilla javascript”  
:moneybag: <ins>JSON generator (https://next.json-generator.com)</ins> - Not as helpful as I thought since Customer and Account have foreign key (FK) references between the two entities. I had to manually massaged the data between the two.   
:moneybag: <ins>AJAX CORS (Cross-Origin Resource Sharing) Issues</ins> - The port number of the web server (80) and REST service (8080) are different, so Javascript didn’t consider them from the “same origin”. I added CORS filter to REST service.   
:moneybag: HTML 5 Input Types - Both the new input types (*tel*, *email* and *date*) and built-in pattern matching worked well.  

Pete Sattler  
15 August 2019  
_peter@sattler22.net_  
