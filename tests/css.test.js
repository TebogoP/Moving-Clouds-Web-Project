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

//CSS Test for body
    test('body should have margin set to 0px', () => {
        const body = dom.window.document.body;
        const styles = dom.window.getComputedStyle(body);
        expect(styles.margin).toBe('0px');// Check if the margin is set to 0px
    });

//CSS Test for container
    // CSS Test for container height
    test('container div should have height set to 100vh', () => {
        const container = dom.window.document.querySelector('#container')
        const styles = dom.window.getComputedStyle(container);
        expect(styles.height).not.toBeNull();
        expect(styles.height).toBe('100vh');
    });

    // CSS Test for container position
    test('container div should have position set to relative', () => {
        const container = dom.window.document.querySelector('#container')
        const styles = dom.window.getComputedStyle(container);
        expect(styles.position).not.toBeNull();
        expect(styles.position).toBe('relative');
    });

    // CSS Test for container background-color
        test('container div should have background-color set to blue', () => {
            const container = dom.window.document.querySelector('#container')
            const styles = dom.window.getComputedStyle(container);
            expect(styles.backgroundColor).not.toBeNull();
            expect(styles.backgroundColor).toBe('rgb(0, 255, 255)');
        });

    // CSS Test for container overflow
    test('container div should have overflow set to hidden', () => {
        const container = dom.window.document.querySelector('#container')
        const styles = dom.window.getComputedStyle(container);
        expect(styles.overflow).not.toBeNull();
        expect(styles.overflow).toBe('hidden');
    });

// CSS Test for class cloud
    // CSS Test for every cloud width, height, border-radius, background-color, position and margin
    test('every .cloud element should have correct styles', () => {
        const clouds = dom.window.document.querySelectorAll('.cloud');// Select all .cloud elements
        expect(clouds.length).toBeGreaterThan(0);// Ensure there is at least one .cloud element

        clouds.forEach((cloud) => {// Iterate over each .cloud element
            const styles = dom.window.getComputedStyle(cloud); // Get the computed styles of the current cloud
            expect(styles.width).toBe('200px'); // Check the width
            expect(styles.height).toBe('80px');// Check the height
            expect(styles.backgroundColor).toBe('rgb(255, 255, 255)');// Check the background color (in rgb format) White
            expect(styles.borderRadius).toBe('40px');// Check the border radius
            expect(styles.position).toBe('absolute');// Check the position
            expect(styles.margin).toBe('100px');// Check the margin
        });

    });
});