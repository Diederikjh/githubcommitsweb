document.addEventListener('DOMContentLoaded', function() {
    const fetchDataButton = document.getElementById('button');

    fetchDataButton.addEventListener('click', fetchData);

    fetchData()
});

async function fetchData() {
    const contentElement = document.getElementById('commitp');
    try {
      const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
      const response = await fetch('https://diederik.builtwithdark.com/hello');
      const data = await response.text();
      contentElement.innerHTML = data.toString()
        .replace(/^"|"$/g, '')    // Remove trailing and leading quotes
        .replace(/\\n/g, '<br>')  // newlines to <br>
        .replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);  // Links
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }