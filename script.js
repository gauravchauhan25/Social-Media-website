// For theme toggler
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener('click', () => {
      document.body.classList.toggle('light-theme-variables');
      document.body.style.transition = 'all 500ms ease';
      themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
      themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function () {
      const storyContainer = document.querySelector('.stories');
      const scrollLeftButton = document.getElementById('scroll-left');
      const scrollRightButton = document.getElementById('scroll-right');

      scrollLeftButton.style.display = 'none';

      // Scroll left function
      scrollLeftButton.addEventListener('click', function () {
            storyContainer.scrollBy({
                  left: -200,
                  behavior: 'smooth'
            });
      });

      // Scroll right function
      scrollRightButton.addEventListener('click', function () {
            storyContainer.scrollBy({
                  left: 200,
                  behavior: 'smooth'
            });
      });

      function updateButtonVisibility() {
            
            if (storyContainer.scrollLeft === 0) {
                  scrollLeftButton.style.display = 'none';
            } else {
                  scrollLeftButton.style.display = 'block';
            }

            if (storyContainer.scrollLeft + storyContainer.clientWidth >= storyContainer.scrollWidth) {
                  scrollRightButton.style.display = 'none';
            } else {
                  scrollRightButton.style.display = 'block';
            }
      }

      storyContainer.addEventListener('scroll', updateButtonVisibility);
});

// For changing active status of sidebar and showing notification popup
const menuItems = document.querySelectorAll('.menu-item');

const changeActiveItem = () => {
      menuItems.forEach(item => {
            item.classList.remove('active');
      })
}

menuItems.forEach(item => {
      item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');

            if (item.id != 'notifications') {
                  document.querySelector('.notification-popup').style.display = 'none';
            }
            else {
                  document.querySelector('.notification-popup').style.display = 'block';
                  document.querySelector('.notification-count').style.display = 'none';
            }

            if (item.id != 'home') {
                  document.querySelector('.suggestions-container').style.display = 'none';
            }
            else {
                  document.querySelector('.suggestions-container').style.display = 'block';
            }

            if (item.id != 'requests') {
                  document.querySelector('#friend-requests').style.display = 'none';
            }
            else {
                  document.querySelector('#friend-requests').style.display = 'block';
            }

            if (item.id != 'messages-notifications') {
                  document.querySelector('#messages').style.display = 'none';
            }
            else {
                  document.querySelector('.messages').style.display = 'block';
            }
      })
})


// Search Chat
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

function searchMessage() {
      const val = messageSearch.value.toLowerCase();
      // console.log('val');
      message.forEach(user => {
            let name = user.querySelector('h5').textContent.toLowerCase();
            if (name.indexOf(val) != -1) {
                  user.style.display = 'flex';
            }
            else {
                  user.style.display = 'none';
            }
      })
}

messageSearch.addEventListener('keyup', searchMessage);


// Search bar of influencers
const searchBar = document.querySelector('#search-influencers');
const influencers = document.querySelector('#influencers');
const mainBody = document.querySelector('.main-body');
const influence = document.querySelector('#influence-para');
const influencer = document.querySelectorAll('.influencer');
const artist = document.querySelector('#artist');

searchBar.addEventListener('click', () => {
      influencers.style.display = 'grid';
      mainBody.classList.add('active');
})

const closeSearch = (e) => {
      if (e.target.classList.contains('main-body')) {
            influencers.style.display = 'none';
            mainBody.classList.remove('active');
      }
}

mainBody.addEventListener('click', closeSearch);


// Search influencers from search bar
function searchInfluencer() {
      const val = searchBar.value.toLowerCase();

      // console.log('val');
      influencer.forEach(user => {
            let name = user.querySelector('h4').textContent.toLowerCase();
            if (name.indexOf(val) != -1) {
                  user.style.display = 'flex';
                  artist.classList.add('active');
            }
            else {
                  user.style.display = 'none';
            }
      })
}

searchBar.addEventListener('keyup', searchInfluencer);
