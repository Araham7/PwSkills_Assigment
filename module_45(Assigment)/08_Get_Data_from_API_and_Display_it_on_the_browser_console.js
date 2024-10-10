/*

(Q.8). Get Data from API and Display it on the browser console:

Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list of posts, and then display them to the browser console.

*/


// creating "fetchPosts" function
let fetchPosts = async () => {
    try {
        let apiResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await apiResponse.json();
        console.log(posts); // Logs the retrieved posts to the console
        return posts; // Optional: return the posts if needed for further processing
    } catch (error) {
        console.error('Error fetching posts:', error.message); // Log the error message
    }
}

// calling "fetchPosts" function
fetchPosts();






