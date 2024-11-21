# Assignment_1
First task to be submitted in the web application development course

In this assignment, you will create a REST API using Node.js and Express. You do not need to provide unit tests, but you should specify each API request in a request.rest file.
The required API should include the following endpoints:
Add a New Post: Allows a user to add a new post to the database.
Get All Posts: Returns all posts in the database as a JSON array.
Get a Post by ID: Returns the post with the specified ID. The request URL format is:
/post/<post_id>
Get Posts by Sender: Returns all posts published by a specific sender, identified by sender ID. The request URL format is:
/post?sender=<sender_id>
Update a Post: Updates a post with new data, replacing its current content. This operation uses the PUT method, where the post ID is specified in the URL, and the new post data is included in the JSON body of the request.
Additionally, implement a full CRUD API for Comments. Comments are messages written by users on specific posts. The Comments API should include endpoints to create, read, update, and delete comments, as well as an endpoint to retrieve all comments associated with a specific post.
Collaboration Requirements:
Each student is responsible for implementing half of the API endpoints.
Work collaboratively using Git with pull requests to integrate your work. Each student should submit their changes via pull requests, allowing for review and integration with the team's codebase.
Note: Ensure each API request is clearly defined in the rest.rest file, outlining the request methods, URLs, and data formats used.
יש להתחבר למונגו כמו שעשינו בכיתה.
חובה לבצע את התרגיל בזוג, על כל אחד מהמפתחים להוסיף מחצית מה- API הנדרשים ומחצית מהטסטים הנדשים - את הטסטים יש לבצע באמצעות rest request באופן ידני כמו שעשינו בכיתה. יש לייצר branch ו- pull request עבור כל אחד מה- API. הסטודנט השני נדרש לאשר את ה- pull request לפני ה- merge.




יש להגיש קובץ אחד ובתוכו:
1. קישור לגיט עם הקוד של הפרויקט (חייב להיות ב- public).
2. סרטון קצר המדגים את המערכת רצה.
3. תצלום מסך ה- Network Graph מתוך הגיט כך שניתן לראות גם את שם בעל חשבון הגיט בהתאם לדוגמה הבאה:

