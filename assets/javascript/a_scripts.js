async function fetchData() {
  let url = "http://localhost:8888/assets/javascript/database/texts.json";
  console.log("iniciando fetchData()");
  
  try {
    // make a request to the server and wait for the response
    const response = await fetch(url);

    // check if the request was successful
    if (!response.ok) {
      throw new Error('resposta da network não teve sucesso');
    }

    // parse the JSON in the response
    return await response.json();
	
  } catch (error) {
    // handle errors
    console.error('houve um erro com a operação fetch:', error);
  }
}
		
async function processData() {
  console.log("iniciando processData()");
  const jsonData = await fetchData();
  const mensagensContainer = document.getElementById('mensagens-container');
  
  jsonData.indefinido.forEach(message => {
    const paragraph = document.createElement('p');
    paragraph.textContent = message.mensagem;
    
    paragraph.classList.add(message.usuario);
    
    mensagensContainer.appendChild(paragraph);
  });
}