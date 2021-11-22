import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/'
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