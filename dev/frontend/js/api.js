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

export async function get(resource, callback){
    let res;
    try {
        res = await axios.get(URL + resource);
   } finally {
       callback(res);
   }
}


export async function patch(resource, obj, callback) {
    let res;
    try {
         res = await axios.patch(URL + resource, obj);
    } finally {
        callback(res);
    }
}

// export async function login(obj, callback){
//     let res = await axios.post(URL + 'login', obj);

//     callback(res);
// }