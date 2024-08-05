// ------yellow-tint-data-----------
const data1 = [
  {
    id: 1,
    h1: " Get smooth, hair-free skin with our Laser Hair Removal treatment!",
    p: "Experience the transformative effects of laser hair removal treatment. Utilizing advanced laser technology, this highly sought-after non-surgical cosmetic procedure offers a permanent solution for removing unwanted body hair and inhibiting regrowth.Trust in our expertise and join the countless individuals who have benefited from our exceptional laser hair removal services.",
    imgUrl: "../assets/images/laser-image.jpeg",
  },
  {
    id: 2,
    h1: " ",
    p: "Looking for laser hair removal services nearby? We are more than happy to assist you. Sunshine Cosmetic Clinic & Medi Spa is recognized as the No.1 Kitchener-Waterloo laser hair removal clinic. Our highly experienced and fully trained team of laser technicians is prepared to deliver outstanding results for laser hair removal in the Waterloo Kitchener area. <br/> <br/> The cost of laser hair removal in the Waterloo Kitchener Cambridge area depends on the size(s) of the area(s) to be treated and the number of treatment sessions required. At Sunshine Cosmetic Clinic and Medi Spa, We offer laser hair removal treatment packages with multiple sessions at a discounted price, while guaranteeing the best possible laser hair removal results in the Kitchener Waterloo area.",
    imgUrl: "../assets/images/laser-image2.jpeg",
  },
];
const container = document.getElementById("data-container-yellow-tint");

data1.forEach((item, index) => {
  const flexClass = index === 1 ? "flex-row-reverse" : "";
  const content = `
       <div class="wrapper d-flex ${flexClass} " key=${index}>

          <div class="content">
            <h1 class="playfair-display-bold">${item.h1}</h1>
            <p class="montserrat-thin-regular text-white">
            ${item.p}


            </p>

          </div>
          <div class="col-lg-6">
            <img src="${item.imgUrl}" alt="">
          </div>
        </div>
    `;

  container.innerHTML += content;
});


// ---------------before after data--------------------------
const data2 = [
  {
    id: 1,
    imgUrl: "../assets/images/hair-image.jpg",
  },
  {
    id: 2,
    imgUrl: "../assets/images/laser-removal.jpg",
  },
  {
    id: 3,
    imgUrl: "../assets/images/laser-removal2.jpg",
  },
];
const container2 = document.getElementById("data-container-before-after");

data2.forEach((item, index) => {
  const content = `
     <div class="" key=${index}>
    
    <img src="${item.imgUrl}" alt="" class="img-fluid card-img" style=" height: 180px;" >
    </div>
    
    `;
  container2.innerHTML += content;
});
// --------------------testimonialdata--------------------------
const testimonialsData = [
  {
    id: 1,
    name: "Jie Zhou",
    icon: "../assets/icons/star.png",
    rating: 5,
    reviews:
      "I did laser hair removal with them. The service was amazing, the hair gets less and soft after two times. After five times, there only few hair left even I didn't take care of them for two months.",
  },
  {
    id: 2,
    name: "Sam Worthman",
    icon: "../assets/icons/star.png",
    rating: 4,
    reviews:
      "I had laser hair removal done with Raquel, and she was amazing! She made me feel comfortable during my session and was very patient. I had a great experience at Sunshine Cosmetic Clinic and will definitely be back again!",
  },
  {
    id: 3,
    name: "Kazani Dunn",
    icon: "../assets/icons/star.png",
    rating: 5,
    reviews:
      "This clinic is so beautiful! They have all the top of the line equipment, professional and kind. I love coming for my appointments and the hydra facial is transforming! I've had it done twice and my hyperpigmentation is basically gone. They also carry ZO skin health which is my favourite medical grade line.",
  },
  {
    id: 4,
    name: "Salina Visram",
    icon: "../assets/icons/star.png",
    rating: 4,
    reviews:
      "A very professional, knowledgeable and results oriented spa! They provide state of the art technology and amazing results for laser hair removal!",
  },
];

const container3 = document.getElementById("cards");
const fragment = document.createDocumentFragment();

testimonialsData.forEach((item) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "custom-card shadow-lg pe-3 ps-3 pt-2 pb-3 rounded";

  const stars = Array.from(
    { length: item.rating },
    (_, index) =>
      `<img key="${index}" src="${item.icon}" alt="star" style="width: 15px" />`
  ).join("");

  cardDiv.innerHTML = `
      <div>
        <div>
          <h1 class="segoe-ui-medium" style="font-size: 24px; line-height: 28.8px">
            - ${item.name}
          </h1>
        </div>
        <div class="d-flex flex-column gap-2">
          <div>
            ${stars}
          </div>
          <div>
            <p class="montserrat-thin-regular" style="font-size: 14px; line-height: 21px; color: #212529">
              ${item.reviews}
            </p>
          </div>
        </div>
      </div>
    `;

  fragment.appendChild(cardDiv);
});

container3.appendChild(fragment);
