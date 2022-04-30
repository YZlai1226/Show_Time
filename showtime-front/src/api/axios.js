import axios from "axios";

// export default axios.create({
//     baseURL: 'http://localhost:3000'
// })
const myAxios = axios.create({
    baseURL: 'http://localhost:3000'
})

myAxios.interceptors.request.use(function (config) {
    // const token = store.getState().session.token;
    // const token = "BABAR42";
    // GET THE TOKEN FROM SOMEWHERE LOCALSTORAGE OR COOKIES ... OR PUT null IF NOT
    const token = localStorage.getItem('token');
    console.log('===========')
    console.log(token);
    if (token)
        config.headers.Authorization =  token;

    // return config;
    else 
        console.log('nooooo');
});

export default myAxios;
