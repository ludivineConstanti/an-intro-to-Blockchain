# An intro to Blockchain

An educative website made to facilitate beginners to learn more about the Blockchain. 

![Home page](https://user-images.githubusercontent.com/24965333/112191371-3ada2780-8c06-11eb-9b50-a03d203379d8.png)

This website was made at the end of my bootcamp, for practise purpose. I was in a team with 3 other people. Knowing that we would have to make a project during a month, I prepared the concept, design and material to fill the website in advance. 

My role (appart from plan, design and provide content) was :
* Plan how to organise the data (tables and columns) for the database (along with other members of the group)
* Set up the project with React and Redux
* Make the React components and their CSS (responsive and animated, react to user interaction...)
* Make the animation in the background with three.js
* Make the content bilingual with i18next
* Link some elements with data coming from the database (quiz, articles...)
* Work on the website functionnalities (calculate the score from the quiz...)

## What I learned 📚
* Too many actions triggered at the same time can cause unexpected sides effects (value that is updated by an action and then reverted to its old state by the previous one).
* It's never a good idea to use a parent div to style interactives elements like links and buttons (then the interactive zone is smaller for the user, which is bad UX and changing the React component and its CSS is needed).
* The layout and its animation are linked, changing the size of an element makes the rest of the layout move, therefore it's better to take the animated state into account, both while planing the design and creating the normal state of the elements.
* It's easier to make a responsive layout with flexbox than with grid (from my experience on this website, but some people might have a different opinion).

## What I want to do better next time 👍
* Organise the CSS better (there's a lot of pixels values everywhere, and some are dependant on each other, which means that if I change a margin somewhere, I would need to check the rest of the website to see if everything is still aligned as it should be).
* Learn more about Sass (I used Sass in the project, but I didn't know much about it, I think it could have helped me to write less code and organize things better if I had been aware that things like @mixin and @include existed).
* Think of a better convention system for components (some always need similar props like a function we want to use OnClick or a special class that modifies it style... staying consistent makes it easier to keep updating the code even after forgetting what we did in the first place).
* Plan a better system for the class modifier I give in prop to the component (it's not a huge problems for my projects, since they're not that big, but eventually, it would be nice to have multiple modifiers => noMarginTop noMarginBottom... instead of using one class per function, otherwise we need one class per use case, which might lead to repetitive code, on the other hand, giving the possibility of a really complex system, with multiple class might be overkill for elements that do not need it).

## Things that I would change on this project if I spent more time on it ⏱️
* The article page is too long, so I would change the CSS to make it that it shows one category at a time instead of all the articles.
* There's a small feedback system for the user actions (loading state appears, the user is redirected toward an other page automatically...) but it would be nice to have a message that displays a more precise feedback (wether the action failed or succeeded).
* I wanted to implement a feedback form for the user to report potential mistakes on the quiz and its answers (although I'm not sure if that would be a good idea since nobody committed to maintaining the website after we finished the group project, so we might not have updated anything even if the user complained).
* I wanted to have a reading suggestion list, at the end of the quiz, depending on what the user answered wrong, and in the score page, so that he / she can read articles that would be relevant to improve his / her score.
* It was originally planned that the articles would change color depending on wether you read them or not (if you're connected).
* I would have liked to spend more time on the Three.js animation (have different ones depending on the page, have it change when you scroll down the page...).
* I would have liked to spend more time on the animation of the elements (title...) when you load the page or scroll down.
