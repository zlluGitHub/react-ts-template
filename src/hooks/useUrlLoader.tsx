import { useState, useEffect } from 'react'
// import axios from 'axios'
import { request } from '../utils/request'

const useURLLoader = (url: string, type: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    switch (type) {
      case 'get':
        request.get(url).then(result => {
          setData(result.data)
          setLoading(false)
        }).catch(function (error) {
          setData(error)
          setLoading(false)
          console.log(error);
        })
        break;
      case 'post':
        request.post(url).then(result => {
          setData(result.data)
          setLoading(false)
        }).catch(function (error) {
          setData(error)
          setLoading(false)
          console.log(error);
        })
        break;
    
      default:
        break;
    }
  
  }, deps)
  return [data, loading]
}

export default useURLLoader