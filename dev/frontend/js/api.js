const HOST = "localhost"
const PORT = 3000;
const URL = `http://${HOST}:${PORT}/`;


export async function post(resource, obj, callback) {
    let res;
    try {
         res = await axios.post(URL + resource, obj);
    } finally {
        callback(res);
    }
}

// export async function login(obj, callback){
//     let res = await axios.post(URL + 'login', obj);

//     callback(res);
// }