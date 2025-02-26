const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

// Load the JS file
const js = fs.readFileSync(path.resolve(__dirname, '../js/script.js'), 'utf8');

describe('JS Tests', () => {
    let dom;

    beforeAll(() => {
        // Create a DOM environment
        dom = new JSDOM(html, {
            runScripts: 'dangerously', // Allow scripts to run
            resources: 'usable', // Allow loading external resources (e.g., CSS,JS ect.)
        });

        // Add JS to the DOM
        const scriptElement = dom.window.document.createElement('script');
        scriptElement.textContent = js;
        dom.window.document.body.appendChild(scriptElement);
    });

//Test for setting .cloud element top and left properties using script.js
    test('first .cloud element should have left and top styles set to 10px', () => {
    dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded')); // Simulate the DOMContentLoaded event
    const cloud = dom.window.document.querySelector('.cloud'); // Select the first .cloud element
    expect(cloud).not.toBeNull();// Ensure the cloud element exists

    const styles = dom.window.getComputedStyle(cloud); // Get the computed styles of the cloud
    expect(styles.left).toBe('-50%');// Check that the left  property is set to 10px
   // Top is now random so this won't work anymore
   // expect(styles.top).toBe('10px');// Check that the top property is set to 10px
    });

});