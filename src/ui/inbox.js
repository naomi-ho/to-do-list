export default function addInbox() {
  const inboxDiv = document.createElement('div');
  inboxDiv.className = 'content-div';

  const inboxTitle = document.createElement('h1');
  inboxTitle.className = 'page-title';
  inboxTitle.textContent = 'Inbox';

  inboxDiv.appendChild(inboxTitle);

  document.getElementById('content').appendChild(inboxDiv);
}
