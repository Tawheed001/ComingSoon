const btn = document.getElementById('waitlist-btn');

function updateUI(joined) {
  if (joined) {
    btn.textContent = 'Exit Waitlist';
    btn.classList.add('gray');
  } else {
    btn.textContent = 'Join the Waitlist';
    btn.classList.remove('gray');
  }
}

btn.addEventListener('click', () => {
  let joined = localStorage.getItem('waitlist') === 'true';

  if (!joined) {
    // Open email client
    window.location.href = "mailto:contact@fashionfyxen.com?subject=Join%20Waitlist&body=I%20Have%20Joined%20The%20Waitlist,%20And%20I%20Want%20To%20Receive%20Promotional%20Message";
  }

  joined = !joined;
  localStorage.setItem('waitlist', joined);
  updateUI(joined);
});

window.onload = () => {
  const joined = localStorage.getItem('waitlist') === 'true';
  updateUI(joined);
};
