import addInbox from './inbox.js';
import addTask from './add-task.js';

export default function initialLoad() {
  window.onload = (e) => {
    addInbox();
    addTask();
  };
}
