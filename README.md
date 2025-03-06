# Moving-Clouds-Web-Project

## Overview
This web project demonstrates the creation of a simple cloud animation using HTML, CSS and JavaScript. The project focuses on creating a static cloud structure with basic styling, showcasing fundamental web development techniques.

## Features
- Static cloud structure with basic styling
- Responsive design using CSS
- Cross-browser compatibility
- Comprehensive test suite for HTML and CSS

## Technologies Used
- HTML5 for structure
- CSS3 for styling
- Jest and JSDOM for testing
- Text-encoding for handling text encoding in tests

## Project Structure
```
Moving-Clouds-Web-Project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── tests/
│   ├── css.test.js
│   ├── dom.test.js
│   └── script.test.js
├── jest.setup.js
├── package.json
└── README.md
```
## Getting Started
### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic knowledge of HTML and CSS
- Text editor or IDE (Visual Studio Code, Sublime Text, etc.)
- Node.js and npm for running tests

### Installation
1. Clone or download this repository:
```
git clone https://github.com/TebogoP/Moving-Clouds-Web-Project.git
```
2. Navigate to the project directory:
```
cd Moving-Clouds-Web-Project
```
3. Install dependencies:

```
npm install
```
4. Open index.html in your browser to view the project:
```
open index.html
```
### Running Tests
The project includes a test suite to ensure proper functionality:

1. Run all tests:
```
npm test
```
2. Run specific test files:
```
npm test tests/css.test.js
npm test tests/dom.test.js
npm test tests/script.test.js
```
## Testing Overview
The project includes three main test files:

1. CSS Tests (css.test.js)
- Verifies proper styling of body, container, and cloud elements
- Tests for correct dimensions, positioning, and colors
- Ensures responsive design principles are followed

2. DOM Tests (dom.test.js)
- Verifies HTML structure and element existence
- Tests for proper element hierarchy and relationships
- Ensures all required elements are present

3. JavaScript Tests (script.test.js)
- Tests JavaScript functionality and DOM manipulation
- Verifies proper initialization of cloud positions

## How It Works
The project uses a combination of HTML and CSS to create a static cloud structure:

1. HTML Structure:
- A container (#container) holds the cloud elements.
- Cloud shapes are created using nested div elements.
- Example structure:
```
<div id="container">
  <div class="cloud">
    <div class="cloudBubble1"></div>
    <div class="cloudBubble2"></div>
  </div>
</div>
```

2. CSS Styling:
- Cloud shapes are styled using border-radius and background-color.
- Absolute positioning is used to place the cloud elements.
- Example CSS:
```
.cloud {
  width: 200px;
  height: 80px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  margin: 100px;
}
```

3. JavaScript:
- The script.js file is currently minimal and does not include animations.
- Future enhancements could include JavaScript-based animations.

## Customization
- You can customize various aspects of the project:
- Adjust the cloud shapes and sizes in styles.css
- Modify the color palette in styles.css
- Add or remove cloud layers in index.html
- Implement additional interactive features using JavaScript

## Future Enhancements
- Add JavaScript-based animations for moving clouds
- Implement a day/night cycle with changing sky colors
- Add weather effects (rain, snow)
- Create lightning effects during storm simulation
- Add sound effects for immersive experience
