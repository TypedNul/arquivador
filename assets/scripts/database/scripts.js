async function fetchData() {
	console.log("iniciando fetchData()");

	let url = "handler.php"; 
	
	try {
		const response = await fetch(url);
		
		if (!response.ok) {
			throw new Error('resposta da network não teve sucesso')
		}
		
		console.log("finalizando com sucesso fetchData()")
		return await response.json();
	} catch (error) {
		console.error('houve um erro com a operação fetch:', error);
	}
}

async function processData() {
	console.log("iniciando processData()");
	
	var jsonData = json.parse(await fetchData());
	const saidaContainer = document.getElementById("saida-container");
	const historiasDropdown = document.getElementById("historias-dropdown");
	
	jsonData.forEach(lista => {
		const opc = document.createElement("option");
		opc.textContent = lista;
		
		historiasDropdown.appendChild(opc);
	})
		
	}
}
