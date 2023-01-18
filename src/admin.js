import React, {useEffect, useState } from 'react'
import axios from 'axios'




function Admina() {

  const [data,setData] = useState([])
  useEffect(() => {
    showData();
}, [])

  const showData = () => {
  axios.get("http://localhost:5000/feedback").then((response) => {
   setData(response.data)
  

})
  }

  const remove = (id) => {
       
    fetch("http://localhost:5000/feedback/" +id, {
        method: "DELETE"
    }).then((res) => {
        alert('Record Removed')
        window.location.reload();
    }).catch((err) => {
        console.log(err)
    });
}
    return (
      <div>
      

     

            <table className="border-2 border-black">

              <thead>
              
        <tr className="border-2 border-black ">
          <th>Name</th>
          <th>Feedback</th>
          
        </tr>

        </thead>

        <tbody>
        {

data.map((data)=>{

  return (
      
        <tr className="border-2 border-black " key={data.id}>
        <td className="border-2 border-black w-40">{data.name}</td>
          <td className="border-2 border-black w-80">{data.feedback}</td>
          <td className="border-2 border-black w-40"><button className="bg-[#16a34a] rounded-l p-2 text-white">Edit</button> <button className="bg-[#dc2626] rounded-l p-2 text-white " onClick={()=>{remove(data.id)}}>Delete</button></td>
        
        </tr>
          )

        })
      }
 </tbody>
</table>

</div>
    ) 
  }
export default Admina;