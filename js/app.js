// selectors
const app = document.querySelector("#app");
const recordForm = app.querySelector("#recordForm")
const productSelect = app.querySelector("#productSelect")
const quantityInput = app.querySelector("#quantityInput")
const recordGroup = app.querySelector("#recordGroup")
const recordTotal = app.querySelector("#recordTotal")

//data
const products = [
    {
        id: 1,
        name: "M2 MacBook Pro 17",
        price: "1000"

    }
    ,
    {
        id: 2,
        name: "I phone 15 pro max",
        price: "1000"

    }
    , {
        id: 3,
        name: "M1  MacBook Pro 17",
        price: "2000"

    }, {
        id: 4,
        name: "M1  MacBook air 14",
        price: "1500"


    }, {
        id: 5,
        name: "M2  MacBook air 14",
        price: "1200"


    }
]




//functions
const productOption = (name, id) => {
    const option = document.createElement("option")
    option.innerText = name;
    option.value = id;
    return option;
};
const createUi = (productName, productPrice, quantity) => {
    const cost = productPrice * quantity;
    const tr = document.createElement("tr")
    tr.className = "bg-white dark:bg-gray-800";
    tr.innerHTML = `
    
    <th
    scope="row"
    class="px-6 py-4 font-medium  th-counter text-gray-900 whitespace-nowrap dark:text-white"
  >
    
  </th>
    
    <th
    scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  >
    ${productName}
  </th>
 
  <td class="px-6 py-4 text-end">${productPrice}</td>
  <td class="px-6 py-4 text-end">${quantity}</td>
  <td class="px-6 py-4 text-end record-cost">${cost}</td>
 `
    return tr;
}
const productRender = (items) => {
    items.forEach(({ id, name }) =>

        productSelect.append(new Option(name, id))
    );
};


// let total=0;
const calculateRecordTotal = () => {
    const total = [...app.querySelectorAll(".record-cost")].reduce((pv, cv) => pv + parseFloat(cv.innerText), 0)

    recordTotal.innerText = total;
    return total;
}




//initial runner

productRender(products)


//handler
const recordFormHandler = (event) => {
    event.preventDefault();
    const currentProduct = products.find(product => product.id == productSelect.value)
    // console.log(currentProduct);
    // console.log(quantityInput.valueAsNumber);



    recordGroup.append(createUi(currentProduct.name,
        currentProduct.price, quantityInput.valueAsNumber));

    recordForm.reset();
    calculateRecordTotal();

}


//Listener
recordForm.addEventListener("submit", recordFormHandler)

