### This is my sandbox learning/exploring how to write automated tests for React app.
---

|col1  |col2 |
|:----|----:|  
| 1. |test|
| 2. |test|

Technology used:
- react-testing-library 
- [jest-dom](https://github.com/testing-library/jest-dom)

Note to Self:
- test file are those with extension `.test.js`
- must include the setupTests.js file with import statement in same directory
    ```js
    import '@testing-library/jest-dom/extend-expect';
    ```