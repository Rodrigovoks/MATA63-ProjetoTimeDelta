const HOST = "localhost"
const PORT = 3000;
const URL = `http://${HOST}:${PORT}/`;


export async function insert(resource, obj, callback){
    let res = await axios.post(URL + resource, obj);

    callback(res);
}