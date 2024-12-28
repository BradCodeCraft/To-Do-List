const about = document.createElement('div');
about.classList.add('about');

const experienceUsArticle = document.createElement('article');
experienceUsArticle.id = 'experience-us';
const experienceUsImageBackground = document.createElement('div');
experienceUsImageBackground.id = 'experience-us-background';
const experienceUsHeader = document.createElement('h2');
experienceUsHeader.textContent = 'Experience Us';
const experienceUsText = document.createElement('p');
experienceUsText.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis elit odio consequat conubia facilisis primis. Aliquam erat congue fusce a volutpat; lacus cursus. Eleifend aliquam luctus facilisis vivamus sed. Dignissim mauris consequat quis adipiscing auctor cursus.";
experienceUsArticle.append(experienceUsImageBackground, experienceUsHeader, experienceUsText);

const ourStoryArticle = document.createElement('article');
ourStoryArticle.id = 'our-story';
const ourStorySubtext = document.createElement('p');
ourStorySubtext.id = 'our-story-subtext';
ourStorySubtext.textContent = "Our Story";
const ourStoryHeader = document.createElement('h2');
ourStoryHeader.textContent = 'Welcome to Generic Restaurant';
const ourStoryText = document.createElement('p');
ourStoryText.textContent = "Lorem ipsum odor amet, consectetuer adipiscing elit. Quis elit odio consequat conubia facilisis primis. Aliquam erat congue fusce a volutpat; lacus cursus. Eleifend aliquam luctus facilisis vivamus sed. Dignissim mauris consequat quis adipiscing auctor cursus.";
ourStoryArticle.append(ourStorySubtext, ourStoryHeader, ourStoryText);

const contactUsArticle = document.createElement('article');
contactUsArticle.id = 'contact-us';
const contactUsHeader = document.createElement('h2');
contactUsHeader.textContent = 'Contact Us';
const contactUsTelephone = document.createElement('p');
contactUsTelephone.textContent = '+1 (123) 456-7890';
const contactUsAddress = document.createElement('p');
contactUsAddress.textContent = '1234 Generic Restaurant St., Generic City, 12345';
const contactUsEmail = document.createElement('p');
contactUsEmail.textContent = 'GenericRestaurant@gmail.com';
contactUsArticle.append(contactUsHeader, contactUsTelephone, contactUsAddress, contactUsEmail);

about.append(experienceUsArticle, ourStoryArticle, contactUsArticle);

module.exports = about;
