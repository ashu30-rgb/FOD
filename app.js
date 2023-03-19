const cards = document.querySelector("#card-box");

const data = [
  {
    id: "1",
    name: "Air Fresh",
    description:
      "Fully furnished single room with attached kitchen and washroom with facilities like lift and genset back-up inside the premises. Rooms are available with private balcony and private terrace. Every room contains all basic facilities like double bed, Almirah, AC, Gyser, water purifier, spring mattress, led Smart tv with study table and chair etc.",
    img: "air fresh",
    price: "12,999",
    link: "https://wa.me/p/6209923055738621/919501909482",
  },
  {
    id: "2",
    description:
      "Fully furnished single room with separate kitchen and living room. With Aminities like Double bed, Almirah, smart led tv, refrigerator, water purifier, Gyser etc located near Red Apple Apartment",
    name: "HARIOM APARTMENT",
    img: "hari om",
    price: "12,000",
    link: "https://wa.me/p/9113731952000490/919501909482",
  },

  {
    id: "3",
    name: "THE Legend Villa",
    description:
      "Fully furnished single room room with separate kitchen and attached washroom private balcony rooms are also available with Aminities like Double bed, Almirah, smart led tv, refrigerator, water purifier, Gyser, etc this building situated near main gate of green valley",
    img: "the legend villa",
    price: "12,999",
    link: "https://wa.me/p/5845815905471567/919501909482",
  },
  {
    id: "4",
    name: "MS APARTMENT",
    description:
      "Fully furnished single room with separate living room ,kitchen and  attached washroom. Located at prime location in green valley 60ft road . With Aminities like Double bed, Almirah, smart led tv, refrigerator, water purifier, Gyser and free wifi",
    img: "ms",
    price: "15,999",
    link: "https://wa.me/p/5960645590686386/919501909482",
  },
  {
    id: "5",
    name: "ADDICTION PG",
    description:
      "Fully furnished single room size (14×16)with attached kitchen,washroom and with balcony in prime location near Aashina with Aminities like Double bed , Almirah, AC , Refrigerator, Gyser, Smart LED TV, water purifier, study table and chair etc",
    img: "addiction",
    price: "11,999",
    link: "https://wa.me/p/5660600500704664/919501909482",
  },
  {
    id: "6",
    name: "KK BHARGAV",
    description:
      "Fully furnished single room with separate washroom and kitchen with Aminities like sofa set double bed,Ac, Refrigerator, Gyser, water purifier, power backup etc",
    img: "kk bhargaw",
    price: "14,999",
    link: "https://wa.me/p/5245071615596664/919501909482",
  },
  {
    id: "7",
    name: "THE CASTLE",
    description:
      "Fully Furnished Single Room with separate kitchen with Extra facilities like :- Daily housekeeping inside  the room , Genset backup , premium location with bike and  car parking ,free wifi ,24 hr security guard etc",
    img: "the castle",
    price: "10,000",
    link: "https://wa.me/p/3836113473087270/919501909482",
  },
  {
    id: "8",
    name: "VIJ APARTMENT",
    description:
      "Fully furnished single room with attached pantry with aminities like double bed, almirah, AC, Refrigerator,water purifier, Gyser, power back, Led tv , free wifi etc it's located in green valley colony .",
    img: "vij",
    price: "10,000",
    link: "https://wa.me/p/4526348527398759/919501909482",
  },
  {
    id: "9",
    name: "Red Apple tower",
    description:
      "Fully furnished single room with attached seprate kitchen and washroom with aminities like Double bed with mattress,Ac, Seprate almirah for 2 persons, Smart led tv, refrigerator, water purifier, Gyser, microwave study table chair and free wifi on floors are available.",
    img: "red apple tower",
    price: "11,000",
    link: "https://wa.me/p/7571887062886068/919501909482",
  },
  {
    id: "10",
    name: "RED APPLE LIVING",
    description:
      "Fully Furnished Single Room Independent Apartment with some add on Aminities like i.e(Smart tv,Solar Power Backup, Microwave and proper Ventilation in every rooms.",
    img: "red apple living",
    price: "10,000",
    link: "https://wa.me/p/4272446899463194/919501909482",
  },
  {
    id: "11",
    name: "AASHIRWAD PG",
    description:
      "Fully Furnished luxury Single Room with Pantry. Aminities i.e - AC , Refrigerator, Double bed, Almirah, Gyser, LED TV, Free wifi, Power backup, water purifier etc",
    img: "aashirwad",
    price: "8,000",
    link: "https://wa.me/p/5377896108902136/919501909482",
  },
  {
    id: "12",
    name: "MEHAR RESIDENCY",
    description:
      "Fully furnished single room with attached washroom with aminities like Double bed, AC, Refrigerator, LED TV, Almirah, Gyser water purifier, wifi ,etc",
    img: "mehar",
    price: "7500",
    link: "https://wa.me/p/5094752917250186/919501909482",
  },
  {
    id: "13",
    name: "FOD TOWER",
    description:
      "Fully furnished single room(12×14) with separate full size kitchen with aminities like Double bed, AC, Refrigerator, LED TV, Almirah, Gyser, water purifier, free wifi and with proper garden area for sitting in common area.",
    img: "fod tower",
    price: "9,500",
    link: "https://wa.me/p/5064788903533426/919501909482",
  },
  {
    id: "14",
    name: "HD APARTMENT",
    description:
      "Fully Furnished Single Room with separate pantry Aminities :- Double bed, Almirah, AC, Refrigerator, LED Tv, Water Purifier, Gyser , Power Backup (Genset) etc",
    img: "hd",
    price: "8,000",
    link: "https://wa.me/p/4610497985687306/919501909482",
  },
  {
    id: "15",
    name: "ATTARI HOUSE",
    description:
      "Fully furnished single room with separate living room and kitchen with balcony . situated at main entrance of green valley . with aminities like double bed, sofa , smart LED tv, Refrigerator, water purifier, Gyser, power back, study table chair, free wifi etc",
    img: "attari",
    price: "14,999",
    link: "https://wa.me/p/3972524282852061/919501909482",
  },
  {
    id: "16",
    name: "THE JOLLY HOUSE",
    description:
      "Fully furnished single room with attached living room (with sofa). Fully independent and  private balcony with extra aminities like smart led tv, microwave and fully cross ventilated building in prime location of green valley",
    img: "jolly",
    price: "14,999",
    link: "https://wa.me/p/4387614431299423/919501909482",
  },
  {
    id: "17",
    name: "MITTAL APARTMENT",
    description:
      "Fully furnished single room with attached pantry and washroom along with separate balcony with aminities like double bed, almirah, AC, Refrigerator, water purifier, Gyser, power back up etc",
    img: "mittal",
    price: "8,000",
    link: "https://wa.me/p/6026780977363847/919501909482",
  },
  {
    id: "18",
    name: "SHREE BALAJI HAVELI",
    description:
      "Shree Balaji HAVELI (PG) Luxury rooms attached bathroom, kitchen with hot & cold water. Free swimming pool, Gym & WiFi. Luxury sofa (Maharaja). Car parking space in side the PG. 24*7 security , Electricity & water supply.",
    img: "balaji",
    price: "11,001",
    link: "https://wa.me/p/3566182820082241/919501909482",
  },
  {
    id: "19",
    name: "PUJARA APARTMENT",
    description:
      "Fully Furnished Single Room with separate kitchen and aminities i.e Double bed, Almirah,A C, Refrigerator, Gyser, Water purifier, LED TV, Study table, Chair, wifi etc",
    img: "pujara",
    price: "8,000",
    link: "https://wa.me/p/3767322500021086/919501909482",
  },
  {
    id: "20",
    name: "SKG PG",
    description:
      "Fully Furnished spacious Single Room with Pantry size (14*16) Aminities i.e AC , Refrigerator, Double bed,Almirah, Gyser, Water purifier, LED TV etc",
    img: "skg",
    price: "8,000",
    link: "https://wa.me/p/3575788565880816/919501909482",
  },
  {
    id: "21",
    name: "SHREE KRISHNA APARTMENT",
    description:
      "Fully Furnished luxury Single Room with separate kitchen and attached washroom. Aminities i.e- AC, Refrigerator, Double bed, Almirah, Smart LED TV, Free wifi, Power backup, Gyser, Water purifier, Study table chair, with cieling lights",
    img: "shree krishna",
    price: "9,000",
    link: "https://wa.me/p/5400653763279839/919501909482",
  },
  {
    id: "22",
    name: "RAO HOMES",
    description:
      "Fully Furnished luxury Single Room with Pantry. Room  size(14*16) with or without private balcony  Aminities i.e AC, Refrigerator, Double bed, Gyser, Almirah, study table chair etc",
    img: "rao",
    price: "8,500",
    link: "https://wa.me/p/4141487625861583/919501909482",
  },
  {
    id: "23",
    name: "ARORA PG",
    description:
      "Fully Furnished luxury single room with Pantry with private balcony. Aminities i.e AC, Refrigerator, Double bed, Almirah, Gyser, LED tv 32 inch, power backup, wifi, study table chair etc",
    img: "arora",
    price: "8,000",
    link: "https://wa.me/p/3771879936204548/919501909482",
  },
  {
    id: "24",
    description:
      "Fully Furnished 1 Room with Pantry with Aminities like double bed ,Ac, refrigerator,gyser, Almirah (2 separate),Led TV with set top box, water purifier study table and chair etc.",
    name: "RED APPLE APARTMENT",
    img: "red apple apartment",
    price: "8,000",
    link: "https://wa.me/p/3398199186914740/919501909482",
  },
];

const showCards = () => {
  cards.innerHTML = "";
  data.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
<div id="${data.id}" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/Assets/${data.img}/Unknown-5" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/Assets/${data.img}/Unknown-6" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/Assets/${data.img}/Unknown-7" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${data.id}"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${data.id}"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${data.name} - Rs.${data.price}</h5>
                <p class="card-text">${data.description}</p>
                <a href="${data.link}" target="_blank" class="btn btn-primary">Book Now</a>`;

    cards.appendChild(card);
  });
};

showCards(data);


document.getElementById("search-button").addEventListener("click",


  function(){
  
const result = [];
   
  const toSearch = document.getElementById("search-bar").value;

    for (let i = 0; i < data.length; i++) {
      for (key in data[i]) {
        if (data[i][key].indexOf(toSearch) != -1) {
          result.push(data[i]);
        }
      }
    }
    if(toSearch=="" || result ==""){
      console.log("No data found")
      cards.innerHTML = "";
      cards.innerHTML = `
      <h1>Sorry, No Such data found</h1>
      `
    }
    
      else{
    cards.innerHTML = "";
    result.forEach((result) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
<div id="${result.id}" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/Assets/${result.img}/Unknown-5" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/Assets/${result.img}/Unknown-6" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="/Assets/${result.img}/Unknown-7" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${result.id}"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${result.id}"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="card-body">
                <h5 class="card-title">${result.name} - Rs.${result.price}</h5>
                <p class="card-text">${result.description}</p>
                <a href="${result.link}" target="_blank" class="btn btn-primary">Book Now</a>`;
                console.log(result)

    cards.appendChild(card);
  });
}
  
}

)
