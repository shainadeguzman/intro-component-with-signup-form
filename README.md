# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- Vanilla JavaScript for Form Validation

### What I learned

While developing this project, I learned how to write a clean code. This happen when i put all the codes that i repeteadly writing into a one function, and then call or invoke it when some errors occurs. I also learned how to validate an email using the Regex expression. The code snippet below is the one i'm proud of, because that is the function i made to execute all errors without writing it repeatingly.

```js
const executeError = function (error, input, image) {
  error.classList.add("show");
  input.classList.add("error");
  image.classList.add("show");
  setTimeout(() => {
    error.classList.remove("show");
    input.classList.remove("error");
    image.classList.remove("show");
  }, 3000);
};
```

## Author

- Website - [Shaina De Guzman](deguzman.netlify.app)

Thanks for checking out this project.
