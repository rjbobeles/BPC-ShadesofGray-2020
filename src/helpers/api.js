import axios from 'axios'

const fetchStatus = async () => {
  let apiRes = {}

  await axios
    .post(process.env.VUE_APP_API_URL, {
      type: process.env.VUE_APP_API_TYPE,
      theme: process.env.VUE_APP_API_THEME,
    })
    .then((res) => {
      apiRes = res.data
    })
    .catch((err) => {
      apiRes = err.response.data
    })
  return apiRes
}

export default fetchStatus
