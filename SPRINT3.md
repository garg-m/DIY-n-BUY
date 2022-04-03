### Project Sprintboard
https://github.com/users/kireeti-r/projects/

### Progress Overview

In previous sprint, we were able to load data from our cloud database. In this iteration, the loaded data is more interactive i.e., the rows in the table for watch parts can now be selected and based on the selection, the watch parts are changed in the visualizer in real time, as shown in the working screenshots below.  

We built the the visualizer as a a collection of vector images stacked on top of each other, always containing at least one image for each watch part. When a user clicks a row in the table, the URL for the corresponding image is read and changed in the visualizer. The result is a real-time visualizer that enthusiasts can play with to try all possible combinations for their next build.  

The web app also has a cart functionality now, which shows all the current row selections. It needs to be formatted for a beautiful interface, but that has been moved to the next sprint.  

No new backend endpoints were needed for the functionalities implemented in Sprint 3, so the unit tests are as is. We are however writing a few Cypress tests for the frontend functionalities.  

### Working Screenshots
https://drive.google.com/uc?id=1RYqkK5gW5rQjCHN4FE4ojN44Q-It_zUe
![alt text](https://drive.google.com/uc?id=1RYqkK5gW5rQjCHN4FE4ojN44Q-It_zUe)
<br/>
https://drive.google.com/uc?id=1cm-EG38qc_faG8qRj2j_PRC27YHpYYqL
![alt text](https://drive.google.com/uc?id=1cm-EG38qc_faG8qRj2j_PRC27YHpYYqL)
<br/>
https://drive.google.com/uc?id=1UwZcjATqB1TBYBq0imxB2TAVh8OGKq-t
![alt text](https://drive.google.com/uc?id=1UwZcjATqB1TBYBq0imxB2TAVh8OGKq-t)
<br/>
