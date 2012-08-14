function runScript(s, input){
	var tapeLength = 30000
	var tape = []
	while(tapeLength--) tape.push(0)
		
	var pointer = 0

	var loopStack = new Array()
	
	var inputStream = input
	var inputPos = 0
	
	var outputStream = []
	var outputPos = 0
	
	var sLength = s.length;
	
	for(var i = 0; i < sLength; i++){
		switch(s[i]){
			case '>':
				pointer++
				break
			case '<':
				pointer--
				break
			case '+':
				tape[pointer]++
				break
			case '-':
				tape[pointer]--
				break
			case ',':
				tape[pointer] = inputStream.charCodeAt(inputPos++)
				break
			case '.':
				outputStream[outputPos++] = String.fromCharCode(tape[pointer])
				break
			case '[':
				if(tape[pointer] == 0){
					do{
						i++;
					}while(s[i] != ']')
				}else{
					loopStack.push(i)
				}
				break
			case ']':
				if(tape[pointer] == 0){
					loopStack.pop();
				}else{
					i = loopStack[loopStack.length - 1]
				}
				break
			default:
				break		
		}	
	}
	
	return outputStream.join("");
}


