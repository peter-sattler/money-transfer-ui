# Money Transfer Web UI
![Money Stack](https://github.com/peter-sattler/money-transfer-api/blob/master/img/money-stack.gif)

# Background

This web user interface (UI) was created for and submitted as the final project in a JAVASCRIPT - FULL STACK WEB DEVELOPMENT (INFO1-CE9755) course which I attended at New York University's School of Professional Studies (NYU SPS) during the Summer of 2019. As such, it concentrates on the basics; avoiding heavy Javascript frameworks like JQuery. Special thanks to Professor Sam Sultan (http://samsultan.com) for his humor, patience and knowledge of Javascript. You are an excellent instructor. It was a pleasure to be part of your class.

# Project Requirements

Design and develop a web project on any subject you wish, providing that the content of the project includes dynamic DHTML effects/behavior, event handling, at least one form with form validation, and cookies or web storage. 

## Getting Started

These instructions will get you a copy of this project up and running on your local machine. Once the WEB service is running, it will serve all the static content that is needed.

```text
git clone https://github.com/peter-sattler/money-transfer-ui
cd money-transfer-ui
npm start
```

A separate REST API is also required.  Please follow that [project's](https://github.com/peter-sattler/money-transfer-api/blob/master/README.md) instructions for proper set-up

Once both back-end services are running, the application's home page will be available at http://localhost:3000 

## Implementation Details

:moneybag: Implemented using HTML, CSS and Javascript (including AJAX)  
:moneybag: Static content is served via an embedded Express web server (https://expressjs.com)  
:moneybag: The [JSON generator](https://next.json-generator.com) was used to create the initial test data  

## Personal Goal 

Write a fully interactive front-end to an existing Java REST service while still fulfilling the final project's _Sultan-ian_ requirements.

## Assumptions / Limitations 

:moneybag: I did NOT strive for cross-browser compatibility (tested on Safari only).  
:moneybag: Customer images are available for pre-loaded data only.  
:moneybag: Bidirectional mapping of customer and account entities in the API layer forced the front-end to make two separate AJAX calls for customer data and for account data on the customer detail page.   
:moneybag: REST service should assign account number. It should not be the responsibility of the front-end.  
:moneybag: REST service should not allow an account to be deleted unless it has a zero balance. Enforced this on the front-end.  
    
## Lessons Learned

:moneybag: A surprising number of Looney Tune characters are MALE (law suite pending).    
:moneybag: For the final project, always begin a Google search using the phrase _vanilla javascript_    
:moneybag: <ins>AJAX CORS (Cross-Origin Resource Sharing) Issues</ins> - The port number of the web server (3000) and REST service (8080) are different, so Javascript didn’t consider them from the _same origin_. I had to add a CORS filter to the REST service in order to relax these restrictions.  
:moneybag: <ins>HTML 5 Input Types</ins> - Both the new input types (*tel*, *email* and *date*) and built-in pattern matching worked as advertised, but did not integrate well with my overall error handling mechanism.  

Pete Sattler  
13 August 2019  
_peter@sattler22.net_  
