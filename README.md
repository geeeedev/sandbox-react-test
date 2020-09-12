### This is my sandbox learning/exploring how to write automated tests for React app.
---

Credit:
- Following examples from [Ibrahima Ndaw](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/) - Thank YOU!!

Technology used:
- react-testing-library 
- [jest-dom](https://github.com/testing-library/jest-dom)

&nbsp;
&nbsp; 
&nbsp;
&nbsp;  

> Note to Self:
>1. test file are those with extension `.test.js`
>1. include below import statement in every `.test.js` file
>1. better to include import statement once in the `setupTests.js` file within the same directory as `.test.js` files
>    ```js
>    import '@testing-library/jest-dom/extend-expect';
>    ```