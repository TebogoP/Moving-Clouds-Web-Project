document.addEventListener('DOMContentLoaded', () => {
    // Create clouds first
    const container = document.getElementById("container");
    const cloudTemplate = `
        <div class="cloud">
            <div class="cloudBubble1"></div>
            <div class="cloudBubble2"></div>
        </div>
    `;
    container.innerHTML = cloudTemplate.repeat(5);

    // Then animate all clouds
    const clouds = document.getElementsByClassName('cloud');

    Array.from(clouds).forEach(cloud => {
        // Random initial position
        const randomTop = Math.random() * 70; // Keep within top 70% of container
        cloud.style.top = `${randomTop}%`;
        cloud.style.left = '-50%'; // Start off-screen to the left

        // Random size (between 30% and 100% of original size)
        const randomScale = (Math.random() * 0.7) + 0.3;
        cloud.style.transform = `scale(${randomScale})`;

        // Random speed (between 6 and 12 seconds per transition)
        const intervalTimeInSeconds = (Math.random() * 6) + 6;
        cloud.style.transition = `all linear ${intervalTimeInSeconds}s`;

        // Animation logic
        let isMovingRight = true;

        const moveCloud = () => {
            if (isMovingRight) {
                cloud.style.left = '100%';
            } else {
                cloud.style.left = '-50%';
            }
            isMovingRight = !isMovingRight;
        };

        // Start with a small random delay for each cloud
        setTimeout(() => {
            moveCloud();
            // Set interval based on the transition time
            setInterval(moveCloud, intervalTimeInSeconds * 1000);
        }, Math.random() * 2000); // Random delay up to 2 seconds
    });
});