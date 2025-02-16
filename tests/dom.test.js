const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const css = fs.readFileSync(path.resolve(__dirname, '../css/styles.css'), 'utf8');

describe('HTML and CSS Tests', () => {
    let dom;

    beforeAll(() => {
        dom = new JSDOM(html, {
            runScripts: 'dangerously',
            resources: 'usable',
        });

        const styleElement = dom.window.document.createElement('style');
        styleElement.textContent = css;
        dom.window.document.head.appendChild(styleElement);
    });

//Test for page title
    test('Page title should be "Moving Clouds"', () => {
        const title = dom.window.document.title;
        expect(title).toBe('Moving Clouds');
    });

//Test for container
    test('Container div should exist', () => {
        const container = dom.window.document.querySelector('#container'); //container of all the clouds
        expect(container).not.toBeNull();
        expect(container.id).toBe('container'); // Check the id is container
    });

//Test for container child -> cloud
    test('Container should have at least one cloud element', () => {
        const container = dom.window.document.querySelector('#container');
        expect(container.children.length).toBeGreaterThan(0); // Ensure at least one child exists

        const clouds = container.querySelectorAll('.cloud');// Check if the container has elements with class="cloud"
        expect(clouds.length).toBeGreaterThan(0); // Ensure at least one cloud exists
    });
    //Test for container grandchild -> cloudBubble1
    test('Container should have at least one cloudBubble1 element', () => {
        const container = dom.window.document.querySelector('#container');
        expect(container.children.length).toBeGreaterThan(0); // Ensure at least one child exists

        const clouds = container.querySelectorAll('.cloud');// Check if the container has elements with class="cloud"
        expect(clouds.length).toBeGreaterThan(0); // Ensure at least one cloud exists

        const cloudbubble = clouds[0].querySelectorAll('.cloudBubble1');// Check if the container has elements with class="cloudBubble1"
        expect(cloudbubble.length).toBeGreaterThan(0); // Ensure at least one cloudBubble1 exists

    });

});