import axios from 'axios'

const GET_API_ENDPOINT =
  'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter.json'
const PUT_API_ENDPOINT =
  'https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json'

export const getCounterValue = async () => {
  const { data } = await axios.get<number | null>(GET_API_ENDPOINT)
  return data
}

export const putCounterValue = (counterValue: number) =>
  axios.put(PUT_API_ENDPOINT, { counter: counterValue })
