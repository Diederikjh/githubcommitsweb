document.addEventListener('DOMContentLoaded', function() {
    const fetchDataButton = document.getElementById('button');

    fetchDataButton.addEventListener('click', fetchData);

    fetchData()
});

async function fetchData() {
    const contentElement = document.getElementById('commitp');
    try {

      const paths = ['hello', 'github'];
      const randomIndex = Math.floor(Math.random() * paths.length);

      const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
      const response = await fetch('https://diederik.builtwithdark.com/' + paths[randomIndex]);
      const data = await response.text();
      contentElement.innerHTML = data.toString()
        .replace(/^"|"$/g, '')    // Remove trailing and leading quotes
        .replace(/\\r\\n/g, '\\n') // Replace \r\n with \n
        .replace(/\\n/g, '<br>')  // newlines to <br>
        .replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`);  // Links
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }