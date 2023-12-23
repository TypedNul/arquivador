async function fetchData() {
    console.log("iniciando fetchData()");

    let url = "assets/scripts/database/handler.php";

    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Network response not OK, status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data: ", data);

        return data;
    } catch (error) {
        console.error('An error occurred during the fetch operation:', error);
    }
}

async function processData() {
    console.log("iniciando processData()");

    var jsonData = await fetchData();
    const historiasDropdown = document.getElementById("historias-dropdown");

    for (const key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            const opc = document.createElement("option");
            opc.textContent = key; // or jsonData[key] depending on your data structure
            historiasDropdown.appendChild(opc);
        }
    
	}
	
	console.log("finalizando processData()")
}

async function getMessage(data) {
	var jsonData = data;

	console.log("iniciando getMessage()");
	
    const historiasDropdown = document.getElementById("historias-dropdown");
	const historiasLabel = document.getElementById("mensagem-label");
	const mensagem = document.getElementById("mensagem");
	const inputMensagem = document.getElementById("entrada-mensagem");
	const mensagensMaximas = document.getElementById("mensagens-maximas");

	var historiaSelecionada = historiasDropdown.options[historiasDropdown.selectedIndex].textContent;
	var mensagemSelecionada = inputMensagem.value; 

	if (!mensagemSelecionada) {
    	mensagemSelecionada = 1;
	}


	console.log("história selecionada: ", historiaSelecionada);
	console.log("mensagem selecionada: ", mensagemSelecionada);

    if (jsonData.hasOwnProperty(historiaSelecionada)) {
		const jsonArray = JSON.parse(jsonData[historiaSelecionada]);
	
		if (Array.isArray(jsonArray) && jsonArray.length > 0) {
			if (mensagemSelecionada >= 1 && mensagemSelecionada <= jsonArray.length) {
				const selectedArray = jsonArray[mensagemSelecionada - 1]; 

				const usuario = selectedArray.Usuário;
				const j_mensagem = selectedArray.Mensagem;
	
				historiasLabel.textContent = usuario;
				mensagensMaximas.textContent = jsonArray.length;
				mensagem.textContent = j_mensagem; 
	
				console.log("Usuário: ", usuario);
				console.log("Mensagem: ", j_mensagem);
			} else {
				console.log("index fora de alcance");
			}
		}
	

	console.log("finalizando processData()");
}
}


async function refresh() {
	getMessage(await fetchData());
}

addEventListener('DOMContentLoaded', processData);