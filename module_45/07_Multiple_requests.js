/*

(Q.7). Multiple requests:

Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

*/



let fetchAndCombineData = async () => {
    try {
        // Fetching "to-do" data:
        const todoApiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todoData = await todoApiResponse.json();

        // Fetching "post" data:
        const postApiResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const postData = await postApiResponse.json();

        // Combining the responses into a single object
        const combinedData = {
            todo: todoData,
            post: postData
        };

        console.log(combinedData);
    } catch (error) {
        console.log(error.message);
    }
}

fetchAndCombineData();






