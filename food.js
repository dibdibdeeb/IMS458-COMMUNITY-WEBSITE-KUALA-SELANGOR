const slider = document.querySelector('.food-slider');

const cards = Array.from(slider.children);

let index = 0;



function updateActiveCard() {

cards.forEach(card => card.classList.remove('active'));

if (cards[index + 1]) {

cards[index + 1].classList.add('active'); // tengah membesar

}

}



document.getElementById('next').addEventListener('click', () => {

const cardWidth = cards[0].offsetWidth + 30;

index++;

if (index > cards.length - 3) index = cards.length - 3;

slider.style.transform = `translateX(-${index * cardWidth}px)`;

updateActiveCard();

});



document.getElementById('prev').addEventListener('click', () => {

const cardWidth = cards[0].offsetWidth + 30;

index--;

if (index < 0) index = 0;

slider.style.transform = `translateX(-${index * cardWidth}px)`;

updateActiveCard();

});



/* Hover arrow → card ada motion */

document.getElementById('next').addEventListener('mouseenter', updateActiveCard);

document.getElementById('prev').addEventListener('mouseenter', updateActiveCard);



document.querySelectorAll('.slider-arrow').forEach(btn => {

btn.addEventListener('mouseleave', () => {

cards.forEach(card => card.classList.remove('active'));

});

});



/* ===== FOOD MODAL JS ===== */

const foodData = [

{

title: "Fresh Seafood",

desc: "Kuala Selangor is famous for its fresh seafood, featuring succulent crabs, prawns, tilapia, and clams sourced daily from the nearby Selangor River and coastal waters. Visitors can savor these delights at local seafood restaurants along Pasir Penambang and Sekinchan, where dishes are prepared using traditional Malaysian recipes, highlighting the natural flavors of the sea. From spicy sambal prawns to grilled fish and buttered crabs, every dish celebrates the town’s rich seafood heritage.",

img: "picture/fresh seafood2.jpg"

},

{

title: "Satay Selangor",

desc: "Satay in Kuala Selangor is a must-try traditional delicacy, featuring skewered marinated meats like chicken, beef, and lamb, grilled over charcoal for that smoky aroma. Served with rich peanut sauce, fresh cucumbers, and ketupat (rice cakes), these skewers are both flavorful and satisfying. Popular spots along Jalan Pasir Penambang and local night markets offer authentic satay experiences, allowing visitors to enjoy the perfect combination of tender meat, spicy-sweet sauce, and the town’s vibrant culinary culture.",

img: "picture/satay2.jpeg"

},

{

title: "Traditional Kuih",

desc: "Traditional kuih in Kuala Selangor showcases Malaysia’s rich cultural heritage through colourful, bite-sized cakes made from rice flour, coconut milk, gula melaka, and pandan. Popular varieties include kuih lapis, seri muka, kuih talam, and onde-onde, each offering unique textures—soft, chewy, or sweetly sticky. These traditional treats not only delight the taste buds but also provide a glimpse into local culinary artistry, easily found at Pasar Malam Kuala Selangor and local family-run kuih stalls.",

img: "picture/kuih2.jpg"

},

{

title: "Street Food",

desc: "Kuala Selangor is a paradise for street food lovers, offering an exciting variety of local delights. From smoky satay skewers and freshly fried noodles to colorful kuih, crispy fritters, and refreshing cendol, each dish bursts with authentic Malaysian flavors. Affordable, flavorful, and perfect for all ages, these street foods provide a true taste of local culture while you explore the vibrant night markets of the town.",

img: "picture/street food2.jpg"

},

{

title: "Malay Cuisine",

desc: "Malay cuisine in Kuala Selangor offers a delightful variety of traditional dishes such as nasi lemak, rendang, mee rebus, sambal sotong, and ayam masak merah. These dishes are rich in local spices, coconut milk, and fresh ingredients, creating aromatic and hearty meals that reflect Malaysia’s culinary heritage. Visitors can enjoy these authentic flavours at popular spots like Pasar Malam Kuala Selangor (night market), local Malay eateries along Jalan Tepi Sungai, and small family-run restaurants in the town center, making it a must-try experience for food lovers exploring the region.",

img: "picture/malay cuisine2.jpg"

},

{

title: "Desserts & Drinks",

desc: "Kuala Selangor is also famous for its sweet desserts and refreshing drinks that perfectly complement the tropical weather. Visitors can savour some of the best desserts like ais kacang, cendol, pulut durian, kuih-muih manis, and refreshing drinks such as teh tarik and fresh fruit juices. These delights are commonly found at Pasar Malam Kuala Selangor (night market), waterfront cafes along Sungai Selangor, and traditional dessert stalls in town, offering a delightful mix of flavours that are both refreshing and culturally rich, making them a must-try for anyone exploring the local food scene.",

img: "picture/dessert2.jpg"

}



];



const modal = document.getElementById('foodModal');

const modalImage = document.getElementById('modalImage');

const modalTitle = document.getElementById('modalTitle');

const modalDesc = document.getElementById('modalDesc');

const closeModal = document.getElementById('closeModal');



document.querySelectorAll('.food-card').forEach((card, i) => {

card.addEventListener('click', () => {

modal.style.display = 'flex';

modalImage.src = foodData[i].img;

modalTitle.textContent = foodData[i].title;

modalDesc.textContent = foodData[i].desc;

});

});



closeModal.addEventListener('click', () => {

modal.style.display = 'none';

});



window.addEventListener('click', (e) => {

if(e.target === modal) {

modal.style.display = 'none';

}

});

// Fungsi untuk active card (membesar bila arrow hover)

function updateActiveCard() {

cards.forEach(card => card.classList.remove('active'));

if (cards[index + 1]) {

cards[index + 1].classList.add('active'); // card tengah membesar

}

}



// Arrow hover → trigger motion

document.getElementById('next').addEventListener('mouseenter', updateActiveCard);

document.getElementById('prev').addEventListener('mouseenter', updateActiveCard);



// Arrow leave → remove motion

document.querySelectorAll('.slider-arrow').forEach(btn => {

btn.addEventListener('mouseleave', () => {

cards.forEach(card => card.classList.remove('active'));

});

});