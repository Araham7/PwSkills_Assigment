/*

(Q.9). Error Handling:

Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.

*/


// Asynchronously fetches post data from the API
let fetchPostData = async () => {
    try {
        // URL of the API endpoint for a specific post
        let apiUrl = 'https://jsonplaceholder.typicode.com/posts/123456789';
        
        // Fetch the post data from the API
        let apiResponse = await fetch(apiUrl);
        
        // Parse the JSON response
        let postData = await apiResponse.json();
        
        // Check if the response is not OK and throw an error if it isn't
        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }
        
        // Log the fetched post data to the console
        console.log(postData);
        
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.log(error.message);
    }
}

// Call the function to fetch the post data
fetchPostData();


