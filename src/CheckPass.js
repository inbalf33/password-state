import { useState } from 'react';

function CheckPass(props) {

    const {toPass} = props;
    const [passStrength, setStrength] = useState ("Week Password")
    

    function checkStrength(){
        setStrength(
            function(){
                if (toPass.length < 3)
                return ("week");
            }
        );       
    }

    return (
      <div>
        <h2> {passStrength} </h2>
      </div>
    );
  }
  
  export default CheckPass;