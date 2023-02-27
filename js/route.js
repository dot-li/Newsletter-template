<!-- Nav bar -->
fetch('./partials/header.html')
  .then(response => response.text())
  .then(data => {
    // Register the partial
    Handlebars.registerPartial('header', data);
    // Render the partial with data
    const template = Handlebars.compile('{{> header}}');
    const header = template({ title: 'Dynamic Partial Example' });
    document.querySelector('#header-container').innerHTML = header;
    
    // Get references to the nav bar links and the content placeholder
    const navLinks = document.querySelectorAll('a.nav-link');
    const content = document.getElementById('content');

    // Load Home as default
    renderPartial('home', { title: 'Dynamic Partial Example' });
    //content.innerHTML = homeTemplate();

    // Attach event listeners to the nav bar links
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        // Get the name of the template from the data-template attribute
        const templateName = event.target.getAttribute('data-template');
        // Render the appropriate template based on the template name
        switch (templateName) {
          case 'home':
            <!-- Home Section -->
            renderPartial('home', { title: 'Dynamic Partial Example' });
            break;
          case 'news':
            <!-- World news Section -->
            renderPartial('news', { title: 'Dynamic Partial Example' });
            break;
          case 'economics':
            <!-- Economics Section -->
            renderPartial('economics', { title: 'Dynamic Partial Example' });
            break;
          case 'football':
            <!-- Football Section -->
            renderPartial('football', { title: 'Dynamic Partial Example' });
            break;
          case 'basketball':
            <!-- Basketball Section -->
            renderPartial('basketball', { title: 'Dynamic Partial Example' });
            break;
          default:
            break;
        }
      });
    });

  })
  .catch(error => console.log(error));

<!-- footer -->
fetch('./partials/footer.html')
  .then(response => response.text())
  .then(data => {
    // Register the partial
    Handlebars.registerPartial('footer', data);
    // Render the partial with data
    const template = Handlebars.compile('{{> footer}}');
    const footer = template({ title: 'Dynamic Partial Example' });
    document.querySelector('#footer-container').innerHTML = footer;
  })
  .catch(error => console.log(error));


function renderPartial(partialName, data) {
  fetch(`./partials/${partialName}.html`)
    .then(response => response.text())
    .then(partialHtml => {
      // Register the partial with Handlebars
      Handlebars.registerPartial(partialName, partialHtml);
      // Compile the partial template with the data object
      const template = Handlebars.compile(`{{> ${partialName}}}`);
      const html = template(data);
      // Render the HTML in the content placeholder
      document.querySelector('#content').innerHTML = html;
    })
    .catch(error => console.log(error));
}