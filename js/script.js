document.addEventListener('DOMContentLoaded', () => {
    const elements = document.getElementsByClassName('cloud');
    const element = elements[0];

    let randomPercentage = (Math.random()*100);
    element.style.left = '-50%';
    element.style.top = '${randomPercentage}%';

    const randomScale = (Math.random() * 0.7) + 0.3;
    element.style.transform = 'scale(${randomScale})';
});