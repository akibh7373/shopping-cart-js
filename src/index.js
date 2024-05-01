let shop = document.getElementById("shop");
let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-4.jpg",
  },
  {
    id: "thiecbawdjksadjk",
    name: "Mens Tie",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-5.png",
  },
  {
    id: "iuertrywebncdjksadjk",
    name: "Casual shoes",
    price: 200,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-6.png",
  },
  {
    id: "thierytbvcbvzdhadjk",
    name: "black suit",
    price: 450,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-7.png",
  },
  {
    id: "trfoiwfcnbcawdjksadjk",
    name: "polo shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-8.png",
  },
  {
    id: "cbvxbcvsceldk",
    name: "denim shirt",
    price: 85,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-9.png",
  },
  {
    id: "oiopijmjkhuihb",
    name: "denim pants",
    price: 120,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-10.png",
  },
  {
    id: "oiopijewyiohbjhib",
    name: "basic cap",
    price: 35,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-11.png",
  },
  {
    id: "rtytytuyuytyytbvncv",
    name: "leather boots",
    price: 350,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "img/img-12.png",
  },
];
let basket = [];
let generateItems = () => {
  return (shop.innerHTML = shopItemsData
    .map(({ id, name, price, desc, img }) => {
      return `
        <div id="${id}" class="item">
          <img width="200" src="${img}" alt="${img}" />
              <div class="dt">
                <h3>${name}</h3>
                <p>
                  ${desc}
                </p>
                <div class="price-qnt">
                  <h2>$${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash"></i>
                        <span id="${id}}" class="qnt">0</span>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};
generateItems();
let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search === undefined) {
    basket.push({
      id: selectedItem,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  console.log(basket);
  update(selectedItem);
};

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  console.log(basket);
  update(selectedItem);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.querySelector(".qnt").innerHTML = search.item;
  console.log(search.item);
};
