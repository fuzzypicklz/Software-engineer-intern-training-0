function processJSON(input){
	list = []
	for(let i=0; i <= input.arrays.length-1; i++){
		list.push([input.arrays[i].user,input.arrays[i].password,input.arrays[i].keyNumbers])
	}
	return list
}
module.exports={
	processJSON
}
