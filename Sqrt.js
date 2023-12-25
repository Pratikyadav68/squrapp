import{useState,useRef} from 'react';
import axios from "axios";

function Sqrt()
{	const rNum = useRef();
	const [num,setNum]=useState("");
	const [ans,setAns]=useState("");

	const hNum =(event) =>{setNum(event.target.value);}

	const find =(event) =>{
		event.preventDefault();
		if (num =="")
		{
			alert("u did not enter number");
			setAns("");
			rNum.current.focus();
			return;
		}
		else if (parseFloat(num)<0)
		{
			alert("negative number not allowed");
			setAns("");
			rNum.current.focus();
			return;		
		}
		let url = "http://localhost:9000/find";
		let data = {params:{number:num}};
		axios.get(url,data)
		.then(res => setAns(res.data.msg))
		.catch(err => setAns("issue" + err));
		}
	return(
	<>
	<center>
	<h1> Squareroot App</h1>
	<form onSubmit={find}>
	<input type ="number" placeholder="enter number"
	onChange={hNum} value={num} ref={rNum}/>
	<br/><br/>
	<input type="submit" value="Find squrt"/>
	</form>
	<h2>{ans}</h2>
	</center>		
	</>
	);

}
export default Sqrt;