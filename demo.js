
async function getproduct() {
  try {
    const response = await fetch("carts.json");
    const data = await response.json();
    function datacalling(data) {
      const pro_length = Object.keys(data.carts[0].products).length;

      for (let cart = 0; cart < pro_length; cart++) {
        const container = data.carts[0].products[cart];
        const pro_details = [
          container.id,
          container.title,
          container.price,
          container.quantity,
          container.thumbnail,
        ];
        let element = document.getElementById("container");
        let innerdiv = createElement('div');       
        element.appendChild(innerdiv);
        console.log(pro_details);
      }
    }

    datacalling(data);
    // console.log(datacalling(data));
  } catch (error) {
    console.log(error);
  }
}

getproduct();
