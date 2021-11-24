import axios from "axios"

const instance = axios.create({
  baseURL: 'https://webmundose.herokuapp.com/api/'
})

const sendEmail = async (data) => {
  const response = await instance({
    method: 'post',
    url: 'About/save',
    data: data
  });

  return response.data
};

export {
  sendEmail
}