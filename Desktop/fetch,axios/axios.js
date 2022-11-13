const tBodyElement = document.querySelector("tbody");
axios("https://northwind.vercel.app/api/customers/")
.then(function (response) {
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    const trElement = document.createElement("tr");
    const tdElementId = document.createElement("td");
    const tdElementConmpanyName = document.createElement("td");
    const tdElementContactName = document.createElement("td");
    const tdElementContactTitle = document.createElement("td");
    const tdElementAddress = document.createElement("td");
    const street = response.data[i].address.street
    const country = response.data[i].address.country

    tdElementId.innerHTML = response.data[i].id;
    tdElementConmpanyName.innerHTML = response.data[i].companyName;
    tdElementContactName.innerHTML = response.data[i].contactName;
    tdElementContactTitle.innerHTML = response.data[i].contactTitle;
    tdElementContactName.innerHTML = response.data[i].contactName;
    tdElementAddress.innerHTML = `${street},${country}`;

    trElement.append(tdElementId, tdElementConmpanyName, tdElementContactName, tdElementContactTitle, tdElementAddress);
    tBodyElement.appendChild(trElement);    
    }
 });
