import axios from 'axios';

export default function templates() {
  const api = "https://1390279131788301.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/encrypt-http-CLIENTID/nodejs8/"
  return axios.get(api).then(res => {
    return res.data
  })
}