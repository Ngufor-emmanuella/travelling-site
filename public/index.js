const ham = document.getElementById('ham');

const div = document.querySelector('#nav3');

const form = document.querySelector('#form');

const email = document.querySelector('#mail');

const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value
    !== email.value.toLowerCase()) {
    e.preventDefault();
    errorElement.style.display = 'block';
    errorElement.textContent = 'invalid email, please use lowerCase';
  }
});

ham.addEventListener('click', () => {
  div.classList.remove('hide');
  ham.classList.add('hide');
  document.querySelector('.body').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
});

const markx = document.getElementById('markx');

markx.addEventListener('click', () => {
  div.classList.add('hide');
  ham.classList.remove('hide');
  document.querySelector('.body').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
});

const links = document.querySelectorAll('.navlink2');

links.forEach((link) => {
  link.addEventListener('click', () => {
    div.classList.add('hide');
    ham.classList.remove('hide');
    document.querySelector('.body').classList.remove('blur');
    document.querySelector('.logo').classList.remove('blur');
  });
});

const projects = [
  {
    title: 'Traveling For Studies...',
    image: 'images/study.jpg',
    paragraph: 'Studying abroad is more than just acquiring knowledge it is an opportunity to immerse yourself in new cultures, to gain a global perspective, and to become a true citizen of the world. Embrace the challenge of adapting to unfamiliar surroundings, and let your resilience and adaptability shine as you navigate new academic landscapes.',
  },
  {
    title: 'Travel For Your Buisness Meetings...',
    image: 'images/buisness.webp',
    paragraph: 'In the fast-paced global marketplace, opportunities await those who dare to go beyond borders. As an entrepreneur or business professional, it is time to seize the world stage and unlock a realm of limitless possibilities. We are here to be your strategic partner, curating seamless travel experiences that cater to your business needs with unparalleled professionalism and attention to detail.',
  },
  {
    title: 'Travel For Vacations....',
    image: 'images/vacation.webp',
    paragraph: 'The extraordinary is calling - its time to answer! <br>  Yearning for an unforgettable vacation that transcends the ordinary? Its time to embark on a journey that will transport you to breathtaking destinations across the globe. Let your wanderlust take flight and immerse yourself in the wonders that await you abroad.',
  },
  {
    title: 'Book Us For All Adventures...',
    image: 'images/box.webp',
    paragraph: 'Choose us as your travel companion, and let us take care of every detail along the way. From seamless logistics and hand-picked accommodations to immersive cultural encounters and personalized itineraries, we leave no stone unturned to ensure your journey is nothing short of exceptional.',
  },
];

const projectContainer = document.querySelector('.project-container');

const projectHtml = projects.map((project) => (
  `
  <div class="proj-flex">
  <div class="project">
  <div class="my-text">
      <h2>${project.title}</h2>
      <ol>
          <li>STUDY</li>
          <li><img src="images/Counter.png" alt="counter"></li>
          <li>EXPLORE</li>
          <li><img src="images/Counter(2).png" alt="counter"></li>
          <li>GROW</li>
      </ol>
      <p>${project.paragraph} </p><br> 
  </div>
</div>

  <div class="my-img">
      <img class="mobile-image" src=${project.image} alt="picture identity of a lady">
  </div>
  </div>
  `
));

projectContainer.innerHTML = projectHtml;

const projectButtons = document.querySelectorAll('.button');

const popupContainer = document.querySelector('.popup');

projectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentProject = projects[button.id];
    popupContainer.innerHTML = `
    <div class="project1">
    <img class="popupx" src="images/Iconx-popup.png" alt="an x">
    <h2>${currentProject.title}</h2>
    <ul class="list1">
        <li>CANOPY</li>
        <li><img src="images/Counter.png" alt="counter"></li>
        <li>Back End Dev</li>
        <li><img src="images/Counter(2).png" alt="counter"></li>
        <li>2015</li>
    </ul>
    <div class="my-img1">
        <img class="mobile-image1" src=${currentProject.image} alt="picture identity of a lady">
    </div>
    <div class="my-img2">
    <img class="mobile-image2" src=${currentProject.image} alt="nature picture">
    </div>
    <p>
    ${currentProject.paragraph}</p>
    <ul class="show1">
        <li>html</li>
        <li>css</li>
        <li class="ok1">Ruby on rails</li>
        <li>javascrpt</li>
    </ul>
    <div class="house">
        <div class="button1a">
            <button type="button" class="button1">See live <img src="images/Icon-popup.png" alt="a clock"></button>
        </div>
        <div class=" button1a">
            <button type="button" class="button2">See Source <img src="images/Vector-popup.png" alt="github">
            </button>
        </div>
    </div>
</div>
    `;
    const cancel = document.querySelector('.popupx');
    cancel.addEventListener('click', () => {
      popupContainer.innerHTML = '';
    });
  });
});
const myName = document.getElementById('name');

const message = document.getElementById('msg');

form.addEventListener('input', () => {
  const inputs = {
    myName: myName.value,
    myEmail: email.value,
    myMessage: message.value,
  };
  localStorage.setItem('inputs', JSON.stringify(inputs));
});
const fetchData = JSON.parse(localStorage.getItem('inputs'));
myName.value = fetchData.myName;
email.value = fetchData.myEmail;
message.value = fetchData.myMessage;
