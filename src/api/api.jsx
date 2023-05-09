import axios from "axios";

 const Api =  axios.create({
    baseURL: 'https://api.github.com/',
    auth: {
        username: 'Layconnn',
        password: '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'
    }
});

export default Api