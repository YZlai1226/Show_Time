import axios from './axios'

export const getMe = async () => {
    // get token from localhost
    // const token = localStorage.getItem("token")

    try {
        const res = await axios.get('/profile', {
        });
        // console.log(res);
        // console.log("!!!!!!!!!!!!!!!!!!!!!!");
        return res.data;
    } catch (err) {
        console.log(err);
    }
  };