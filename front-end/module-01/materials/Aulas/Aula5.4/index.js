import {getPosts} from './services/postsApi.js'

let res = await getPosts();

console.log(res);
/* 
res = await axios.get(`https://jsonplaceholder.typicode.com/users/${1}`);

//console.log(res.data);

/* res = await axios.put("https://jsonplaceholder.typicode.com/posts", {
    userId: 1,
    id: 1,
    title: 'TESTE sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  })
  console.log(res.data);
 */
/*
res = await axios.post("https://jsonplaceholder.typicode.com/posts",
{
    userId: 1,
    id: 1,
    title: 'TESTE POST sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  })

//console.log(res.status);
//console.log(res.data);

res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${101}`)

//console.log(res.status); */