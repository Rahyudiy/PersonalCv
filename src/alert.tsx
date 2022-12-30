import { useState } from "react";
import "./cvku.css";
    
function Alertuser (){

    const [gmail, setUsrGmail] = useState ("");

    function alertusr (){
        alert('Alamat Gmail Anda : ' + gmail);
    }

    return(
        <div className="input">
            <h2>Gmail :</h2>
            <input type="text" value={gmail} onChange={e => setUsrGmail(e.target.value)} placeholder="Enter your gmail addres"></input>
            <button onClick={alertusr} type='submit' >Submit</button>

        </div>
    )

}

export default Alertuser;