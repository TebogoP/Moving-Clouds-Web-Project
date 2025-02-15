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

    test('Page title should be "Moving Clouds"', () => {
        const title = dom.window.document.title;
        expect(title).toBe('Moving Clouds');
    });

    test('Container div should exist', () => {
        const container = dom.window.document.querySelector('#container'); //container of all the clouds
        expect(container).not.toBeNull();
        expect(container.id).toBe('container'); // Check the id is container
    });

});