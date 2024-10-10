/*

(Q.6). Fetch results asynchronously:

Write a function that asynchronously fetches data from an API[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

*/



// Defining asynchronous function :---
// This function will fetch data from an API asynchronously.
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        // This will catch any error during the data fetching process.
        console.error('Error fetching data:', error);
    }
}

// Calling the function :---
// This will call the fetchData function to fetch the data.
fetchData();


