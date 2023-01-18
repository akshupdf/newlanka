import Admina from "../../admin";
import Sidenav from "../sidenav";


function Leads () {
    return(
        <div className="w-[100%] flex ">
            <div className="w-[20%]"><Sidenav /></div>
            <div className="w-[80%] mt-20">
                <Admina />
            </div>

        </div>
    )
}

export default Leads;