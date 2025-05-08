const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

  let currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

const navBottom = document.querySelector(".navBottom");
    menuItems.forEach((element, index)=>{
        element.addEventListener("click",(ev)=>{
            wrapper.style.transform = `translateX(${index * -100}vw)`;
            choosenProduct = products[index];

            currentProductTitle.textContent = products[index].title;
            currentProductPrice.textContent = products[index].price;
            currentProductImg.src = products[index].colors[0].img;

            currentProductColors.forEach((e,i)=>{
                    e.style.backgroundColor = products[index].colors[i].code;
            })
        })
    })
    /*
    e.addEventListener("click", (ev)=>{
        currentProductImg.src = products[index].colors[i].img;
    })
    */
    currentProductColors.forEach((el,ind)=>{
        el.addEventListener("click",(ev)=>{
            
            currentProductImg  = products[choosenProduct.id].colors[ind].img;
            console.log(choosenProduct.id);
            console.log(ev.target);
        })
    })