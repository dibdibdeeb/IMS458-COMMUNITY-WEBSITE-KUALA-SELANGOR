const slider = document.querySelector('.food-slider');

const cards = Array.from(slider.children);

let index = 0;



function updateActiveCard() {

    cards.forEach(card => card.classList.remove('active'));

    if (cards[index + 1]) {

        cards[index + 1].classList.add('active');

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



/* Hover arrow → card motion */

document.getElementById('next').addEventListener('mouseenter', updateActiveCard);

document.getElementById('prev').addEventListener('mouseenter', updateActiveCard);

document.querySelectorAll('.slider-arrow').forEach(btn => {

    btn.addEventListener('mouseleave', () => {

        cards.forEach(card => card.classList.remove('active'));

    });

});



/* MODAL JS */

const communityData = [

    {

        title: "Local Markets",

        desc: "Kuala Selangor’s local markets, like Pasar Malam Kuala Selangor and Kampung Kuantan Market, are buzzing hubs of culture and flavor. Visitors can discover the town’s most interesting offerings, from freshly caught seafood, handmade traditional kuih, exotic tropical fruits, to unique artisanal crafts. Each market stall tells a story of local heritage, and wandering through these vibrant markets gives you a true taste of the community’s life, flavours, and creativity—all in one lively, colorful experience.",

        img: "picture/clocalmarket2.jpg"

    },

    {

        title: "Community Festivals",

        desc: "Kuala Selangor hosts vibrant community festivals that bring the town together, such as the Firefly Festival at Kampung Kuantan and the Kuala Selangor Cultural Carnival at the town square. At these events, visitors can witness traditional dances, live music performances, and cultural parades, explore local handicraft and food stalls, and participate in interactive workshops that highlight the community’s heritage. These festivals are lively celebrations where locals and tourists alike can enjoy arts, crafts, culinary delights, and family-friendly activities, making them a perfect way to experience the culture and spirit of Kuala Selangor.",

        img: "picture/Cfestival2.jpg"

    },

    {

        title: "Fishing Villages",

        desc: "Kuala Selangor is home to charming fishing villages such as Pasir Penambang and Sekinchan, where visitors can witness the daily lives of local fishermen. These villages offer a glimpse into traditional fishing practices, with wooden boats lining the shore and fresh catches like crabs, prawns, and tilapia being sold directly from the boats. Visitors can also enjoy boat rides, seafood sampling, and photography of scenic riverside and coastal landscapes, making these villages a serene and authentic experience that highlights the town’s maritime heritage and local community lifestyle.",

        img: "picture/Cfishing2.jpg"

    },

    {

        title: "Art & Handicrafts",

        desc: "Kuala Selangor showcases a vibrant arts and handicrafts scene, particularly at places like Kampung Kuantan and local artisan markets. Visitors can explore traditional crafts such as batik painting, handmade pottery, woven mats, and intricate wood carvings, all reflecting the rich cultural heritage of the area. These creative hubs also offer workshops and demonstrations, where locals and tourists can learn techniques directly from skilled artisans. Collecting unique souvenirs, admiring intricate designs, and engaging with the local artistic community makes this a culturally enriching experience for all who visit.",

        img: "picture/Cartshandicrafts2.jpg"

    },

    {

        title: "Volunteer Programs",

        desc: "Kuala Selangor offers a variety of volunteer programs that allow visitors and locals to contribute to the community while gaining meaningful experiences. Programs are available through organizations like Kuala Selangor Nature Society and local community centers, focusing on environmental conservation, mangrove restoration, beach clean-ups, and educational outreach for children. Participants can engage directly with local residents, learn about the region’s ecological and social challenges, and make a positive impact while fostering connections within the community. These programs provide both a rewarding and educational experience for anyone looking to give back while exploring Kuala Selangor.",

        img: "picture/Cvolunteer2.jpg"

    },

    {

        title: "Local Cuisine Sharing",

        desc: "Kuala Selangor also offers local cuisine sharing experiences, where visitors can immerse themselves in traditional Malay cooking and food culture. Held at community kitchens and family-run eateries, participants get hands-on opportunities to learn how to prepare dishes like nasi lemak, rendang, mee rebus, and sambal sotong, guided by local chefs and home cooks. These sessions not only teach cooking techniques but also share stories behind each dish, highlight the use of local spices and ingredients, and allow visitors to taste authentic flavors. It’s an interactive way to connect with the local community, appreciate culinary heritage, and enjoy delicious, home-cooked meals straight from Kuala Selangor’s kitchens.",

        img: "picture/Ctogether2.jpg"

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

        modalImage.src = communityData[i].img;

        modalTitle.textContent = communityData[i].title;

        modalDesc.textContent = communityData[i].desc;

    });

});



closeModal.addEventListener('click', () => { modal.style.display = 'none'; });

window.addEventListener('click', e => { if(e.target === modal) modal.style.display = 'none'; });