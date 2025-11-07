# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- 
### Links

- Solution URL: https://github.com/horleyoung/newsletter-sign-up-with-success-message-main.git
- Live Site URL:  https://horleyoung.github.io/newsletter-sign-up-with-success-message-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned more on form validation

 ``` if (!emailInput.checkValidity()) {
    errorMessage.classList.remove("invisible");
    emailInput.classList.add("error-border");
    return;
  }
    const confirmSubmit = confirm('Do you really want to submit the form?');
  if (!confirmSubmit) return;
````

### Continued development

I continued the Development of my vanilla javascript and other css properties


### Useful resources

- [Example resource 1](https://www.stackoverflow.com) - This helped me for when i got stuck. I checked other users who had the same problem as mine and learned how they solved it.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@horleyoung](https://www.frontendmentor.io/profile/horleyoung)
- Twitter - [@Horely_blaq](https://www.x.com/Horley_blaq)



