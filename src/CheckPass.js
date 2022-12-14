import { useState, useEffect } from 'react'; 

function CheckPass(props) {

    const {password} = props;
    const {prevent} = props;
    const [massege, setMessage] = useState ("Week Password");
    
    useEffect(()=>{
      if (password.length <= 2){
        setMessage("Week Password");
        prevent(true);
      }
      else if (password.length > 2 && password.length <=6 ){
        setMessage("Medium Password");
        prevent(false);
      }
      else {
        setMessage("Strong Password");
        prevent(false);
      }
    },[password,prevent])

    return (
      <div>
        <h2> {massege} </h2>
      </div>
    );
  }
  
  export default CheckPass;