export function addContactElement() {
  const contactDiv = document.createElement('div');
  contactDiv.className = 'contact';

  const aboutHeader = document.createElement('h1');
  aboutHeader.textContent = 'About';
  aboutHeader.className = 'contact-header';

  const aboutContent = document.createElement('p');
  aboutContent.textContent =
    'Welcome to Grass, a cafe specialising in matcha flavoured drinks and desserts located in New York City. We only use the highest of quality, ceremonial-grade matcha powder in our menu items. We have weekly specials that are announced through social media so follow us on Instagram or TikTok for updates.';

  const locationHeader = document.createElement('h1');
  locationHeader.textContent = 'Location';
  locationHeader.className = 'contact-header';

  const locationContent = document.createElement('p');
  locationContent.textContent = '420 Green St, New York, NY 10008';

  const hoursHeader = document.createElement('h1');
  hoursHeader.textContent = 'Hours';
  hoursHeader.className = 'contact-header';

  const hoursDiv = document.createElement('div');
  hoursDiv.className = 'hours';

  const hoursContentDays = document.createElement('p');
  hoursContentDays.textContent = 'Every day of the week';
  hoursDiv.appendChild(hoursContentDays);

  const hoursContentTimes = document.createElement('p');
  hoursContentTimes.textContent = '7:00 AM - 8:00 PM';
  hoursDiv.appendChild(hoursContentTimes);

  const phoneHeader = document.createElement('h1');
  phoneHeader.textContent = 'Phone';
  phoneHeader.className = 'contact-header';

  const phoneContent = document.createElement('p');
  phoneContent.textContent = '1-917-489-9905';

  // add elements to new div
  contactDiv.appendChild(aboutHeader);
  contactDiv.appendChild(aboutContent);
  contactDiv.appendChild(locationHeader);
  contactDiv.appendChild(locationContent);
  contactDiv.appendChild(hoursHeader);
  contactDiv.appendChild(hoursDiv);
  contactDiv.appendChild(phoneHeader);
  contactDiv.appendChild(phoneContent);

  // add div into the DOM
  document.getElementById('content').appendChild(contactDiv);
}
