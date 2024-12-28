const menuContainer = document.createElement('div');
const menuHeader = document.createElement('h1');
menuHeader.textContent = 'Food Menu';
const menuDescription = document.createElement('p');
menuDescription.textContent = 'Generic Restaurant';

const menu = document.createElement('div');
menu.classList.add('menu');

const appetizers = document.createElement('div');
appetizers.classList.add('appetizers');
appetizers.appendChild(document.createElement('h2')).textContent = 'Appetizers';
const appetizersList = document.createElement('ul');
appetizersList.appendChild(document.createElement('li')).textContent = 'Appetizer 1';
appetizersList.appendChild(document.createElement('p')).textContent = '$5.00';
appetizersList.appendChild(document.createElement('li')).textContent = 'Appetizer 2';
appetizersList.appendChild(document.createElement('p')).textContent = '$5.00';
appetizersList.appendChild(document.createElement('li')).textContent = 'Appetizer 3';
appetizersList.appendChild(document.createElement('p')).textContent = '$5.00';
appetizersList.appendChild(document.createElement('li')).textContent = 'Appetizer 4';
appetizersList.appendChild(document.createElement('p')).textContent = '$5.00';
appetizersList.appendChild(document.createElement('li')).textContent = 'Appetizer 5';
appetizersList.appendChild(document.createElement('p')).textContent = '$5.00';
appetizers.appendChild(appetizersList);

const mainCourse = document.createElement('div');
mainCourse.classList.add('main-course');
mainCourse.appendChild(document.createElement('h2')).textContent = 'Main Course';
const mainCourseList = document.createElement('ul');
mainCourseList.appendChild(document.createElement('li')).textContent = 'Main Course 1';
mainCourseList.appendChild(document.createElement('p')).textContent = '$10.00';
mainCourseList.appendChild(document.createElement('li')).textContent = 'Main Course 2';
mainCourseList.appendChild(document.createElement('p')).textContent = '$10.00';
mainCourseList.appendChild(document.createElement('li')).textContent = 'Main Course 3';
mainCourseList.appendChild(document.createElement('p')).textContent = '$10.00';
mainCourseList.appendChild(document.createElement('li')).textContent = 'Main Course 4';
mainCourseList.appendChild(document.createElement('p')).textContent = '$10.00';
mainCourseList.appendChild(document.createElement('li')).textContent = 'Main Course 5';
mainCourseList.appendChild(document.createElement('p')).textContent = '$10.00';
mainCourse.appendChild(mainCourseList);

const beverages = document.createElement('div');
beverages.classList.add('main-course');
beverages.appendChild(document.createElement('h2')).textContent = 'Beverages';
const beveragesList = document.createElement('ul');
beveragesList.appendChild(document.createElement('li')).textContent = 'Beverage 1';
beveragesList.appendChild(document.createElement('p')).textContent = '$1.00';
beveragesList.appendChild(document.createElement('li')).textContent = 'Beverage 2';
beveragesList.appendChild(document.createElement('p')).textContent = '$1.00';
beveragesList.appendChild(document.createElement('li')).textContent = 'Beverage 3';
beveragesList.appendChild(document.createElement('p')).textContent = '$1.00';
beveragesList.appendChild(document.createElement('li')).textContent = 'Beverage 4';
beveragesList.appendChild(document.createElement('p')).textContent = '$1.00';
beveragesList.appendChild(document.createElement('li')).textContent = 'Beverage 5';
beveragesList.appendChild(document.createElement('p')).textContent = '$1.00';
beverages.appendChild(beveragesList);

const appetizerImageContainer = document.createElement('div');
appetizerImageContainer.classList.add('image-container-right');
const appetizerImage = document.createElement('img');
appetizerImage.classList.add('appetizer-image');
appetizerImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQnQcw_xaVpvcRnb0NA5rJpoAkkdzngvAY8Q&s"
appetizerImageContainer.appendChild(appetizerImage);

const mainCourseImageContainer = document.createElement('div');
mainCourseImageContainer.classList.add('image-container-left');
const mainCourseImage = document.createElement('img');
mainCourseImage.classList.add('main-course-image');
mainCourseImage.src = "https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44="
mainCourseImageContainer.appendChild(mainCourseImage);

const beverageImageContainer = document.createElement('div');
beverageImageContainer.classList.add('image-container-right');
const beverageImage = document.createElement('img');
beverageImage.classList.add('beverage-image');
beverageImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ice_Milk_and_Lemon_Teas_-_Chilli_Cafe.jpg/500px-Ice_Milk_and_Lemon_Teas_-_Chilli_Cafe.jpg"
beverageImageContainer.appendChild(beverageImage);

menu.append(appetizers, appetizerImageContainer, mainCourseImageContainer, mainCourse, beverages, beverageImageContainer);
menuContainer.append(menuHeader, menuDescription, menu);

module.exports = menuContainer;
