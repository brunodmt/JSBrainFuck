function execute(){
	var programArea = document.getElementById('programArea');
	var inputArea = document.getElementById('inputArea');
	var outputArea = document.getElementById('outputArea');
	var runButton = document.getElementById('runButton');
	
	programArea.disabled = true;
	inputArea.disabled = true;
	runButton.disabled = true;
	
	var program = programArea.value;
	var input = inputArea.value;
	var output = runScript(program, input);
	
	outputArea.value = output;

	programArea.disabled = false;
	inputArea.disabled = false;
	runButton.disabled = false;
	
}
