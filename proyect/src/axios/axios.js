import axios from "axios"

const instance = axios.create({
  baseURL: 'https://webmundose.herokuapp.com/About/'
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