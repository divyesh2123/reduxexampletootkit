export async function getcomments()
{

    let p = await fetch("https://jsonplaceholder.typicode.com/comments");

    let d1= await p.json();

    return d1;
    
} 