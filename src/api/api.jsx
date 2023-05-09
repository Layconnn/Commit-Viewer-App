import axios from "axios";

 const Api =  axios.create({
    baseURL: 'https://api.github.com/',
    auth: {
        username: 'Layconnn',
        password: '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'
    }
});

export default Api