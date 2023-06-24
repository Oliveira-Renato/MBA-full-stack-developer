import axios from 'axios';

const apiPosts = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
})

async function getPosts() {
    let res = await apiPosts.get("posts");
    return res.data;
}


export { getPosts };