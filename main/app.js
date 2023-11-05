
const compress = (a, b = true) => {
	
	if(typeof a !== 'string' || typeof b !== 'boolean')
	{
		throw new Error("InvalidType");
	}
	else if (a === ''){
		return '';
	}
	else if (b === true) {
	  let regex = /(.)\1*/g; 
	  let result = ''; 
	  let match = regex.exec(a); 
  
	  do {
		result += match[1] + (match[0].length > 1 ? match[0].length : 1);
		match = regex.exec(a);
	  } while (match);
  
	  return result;
	} 
	else if (b === false) {
		let regexDecompress = /(\D)(\d+)/g; 
	  	let result = '';
	  	let match; 
  
	
	  while ((match = regexDecompress.exec(a)) !== null) {
		let character = match[1]; 
		let count = parseInt(match[2]); 
		result += character.repeat(count); 
	  }
  
	  return result;
	} 
  };
  
  module.exports = compress;  
  
  
  
  
  
