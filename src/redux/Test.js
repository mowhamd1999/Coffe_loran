import React, { useState ,useEffect} from 'react'
import { getProducts } from '../services/api'
const Test = () => {
    const [data , setData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
          setData(await getProducts());
        }
        fetchAPI()
      }, [])
    console.log(data)
  return (
    <div>
      {data.map((item) => (
        <div>
            <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Test
