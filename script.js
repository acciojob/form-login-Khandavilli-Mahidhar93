function getFormvalue() {
    //Write your code here
	let inp = query.selectAll("input");
	let f_name=inp[0].value
	let l_name=inp[1].value
	let name=f_name+ " " + l_name
	alert(name)

}
