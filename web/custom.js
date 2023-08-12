document.addEventListener('DOMContentLoaded', function() {
    const contentElement = document.getElementById('commitp');
    const fetchDataButton = document.getElementById('button');

    fetchDataButton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://diederik.builtwithdark.com/hello');
            const data = response.text
            contentElement.textContent = data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});