const home = document.createElement('div');
home.classList.add('home');
const homeText = document.createElement('h1');
homeText.textContent = 'A Generic Restaurant';
const homeImage = document.createElement('img');
homeImage.classList.add('home-image');
homeImage.src = "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
home.append(homeText, homeImage);

module.exports = home;
