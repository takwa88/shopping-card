
let product = [
    {
        id: 1,
        image: 'icons/apple.png',
        title: 'Apple of Sbiba',
        like: true,
        quantity: 1,
        price: 120
    },
    {
        id: 2,
        image: 'icons/bread.png',
        title: 'french baguette',
        like: false,
        quantity: 4,
        price: 150
    },
    {
        id: 3,
        image: 'icons/egg.png',
        title: 'Omega 3 Eggs',
        like: true,
        quantity: 3,
        price: 230
    },
    {
        id: 4,
        image: 'icons/fish.png',
        title: 'frozen Mauritania fish',
        like: true,
        quantity: 5,
        price: 100
    },
    {
        id: 5,
        image: 'icons/meat.png',
        title: 'Tom and Jerry meat',
        like: false,
        quantity: 7,
        price: 100
    },
    {
        id: 6,
        image: 'icons/pepper.png',
        title: 'Red bell pepper ',
        like: false,
        quantity: 2,
        price: 100
    },
    {
        id: 7,
        image: 'icons/meats.png',
        title: 'Cartoon meat',
        like: false,
        quantity: 5,
        price: 100
    },
    {
        id: 8,
        image: 'icons/rice.png',
        title: 'Basmati rice',
        like: true,
        quantity: 2,
        price: 100
    }

]

let categories = product.map((item) => { return item });
let logos = categories.map((item) => { return item.image });
console.log(logos);
function addQuantity(id) {
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].quantity++;
    displaycart();
}
function removeQuantity(id) {
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].quantity = Math.max(0, categories[found].quantity - 1);
    displaycart();
}


function change(id) {
    console.log(id);
    let found = categories.findIndex(obj => obj.id === id);
    categories[found].like = !categories[found].like;
    console.log(categories[found]);
    displaycart();
}

function delElement(a) {
    const element = categories.find((element) => element.id == a);
    categories.splice(categories.indexOf(element), 1);

    console.log(element.image);
    logos.splice(logos.indexOf(element.image), 1, "");
    console.log(logos);
    displaycart();
}

function checkoutFunction() {
    alert(document.getElementById("totalA").innerText);
}

function displaycart() {
    let j = 0; total = 0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if (categories.length == 0) {

        document.getElementById("totalA").innerHTML = "0.0";
        document.getElementById("totalB").innerHTML = "0.0";
        document.getElementById("root").innerHTML = "EMPTY";
        document.getElementById("basket").innerHTML = `<img id="basket" class="img3" src="icons/shopping-basket.png" />`;

    } else {
        document.getElementById("basket").innerHTML =
            `<img id="basket" class="img3" src="icons/shopping-basket.png" />
                <img class="img4" src="${logos[0]}" />
                <img class="img5" src="${logos[1]}" />
                <img class="img6" src="${logos[2]}" />
                <img class="img7" src="${logos[3]}" />
                <img class="img8" src="${logos[4]}" />
                <img class="img9" src="${logos[5]}" />
                <img class="img10" src="${logos[6]}" />
                <img class="img11" src="${logos[7]}" />
                `;

        document.getElementById("root").innerHTML = categories.map((items) => {
            let { id, image, title, like, quantity, price } = items;
            price = price * quantity;
            total = total + price;
            document.getElementById("totalA").innerHTML = total + " DT";
            document.getElementById("totalB").innerHTML = total + " DT";

            return (
                `<tr>
                     <td style="display:none;">${id}</td>
                     <td style="width:10%;"><div class="img-box"><img class="img" src=${image}></div></td>
                     <td style="width:30%;"><p style='font-size:15px;'>${title}</p></td>
                     <td style="width:10%;"><img id="black-heart" class="heart" onclick="change(${id})" src=${(like) ? "icons/heart.png" : "icons/heart2.png"}></td>
                    
                     <td  style="width:5%;"><img style="width:25px;" id="plus" src="icons/plus1.png" onclick="addQuantity(${id})"/></td>
                     <td  style="width:20%;"><output style="font-size:15px;font-weight:bold;">${quantity}</output></td>
                     <td  style="width:5%;"><img style="width:25px;" id="minus" src="icons/minus1.png" onclick="removeQuantity(${id})"/></td>
                     
                     <td  style="width:20%;"><h2 style='font-size:15px;color:red;'>${price} DT</h2></td>
                     
                     <td  style="width:10%;"><img style="width:25px;" id="delete" src="icons/remove.png" onclick="delElement(${id})"/></td>
                </tr>`
            );

        }).join('');
    }
} displaycart();

