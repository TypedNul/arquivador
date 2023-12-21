document.addEventListener('DOMContentLoaded',function() {
	var botaoInicial = document.getElementById('criarBotao');
	
	botaoInicial.addEventListener('click', function() {
		var novoBotao = document.createElement('button');
		novoBotao.textContent = document.getElementbyId('textInput').value;
		
		document.body.appendChild(novoBotao);
	})
	
	
})