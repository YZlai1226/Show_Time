import axios from "axios";

// export default axios.create({
//     baseURL: 'http://localhost:3000'
// })
const myAxios = axios.create({
    baseURL: 'http://localhost:3000'
})

myAxios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    // console.log('===========')
    // console.log(token);
    if (token)
        config.headers.Authorization =  'Bearer ' + token;
    // else 
    //     console.log('nooooo');
    return config
});

export default myAxios;
