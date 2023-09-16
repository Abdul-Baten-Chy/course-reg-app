Three feature:
1. responsiveness: site is fully responsive. three breakpoint have been specified to make the site responsive.

2. Showing enlisted course only : I have shown only unique enlisted course name in the sidebar. if already included course clicked again to select i showed an alert message.

3. total credit: total credit is conditional. If total credit is more than 20 credit then i showed an alert message.



How I manage state to develope this site

ans: I declare three state to manage data of this site.
 firstly, I declare a state for storing and managing the course title. selected course title is displayed in the aside bar. I validate to not include any duplication of the data. 
 secondly, I declare another state variable to store and manage total credit hour. It is ensured that not more than 20 credit is allowed to select.

 thirdly, I take third state variable to store and manage remaining credit hour. all the state is declare in the app.jsx component because it is the parent of aside bar and cards containers. thats why all three state and function is declare in app.jsx component.  


