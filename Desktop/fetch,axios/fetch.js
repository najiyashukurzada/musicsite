const tBodyElement = document.querySelector("tbody");
fetch("https://northwind.vercel.app/api/customers/")
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     console.log(data);
     for (let i = 0; i < data.length; i++) {
       const trElement = document.createElement("tr");
       const tdElementId = document.createElement("td");
       const tdElementConmpanyName = document.createElement("td");
       const tdElementContactName = document.createElement("td");
       const tdElementContactTitle = document.createElement("td");
       const tdElementAddress = document.createElement("td");
       const street = data[i].address.street
       const country = data[i].address.country

       tdElementId.innerHTML = data[i].id;
       tdElementConmpanyName.innerHTML = data[i].companyName;
       tdElementContactName.innerHTML = data[i].contactName;
       tdElementContactTitle.innerHTML = data[i].contactTitle;
       tdElementContactName.innerHTML = data[i].contactName;
       tdElementAddress.innerHTML = `${street},${country}`;

       
       trElement.append(tdElementId, tdElementConmpanyName, tdElementContactName, tdElementContactTitle, tdElementAddress);
       tBodyElement.appendChild(trElement);    
       }
    });