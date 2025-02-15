const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the HTML file
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

// Load the CSS file
const css = fs.readFileSync(path.resolve(__dirname, '../css/styles.css'), 'utf8');

describe('CSS Tests', () => {
    let dom;

    beforeAll(() => {
        // Create a DOM environment
        dom = new JSDOM(html, {
            runScripts: 'dangerously', // Allow scripts to run
            resources: 'usable', // Allow loading external resources (e.g., CSS)
        });

        // Add CSS to the DOM
        const styleElement = dom.window.document.createElement('style');
        styleElement.textContent = css;
        dom.window.document.head.appendChild(styleElement);
    });

    test('body should have margin set to 0px', () => {
        const body = dom.window.document.body;
        const styles = dom.window.getComputedStyle(body);

        // Check if the margin is set to 0px
        expect(styles.margin).toBe('0px');
    });
});