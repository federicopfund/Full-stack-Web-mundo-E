import axios from "axios"

const instance = axios.create({
  baseURL: 'http://webmundose.herokuapp.com/About/'
})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'contact/store',
    data: data
  });

  return response.data
};

export {
  sendEmail
}