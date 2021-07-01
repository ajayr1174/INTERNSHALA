async function gethandler() {
  const response = await fetch(
    "https://run.mocky.io/v3/1190e250-facf-4fff-83c9-51f5557ddcef"
  );
  const data = await response.json();
  return data;
}

const data = gethandler();

const list = document.querySelector(".list");

data
  .then((ele) => {
    let child = "";
    ele.clients.forEach((val) => {
      child += `
        <tr>
            <th scope="row">
                 <span class="client-id text-primary">${val.id}</span>
            </th>
            <td>
                <span class="closing-agent" >${val.name}</span>
            </td>
            <td>
                           <span class="company">${val.company} </span>
                       </td>
            <td><span class="order">
             ${val.orderId}
            </span></td>
            <td><span class="invoice-paid">
               $${val.invoicepaid} 
            </span></td>
        </tr>

        
`;
      list.innerHTML = child;
    });
  })
  .catch((err) => console.log(err));
