# (Q.1). Double using callback:

## Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.


### Sol.

```javascript

// Function to double the array elements:
let dbl = (arr) => {
    let res = []; // This is the array to store doubleArrayElement of element .
    [...arr].map((item) => {
        res.push(item * 2);
    });
    return res;
}

// Callback function:
let cb = (fx, arr) => {
    return fx(arr);
}

// example :---

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = cb(dbl, myArr);
console.log(result);

```

### Output:
```Output
[
   2,  4,  6,  8, 10,
  12, 14, 16, 18, 20
]
```

<hr>

# (Q.2). String Manipulation:

## Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.

### Sol.
```javascript
let logString = function (strToBeLog) {
    console.log(strToBeLog);
}

let manipulateString = (str)=>{
    let strUppercase = str.toUpperCase();
    return logString(strUppercase);
}



// Example :
let strToBeMenupulated = "along with the manipulated string or the new string to the console.";

manipulateString(strToBeMenupulated);
```

### Output:
```Output
ALONG WITH THE MANIPULATED STRING OR THE NEW STRING TO THE CONSOLE.
```

<hr>

# (Q.3). Age in Days:

## Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.
## The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name] and their age in days is [age in days]."
## Note that the ageInDays function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later time.

###  Sol.
```Javascript

// msgLogger : message-logger function :---
let msgLogger = (msg) => {
    console.log(msg);
}

// ageInDays converter function :---
let ageInDays = (person) => {
    const { firstName, lastName, age } = person;
    // console.log(firstName , lastName , age);
    let fullName = `${firstName} ${lastName}`;
    let ageInDays = (age * 365);

    let message = `The person's full name is ${fullName} and their age in days is ${ageInDays}.`;
    return msgLogger(message);
}

// Example :---
let person = {
    firstName: "Araham",
    lastName: "Abeddin",
    age: 23
};

ageInDays(person);

```

### Output:
```Output
The person's full name is Araham Abeddin and their age in days is 8395.
```

<hr>

# (Q.4). Arrange in alphabetical order:

## Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The "program should use the map function to create a new list containing only the titles of the books", and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.


### Sol.
```Javascript
// Function to log the book titles in alphabetical order
const logBookTitlesInAlphabeticalOrder = (titles) => {
    console.log('Book Titles in Alphabetical Order:');
    console.log(titles.sort());
}

// Function to extract titles from a list of books
const extractAndLogBookTitles = (books) => {
    const bookTitles = books.map((book) => book.title);
    return logBookTitlesInAlphabeticalOrder(bookTitles);
}

// Example list of books
const bookList = [
    { title: 'Kite Runner', author: 'Khaled Hosseini', year: 2003 },
    { title: 'Adventures of Huckleberry Finn', author: 'Mark Twain', year: 1884 },
    { title: 'Great Expectations', author: 'Charles Dickens', year: 1861 },
    { title: 'Invisible Man', author: 'Ralph Ellison', year: 1952 },
    { title: 'Don Quixote', author: 'Miguel de Cervantes', year: 1605 },
    { title: 'Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'Emma', author: 'Jane Austen', year: 1815 },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { title: 'Fahrenheit 451', author: 'Ray Bradbury', year: 1953 },
    { title: 'Heart of Darkness', author: 'Joseph Conrad', year: 1899 },
    { title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
    { title: 'Lord of the Flies', author: 'William Golding', year: 1954 },
    { title: 'Jane Eyre', author: 'Charlotte Brontë', year: 1847 },
];

// Calling the function to extract and log book titles
extractAndLogBookTitles(bookList);

```

### Output:
```Output
Book Titles in Alphabetical Order:
[
  'Adventures of Huckleberry Finn',
  'Brave New World',
  'Catcher in the Rye',
  'Don Quixote',
  'Emma',
  'Fahrenheit 451',
  'Great Expectations',
  'Heart of Darkness',
  'Invisible Man',
  'Jane Eyre',
  'Kite Runner',
  'Lord of the Flies',
  'Moby-Dick'
]
```

<hr>

# (Q.5). Greeting Promise:

## You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!". For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".

### Sol.
```Javascript
let greetUser = function(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
};

// Usage example
greetUser("Mithun")
    .then((message) => console.log(message));  // Output: Hello, Mithun!
```

### Output:
```Output
Hello, Mithun!
```

<hr>

# (Q.6). Fetch results asynchronously:

## Write a function that asynchronously fetches data from an API[ https://jsonplaceholder.typicode.com/todos/1 ]and logs the result to the console.

### Sol.
```javascript
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
```

### Output:
```Output
[
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\n' +
      'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
      'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
      'qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\n' +
      'voluptatem occaecati omnis eligendi aut ad\n' +
      'voluptatem doloribus vel accusantium quis pariatur\n' +
      'molestiae porro eius odio et labore et velit aut'
  },
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\n' +
      'sit amet autem assumenda provident rerum culpa\n' +
      'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
      'quis sunt voluptatem rerum illo velit'
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\n' +
      'alias aut fugiat sit autem sed est\n' +
      'voluptatem omnis possimus esse voluptatibus quis\n' +
      'est aut tenetur dolor neque'
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\n' +
      'mollitia nobis aliquid molestiae\n' +
      'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
      'voluptate dolores velit et doloremque molestiae'
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae\n' +
      'magni quis enim qui quis quo nemo aut saepe\n' +
      'quidem repellat excepturi ut quia\n' +
      'sunt ut sequi eos ea sed quas'
  },
  {
    userId: 1,
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum\n' +
      'facilis quibusdam animi sint suscipit qui sint possimus cum\n' +
      'quaerat magni maiores excepturi\n' +
      'ipsam ut commodi dolor voluptatum modi aut vitae'
  },
  {
    userId: 1,
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore\n' +
      'enim quia ad\n' +
      'veniam autem ut quam aut nobis\n' +
      'et est aut quod aut provident voluptas autem voluptas'
  },
  {
    userId: 1,
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni\n' +
      'doloribus qui repudiandae\n' +
      'vero nisi sit\n' +
      'quos veniam quod sed accusamus veritatis error'
  },
  {
    userId: 2,
    id: 11,
    title: 'et ea vero quia laudantium autem',
    body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\n' +
      'accusamus in eum beatae sit\n' +
      'vel qui neque voluptates ut commodi qui incidunt\n' +
      'ut animi commodi'
  },
  {
    userId: 2,
    id: 12,
    title: 'in quibusdam tempore odit est dolorem',
    body: 'itaque id aut magnam\n' +
      'praesentium quia et ea odit et ea voluptas et\n' +
      'sapiente quia nihil amet occaecati quia id voluptatem\n' +
      'incidunt ea est distinctio odio'
  },
  {
    userId: 2,
    id: 13,
    title: 'dolorum ut in voluptas mollitia et saepe quo animi',
    body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\n' +
      'iste corrupti reiciendis voluptatem eius rerum\n' +
      'sit cumque quod eligendi laborum minima\n' +
      'perferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
  },
  {
    userId: 2,
    id: 14,
    title: 'voluptatem eligendi optio',
    body: 'fuga et accusamus dolorum perferendis illo voluptas\n' +
      'non doloremque neque facere\n' +
      'ad qui dolorum molestiae beatae\n' +
      'sed aut voluptas totam sit illum'
  },
  {
    userId: 2,
    id: 15,
    title: 'eveniet quod temporibus',
    body: 'reprehenderit quos placeat\n' +
      'velit minima officia dolores impedit repudiandae molestiae nam\n' +
      'voluptas recusandae quis delectus\n' +
      'officiis harum fugiat vitae'
  },
  {
    userId: 2,
    id: 16,
    title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
    body: 'suscipit nam nisi quo aperiam aut\n' +
      'asperiores eos fugit maiores voluptatibus quia\n' +
      'voluptatem quis ullam qui in alias quia est\n' +
      'consequatur magni mollitia accusamus ea nisi voluptate dicta'
  },
  {
    userId: 2,
    id: 17,
    title: 'fugit voluptas sed molestias voluptatem provident',
    body: 'eos voluptas et aut odit natus earum\n' +
      'aspernatur fuga molestiae ullam\n' +
      'deserunt ratione qui eos\n' +
      'qui nihil ratione nemo velit ut aut id quo'
  },
  {
    userId: 2,
    id: 18,
    title: 'voluptate et itaque vero tempora molestiae',
    body: 'eveniet quo quis\n' +
      'laborum totam consequatur non dolor\n' +
      'ut et est repudiandae\n' +
      'est voluptatem vel debitis et magnam'
  },
  {
    userId: 2,
    id: 19,
    title: 'adipisci placeat illum aut reiciendis qui',
    body: 'illum quis cupiditate provident sit magnam\n' +
      'ea sed aut omnis\n' +
      'veniam maiores ullam consequatur atque\n' +
      'adipisci quo iste expedita sit quos voluptas'
  },
  {
    userId: 2,
    id: 20,
    title: 'doloribus ad provident suscipit at',
    body: 'qui consequuntur ducimus possimus quisquam amet similique\n' +
      'suscipit porro ipsam amet\n' +
      'eos veritatis officiis exercitationem vel fugit aut necessitatibus totam\n' +
      'omnis rerum consequatur expedita quidem cumque explicabo'
  },
  {
    userId: 3,
    id: 21,
    title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
    body: 'repellat aliquid praesentium dolorem quo\n' +
      'sed totam minus non itaque\n' +
      'nihil labore molestiae sunt dolor eveniet hic recusandae veniam\n' +
      'tempora et tenetur expedita sunt'
  },
  {
    userId: 3,
    id: 22,
    title: 'dolor sint quo a velit explicabo quia nam',
    body: 'eos qui et ipsum ipsam suscipit aut\n' +
      'sed omnis non odio\n' +
      'expedita earum mollitia molestiae aut atque rem suscipit\n' +
      'nam impedit esse'
  },
  {
    userId: 3,
    id: 23,
    title: 'maxime id vitae nihil numquam',
    body: 'veritatis unde neque eligendi\n' +
      'quae quod architecto quo neque vitae\n' +
      'est illo sit tempora doloremque fugit quod\n' +
      'et et vel beatae sequi ullam sed tenetur perspiciatis'
  },
  {
    userId: 3,
    id: 24,
    title: 'autem hic labore sunt dolores incidunt',
    body: 'enim et ex nulla\n' +
      'omnis voluptas quia qui\n' +
      'voluptatem consequatur numquam aliquam sunt\n' +
      'totam recusandae id dignissimos aut sed asperiores deserunt'
  },
  {
    userId: 3,
    id: 25,
    title: 'rem alias distinctio quo quis',
    body: 'ullam consequatur ut\n' +
      'omnis quis sit vel consequuntur\n' +
      'ipsa eligendi ipsum molestiae et omnis error nostrum\n' +
      'molestiae illo tempore quia et distinctio'
  },
  {
    userId: 3,
    id: 26,
    title: 'est et quae odit qui non',
    body: 'similique esse doloribus nihil accusamus\n' +
      'omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\n' +
      'perspiciatis cum ut laudantium\n' +
      'omnis aut molestiae vel vero'
  },
  {
    userId: 3,
    id: 27,
    title: 'quasi id et eos tenetur aut quo autem',
    body: 'eum sed dolores ipsam sint possimus debitis occaecati\n' +
      'debitis qui qui et\n' +
      'ut placeat enim earum aut odit facilis\n' +
      'consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur'
  },
  {
    userId: 3,
    id: 28,
    title: 'delectus ullam et corporis nulla voluptas sequi',
    body: 'non et quaerat ex quae ad maiores\n' +
      'maiores recusandae totam aut blanditiis mollitia quas illo\n' +
      'ut voluptatibus voluptatem\n' +
      'similique nostrum eum'
  },
  {
    userId: 3,
    id: 29,
    title: 'iusto eius quod necessitatibus culpa ea',
    body: 'odit magnam ut saepe sed non qui\n' +
      'tempora atque nihil\n' +
      'accusamus illum doloribus illo dolor\n' +
      'eligendi repudiandae odit magni similique sed cum maiores'
  },
  {
    userId: 3,
    id: 30,
    title: 'a quo magni similique perferendis',
    body: 'alias dolor cumque\n' +
      'impedit blanditiis non eveniet odio maxime\n' +
      'blanditiis amet eius quis tempora quia autem rem\n' +
      'a provident perspiciatis quia'
  },
  {
    userId: 4,
    id: 31,
    title: 'ullam ut quidem id aut vel consequuntur',
    body: 'debitis eius sed quibusdam non quis consectetur vitae\n' +
      'impedit ut qui consequatur sed aut in\n' +
      'quidem sit nostrum et maiores adipisci atque\n' +
      'quaerat voluptatem adipisci repudiandae'
  },
  {
    userId: 4,
    id: 32,
    title: 'doloremque illum aliquid sunt',
    body: 'deserunt eos nobis asperiores et hic\n' +
      'est debitis repellat molestiae optio\n' +
      'nihil ratione ut eos beatae quibusdam distinctio maiores\n' +
      'earum voluptates et aut adipisci ea maiores voluptas maxime'
  },
  {
    userId: 4,
    id: 33,
    title: 'qui explicabo molestiae dolorem',
    body: 'rerum ut et numquam laborum odit est sit\n' +
      'id qui sint in\n' +
      'quasi tenetur tempore aperiam et quaerat qui in\n' +
      'rerum officiis sequi cumque quod'
  },
  {
    userId: 4,
    id: 34,
    title: 'magnam ut rerum iure',
    body: 'ea velit perferendis earum ut voluptatem voluptate itaque iusto\n' +
      'totam pariatur in\n' +
      'nemo voluptatem voluptatem autem magni tempora minima in\n' +
      'est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis'
  },
  {
    userId: 4,
    id: 35,
    title: 'id nihil consequatur molestias animi provident',
    body: 'nisi error delectus possimus ut eligendi vitae\n' +
      'placeat eos harum cupiditate facilis reprehenderit voluptatem beatae\n' +
      'modi ducimus quo illum voluptas eligendi\n' +
      'et nobis quia fugit'
  },
  {
    userId: 4,
    id: 36,
    title: 'fuga nam accusamus voluptas reiciendis itaque',
    body: 'ad mollitia et omnis minus architecto odit\n' +
      'voluptas doloremque maxime aut non ipsa qui alias veniam\n' +
      'blanditiis culpa aut quia nihil cumque facere et occaecati\n' +
      'qui aspernatur quia eaque ut aperiam inventore'
  },
  {
    userId: 4,
    id: 37,
    title: 'provident vel ut sit ratione est',
    body: 'debitis et eaque non officia sed nesciunt pariatur vel\n' +
      'voluptatem iste vero et ea\n' +
      'numquam aut expedita ipsum nulla in\n' +
      'voluptates omnis consequatur aut enim officiis in quam qui'
  },
  {
    userId: 4,
    id: 38,
    title: 'explicabo et eos deleniti nostrum ab id repellendus',
    body: 'animi esse sit aut sit nesciunt assumenda eum voluptas\n' +
      'quia voluptatibus provident quia necessitatibus ea\n' +
      'rerum repudiandae quia voluptatem delectus fugit aut id quia\n' +
      'ratione optio eos iusto veniam iure'
  },
  {
    userId: 4,
    id: 39,
    title: 'eos dolorem iste accusantium est eaque quam',
    body: 'corporis rerum ducimus vel eum accusantium\n' +
      'maxime aspernatur a porro possimus iste omnis\n' +
      'est in deleniti asperiores fuga aut\n' +
      'voluptas sapiente vel dolore minus voluptatem incidunt ex'
  },
  {
    userId: 4,
    id: 40,
    title: 'enim quo cumque',
    body: 'ut voluptatum aliquid illo tenetur nemo sequi quo facilis\n' +
      'ipsum rem optio mollitia quas\n' +
      'voluptatem eum voluptas qui\n' +
      'unde omnis voluptatem iure quasi maxime voluptas nam'
  },
  {
    userId: 5,
    id: 41,
    title: 'non est facere',
    body: 'molestias id nostrum\n' +
      'excepturi molestiae dolore omnis repellendus quaerat saepe\n' +
      'consectetur iste quaerat tenetur asperiores accusamus ex ut\n' +
      'nam quidem est ducimus sunt debitis saepe'
  },
  {
    userId: 5,
    id: 42,
    title: 'commodi ullam sint et excepturi error explicabo praesentium voluptas',
    body: 'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\n' +
      'odit reiciendis aliquam sunt sequi nulla dolorem\n' +
      'non facere repellendus voluptates quia\n' +
      'ratione harum vitae ut'
  },
  {
    userId: 5,
    id: 43,
    title: 'eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis',
    body: 'similique fugit est\n' +
      'illum et dolorum harum et voluptate eaque quidem\n' +
      'exercitationem quos nam commodi possimus cum odio nihil nulla\n' +
      'dolorum exercitationem magnam ex et a et distinctio debitis'
  },
  {
    userId: 5,
    id: 44,
    title: 'optio dolor molestias sit',
    body: 'temporibus est consectetur dolore\n' +
      'et libero debitis vel velit laboriosam quia\n' +
      'ipsum quibusdam qui itaque fuga rem aut\n' +
      'ea et iure quam sed maxime ut distinctio quae'
  },
  {
    userId: 5,
    id: 45,
    title: 'ut numquam possimus omnis eius suscipit laudantium iure',
    body: 'est natus reiciendis nihil possimus aut provident\n' +
      'ex et dolor\n' +
      'repellat pariatur est\n' +
      'nobis rerum repellendus dolorem autem'
  },
  {
    userId: 5,
    id: 46,
    title: 'aut quo modi neque nostrum ducimus',
    body: 'voluptatem quisquam iste\n' +
      'voluptatibus natus officiis facilis dolorem\n' +
      'quis quas ipsam\n' +
      'vel et voluptatum in aliquid'
  },
  {
    userId: 5,
    id: 47,
    title: 'quibusdam cumque rem aut deserunt',
    body: 'voluptatem assumenda ut qui ut cupiditate aut impedit veniam\n' +
      'occaecati nemo illum voluptatem laudantium\n' +
      'molestiae beatae rerum ea iure soluta nostrum\n' +
      'eligendi et voluptate'
  },
  {
    userId: 5,
    id: 48,
    title: 'ut voluptatem illum ea doloribus itaque eos',
    body: 'voluptates quo voluptatem facilis iure occaecati\n' +
      'vel assumenda rerum officia et\n' +
      'illum perspiciatis ab deleniti\n' +
      'laudantium repellat ad ut et autem reprehenderit'
  },
  {
    userId: 5,
    id: 49,
    title: 'laborum non sunt aut ut assumenda perspiciatis voluptas',
    body: 'inventore ab sint\n' +
      'natus fugit id nulla sequi architecto nihil quaerat\n' +
      'eos tenetur in in eum veritatis non\n' +
      'quibusdam officiis aspernatur cumque aut commodi aut'
  },
  {
    userId: 5,
    id: 50,
    title: 'repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem',
    body: 'error suscipit maxime adipisci consequuntur recusandae\n' +
      'voluptas eligendi et est et voluptates\n' +
      'quia distinctio ab amet quaerat molestiae et vitae\n' +
      'adipisci impedit sequi nesciunt quis consectetur'
  },
  {
    userId: 6,
    id: 51,
    title: 'soluta aliquam aperiam consequatur illo quis voluptas',
    body: 'sunt dolores aut doloribus\n' +
      'dolore doloribus voluptates tempora et\n' +
      'doloremque et quo\n' +
      'cum asperiores sit consectetur dolorem'
  },
  {
    userId: 6,
    id: 52,
    title: 'qui enim et consequuntur quia animi quis voluptate quibusdam',
    body: 'iusto est quibusdam fuga quas quaerat molestias\n' +
      'a enim ut sit accusamus enim\n' +
      'temporibus iusto accusantium provident architecto\n' +
      'soluta esse reprehenderit qui laborum'
  },
  {
    userId: 6,
    id: 53,
    title: 'ut quo aut ducimus alias',
    body: 'minima harum praesentium eum rerum illo dolore\n' +
      'quasi exercitationem rerum nam\n' +
      'porro quis neque quo\n' +
      'consequatur minus dolor quidem veritatis sunt non explicabo similique'
  },
  {
    userId: 6,
    id: 54,
    title: 'sit asperiores ipsam eveniet odio non quia',
    body: 'totam corporis dignissimos\n' +
      'vitae dolorem ut occaecati accusamus\n' +
      'ex velit deserunt\n' +
      'et exercitationem vero incidunt corrupti mollitia'
  },
  {
    userId: 6,
    id: 55,
    title: 'sit vel voluptatem et non libero',
    body: 'debitis excepturi ea perferendis harum libero optio\n' +
      'eos accusamus cum fuga ut sapiente repudiandae\n' +
      'et ut incidunt omnis molestiae\n' +
      'nihil ut eum odit'
  },
  {
    userId: 6,
    id: 56,
    title: 'qui et at rerum necessitatibus',
    body: 'aut est omnis dolores\n' +
      'neque rerum quod ea rerum velit pariatur beatae excepturi\n' +
      'et provident voluptas corrupti\n' +
      'corporis harum reprehenderit dolores eligendi'
  },
  {
    userId: 6,
    id: 57,
    title: 'sed ab est est',
    body: 'at pariatur consequuntur earum quidem\n' +
      'quo est laudantium soluta voluptatem\n' +
      'qui ullam et est\n' +
      'et cum voluptas voluptatum repellat est'
  },
  {
    userId: 6,
    id: 58,
    title: 'voluptatum itaque dolores nisi et quasi',
    body: 'veniam voluptatum quae adipisci id\n' +
      'et id quia eos ad et dolorem\n' +
      'aliquam quo nisi sunt eos impedit error\n' +
      'ad similique veniam'
  },
  {
    userId: 6,
    id: 59,
    title: 'qui commodi dolor at maiores et quis id accusantium',
    body: 'perspiciatis et quam ea autem temporibus non voluptatibus qui\n' +
      'beatae a earum officia nesciunt dolores suscipit voluptas et\n' +
      'animi doloribus cum rerum quas et magni\n' +
      'et hic ut ut commodi expedita sunt'
  },
  {
    userId: 6,
    id: 60,
    title: 'consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere',
    body: 'asperiores sunt ab assumenda cumque modi velit\n' +
      'qui esse omnis\n' +
      'voluptate et fuga perferendis voluptas\n' +
      'illo ratione amet aut et omnis'
  },
  {
    userId: 7,
    id: 61,
    title: 'voluptatem doloribus consectetur est ut ducimus',
    body: 'ab nemo optio odio\n' +
      'delectus tenetur corporis similique nobis repellendus rerum omnis facilis\n' +
      'vero blanditiis debitis in nesciunt doloribus dicta dolores\n' +
      'magnam minus velit'
  },
  {
    userId: 7,
    id: 62,
    title: 'beatae enim quia vel',
    body: 'enim aspernatur illo distinctio quae praesentium\n' +
      'beatae alias amet delectus qui voluptate distinctio\n' +
      'odit sint accusantium autem omnis\n' +
      'quo molestiae omnis ea eveniet optio'
  },
  {
    userId: 7,
    id: 63,
    title: 'voluptas blanditiis repellendus animi ducimus error sapiente et suscipit',
    body: 'enim adipisci aspernatur nemo\n' +
      'numquam omnis facere dolorem dolor ex quis temporibus incidunt\n' +
      'ab delectus culpa quo reprehenderit blanditiis asperiores\n' +
      'accusantium ut quam in voluptatibus voluptas ipsam dicta'
  },
  {
    userId: 7,
    id: 64,
    title: 'et fugit quas eum in in aperiam quod',
    body: 'id velit blanditiis\n' +
      'eum ea voluptatem\n' +
      'molestiae sint occaecati est eos perspiciatis\n' +
      'incidunt a error provident eaque aut aut qui'
  },
  {
    userId: 7,
    id: 65,
    title: 'consequatur id enim sunt et et',
    body: 'voluptatibus ex esse\n' +
      'sint explicabo est aliquid cumque adipisci fuga repellat labore\n' +
      'molestiae corrupti ex saepe at asperiores et perferendis\n' +
      'natus id esse incidunt pariatur'
  },
  {
    userId: 7,
    id: 66,
    title: 'repudiandae ea animi iusto',
    body: 'officia veritatis tenetur vero qui itaque\n' +
      'sint non ratione\n' +
      'sed et ut asperiores iusto eos molestiae nostrum\n' +
      'veritatis quibusdam et nemo iusto saepe'
  },
  {
    userId: 7,
    id: 67,
    title: 'aliquid eos sed fuga est maxime repellendus',
    body: 'reprehenderit id nostrum\n' +
      'voluptas doloremque pariatur sint et accusantium quia quod aspernatur\n' +
      'et fugiat amet\n' +
      'non sapiente et consequatur necessitatibus molestiae'
  },
  {
    userId: 7,
    id: 68,
    title: 'odio quis facere architecto reiciendis optio',
    body: 'magnam molestiae perferendis quisquam\n' +
      'qui cum reiciendis\n' +
      'quaerat animi amet hic inventore\n' +
      'ea quia deleniti quidem saepe porro velit'
  },
  {
    userId: 7,
    id: 69,
    title: 'fugiat quod pariatur odit minima',
    body: 'officiis error culpa consequatur modi asperiores et\n' +
      'dolorum assumenda voluptas et vel qui aut vel rerum\n' +
      'voluptatum quisquam perspiciatis quia rerum consequatur totam quas\n' +
      'sequi commodi repudiandae asperiores et saepe a'
  },
  {
    userId: 7,
    id: 70,
    title: 'voluptatem laborum magni',
    body: 'sunt repellendus quae\n' +
      'est asperiores aut deleniti esse accusamus repellendus quia aut\n' +
      'quia dolorem unde\n' +
      'eum tempora esse dolore'
  },
  {
    userId: 8,
    id: 71,
    title: 'et iusto veniam et illum aut fuga',
    body: 'occaecati a doloribus\n' +
      'iste saepe consectetur placeat eum voluptate dolorem et\n' +
      'qui quo quia voluptas\n' +
      'rerum ut id enim velit est perferendis'
  },
  {
    userId: 8,
    id: 72,
    title: 'sint hic doloribus consequatur eos non id',
    body: 'quam occaecati qui deleniti consectetur\n' +
      'consequatur aut facere quas exercitationem aliquam hic voluptas\n' +
      'neque id sunt ut aut accusamus\n' +
      'sunt consectetur expedita inventore velit'
  },
  {
    userId: 8,
    id: 73,
    title: 'consequuntur deleniti eos quia temporibus ab aliquid at',
    body: 'voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\n' +
      'aut eum minima consequatur\n' +
      'tempore cumque quae est et\n' +
      'et in consequuntur voluptatem voluptates aut'
  },
  {
    userId: 8,
    id: 74,
    title: 'enim unde ratione doloribus quas enim ut sit sapiente',
    body: 'odit qui et et necessitatibus sint veniam\n' +
      'mollitia amet doloremque molestiae commodi similique magnam et quam\n' +
      'blanditiis est itaque\n' +
      'quo et tenetur ratione occaecati molestiae tempora'
  },
  {
    userId: 8,
    id: 75,
    title: 'dignissimos eum dolor ut enim et delectus in',
    body: 'commodi non non omnis et voluptas sit\n' +
      'autem aut nobis magnam et sapiente voluptatem\n' +
      'et laborum repellat qui delectus facilis temporibus\n' +
      'rerum amet et nemo voluptate expedita adipisci error dolorem'
  },
  {
    userId: 8,
    id: 76,
    title: 'doloremque officiis ad et non perferendis',
    body: 'ut animi facere\n' +
      'totam iusto tempore\n' +
      'molestiae eum aut et dolorem aperiam\n' +
      'quaerat recusandae totam odio'
  },
  {
    userId: 8,
    id: 77,
    title: 'necessitatibus quasi exercitationem odio',
    body: 'modi ut in nulla repudiandae dolorum nostrum eos\n' +
      'aut consequatur omnis\n' +
      'ut incidunt est omnis iste et quam\n' +
      'voluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident'
  },
  {
    userId: 8,
    id: 78,
    title: 'quam voluptatibus rerum veritatis',
    body: 'nobis facilis odit tempore cupiditate quia\n' +
      'assumenda doloribus rerum qui ea\n' +
      'illum et qui totam\n' +
      'aut veniam repellendus'
  },
  {
    userId: 8,
    id: 79,
    title: 'pariatur consequatur quia magnam autem omnis non amet',
    body: 'libero accusantium et et facere incidunt sit dolorem\n' +
      'non excepturi qui quia sed laudantium\n' +
      'quisquam molestiae ducimus est\n' +
      'officiis esse molestiae iste et quos'
  },
  {
    userId: 8,
    id: 80,
    title: 'labore in ex et explicabo corporis aut quas',
    body: 'ex quod dolorem ea eum iure qui provident amet\n' +
      'quia qui facere excepturi et repudiandae\n' +
      'asperiores molestias provident\n' +
      'minus incidunt vero fugit rerum sint sunt excepturi provident'
  },
  {
    userId: 9,
    id: 81,
    title: 'tempora rem veritatis voluptas quo dolores vero',
    body: 'facere qui nesciunt est voluptatum voluptatem nisi\n' +
      'sequi eligendi necessitatibus ea at rerum itaque\n' +
      'harum non ratione velit laboriosam quis consequuntur\n' +
      'ex officiis minima doloremque voluptas ut aut'
  },
  {
    userId: 9,
    id: 82,
    title: 'laudantium voluptate suscipit sunt enim enim',
    body: 'ut libero sit aut totam inventore sunt\n' +
      'porro sint qui sunt molestiae\n' +
      'consequatur cupiditate qui iste ducimus adipisci\n' +
      'dolor enim assumenda soluta laboriosam amet iste delectus hic'
  },
  {
    userId: 9,
    id: 83,
    title: 'odit et voluptates doloribus alias odio et',
    body: 'est molestiae facilis quis tempora numquam nihil qui\n' +
      'voluptate sapiente consequatur est qui\n' +
      'necessitatibus autem aut ipsa aperiam modi dolore numquam\n' +
      'reprehenderit eius rem quibusdam'
  },
  {
    userId: 9,
    id: 84,
    title: 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut',
    body: 'sint molestiae magni a et quos\n' +
      'eaque et quasi\n' +
      'ut rerum debitis similique veniam\n' +
      'recusandae dignissimos dolor incidunt consequatur odio'
  },
  {
    userId: 9,
    id: 85,
    title: 'dolore veritatis porro provident adipisci blanditiis et sunt',
    body: 'similique sed nisi voluptas iusto omnis\n' +
      'mollitia et quo\n' +
      'assumenda suscipit officia magnam sint sed tempora\n' +
      'enim provident pariatur praesentium atque animi amet ratione'
  },
  {
    userId: 9,
    id: 86,
    title: 'placeat quia et porro iste',
    body: 'quasi excepturi consequatur iste autem temporibus sed molestiae beatae\n' +
      'et quaerat et esse ut\n' +
      'voluptatem occaecati et vel explicabo autem\n' +
      'asperiores pariatur deserunt optio'
  },
  {
    userId: 9,
    id: 87,
    title: 'nostrum quis quasi placeat',
    body: 'eos et molestiae\n' +
      'nesciunt ut a\n' +
      'dolores perspiciatis repellendus repellat aliquid\n' +
      'magnam sint rem ipsum est'
  },
  {
    userId: 9,
    id: 88,
    title: 'sapiente omnis fugit eos',
    body: 'consequatur omnis est praesentium\n' +
      'ducimus non iste\n' +
      'neque hic deserunt\n' +
      'voluptatibus veniam cum et rerum sed'
  },
  {
    userId: 9,
    id: 89,
    title: 'sint soluta et vel magnam aut ut sed qui',
    body: 'repellat aut aperiam totam temporibus autem et\n' +
      'architecto magnam ut\n' +
      'consequatur qui cupiditate rerum quia soluta dignissimos nihil iure\n' +
      'tempore quas est'
  },
  {
    userId: 9,
    id: 90,
    title: 'ad iusto omnis odit dolor voluptatibus',
    body: 'minus omnis soluta quia\n' +
      'qui sed adipisci voluptates illum ipsam voluptatem\n' +
      'eligendi officia ut in\n' +
      'eos soluta similique molestias praesentium blanditiis'
  },
  {
    userId: 10,
    id: 91,
    title: 'aut amet sed',
    body: 'libero voluptate eveniet aperiam sed\n' +
      'sunt placeat suscipit molestias\n' +
      'similique fugit nam natus\n' +
      'expedita consequatur consequatur dolores quia eos et placeat'
  },
  {
    userId: 10,
    id: 92,
    title: 'ratione ex tenetur perferendis',
    body: 'aut et excepturi dicta laudantium sint rerum nihil\n' +
      'laudantium et at\n' +
      'a neque minima officia et similique libero et\n' +
      'commodi voluptate qui'
  },
  {
    userId: 10,
    id: 93,
    title: 'beatae soluta recusandae',
    body: 'dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\n' +
      'voluptatem quis enim recusandae ut sed sunt\n' +
      'nostrum est odit totam\n' +
      'sit error sed sunt eveniet provident qui nulla'
  },
  {
    userId: 10,
    id: 94,
    title: 'qui qui voluptates illo iste minima',
    body: 'aspernatur expedita soluta quo ab ut similique\n' +
      'expedita dolores amet\n' +
      'sed temporibus distinctio magnam saepe deleniti\n' +
      'omnis facilis nam ipsum natus sint similique omnis'
  },
  {
    userId: 10,
    id: 95,
    title: 'id minus libero illum nam ad officiis',
    body: 'earum voluptatem facere provident blanditiis velit laboriosam\n' +
      'pariatur accusamus odio saepe\n' +
      'cumque dolor qui a dicta ab doloribus consequatur omnis\n' +
      'corporis cupiditate eaque assumenda ad nesciunt'
  },
  {
    userId: 10,
    id: 96,
    title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi',
    body: 'in non odio excepturi sint eum\n' +
      'labore voluptates vitae quia qui et\n' +
      'inventore itaque rerum\n' +
      'veniam non exercitationem delectus aut'
  },
  {
    userId: 10,
    id: 97,
    title: 'quas fugiat ut perspiciatis vero provident',
    body: 'eum non blanditiis soluta porro quibusdam voluptas\n' +
      'vel voluptatem qui placeat dolores qui velit aut\n' +
      'vel inventore aut cumque culpa explicabo aliquid at\n' +
      'perspiciatis est et voluptatem dignissimos dolor itaque sit nam'
  },
  {
    userId: 10,
    id: 98,
    title: 'laboriosam dolor voluptates',
    body: 'doloremque ex facilis sit sint culpa\n' +
      'soluta assumenda eligendi non ut eius\n' +
      'sequi ducimus vel quasi\n' +
      'veritatis est dolores'
  },
  {
    userId: 10,
    id: 99,
    title: 'temporibus sit alias delectus eligendi possimus magni',
    body: 'quo deleniti praesentium dicta non quod\n' +
      'aut est molestias\n' +
      'molestias et officia quis nihil\n' +
      'itaque dolorem quia'
  },
  {
    userId: 10,
    id: 100,
    title: 'at nam consequatur ea labore ea harum',
    body: 'cupiditate quo est a modi nesciunt soluta\n' +
      'ipsa voluptas error itaque dicta in\n' +
      'autem qui minus magnam et distinctio eum\n' +
      'accusamus ratione error aut'
  }
]
```

<hr>

# (Q.7). Multiple requests:

## Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs.

### Sol.
```javascript
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

// calling "fetchAndCombineData" function
fetchAndCombineData();

```

### Output:
```Output
{
  todo: { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
  post: {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  }
}
```

<hr>

# (Q.8). Get Data from API and Display it on the browser console:

## Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then logs the data to the console. For example, you could use the API at https://jsonplaceholder.typicode.com/posts to retrieve a list of posts, and then display them to the browser console.

### Sol.
```javascript

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

```

### Output:
```Output
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "nesciunt iure omnis dolorem tempora et accusantium",
        "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "optio molestias id quia eum",
        "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 2,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "userId": 2,
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        "userId": 2,
        "id": 14,
        "title": "voluptatem eligendi optio",
        "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
        "userId": 2,
        "id": 15,
        "title": "eveniet quod temporibus",
        "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
        "userId": 2,
        "id": 16,
        "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
        "userId": 2,
        "id": 17,
        "title": "fugit voluptas sed molestias voluptatem provident",
        "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
        "userId": 2,
        "id": 18,
        "title": "voluptate et itaque vero tempora molestiae",
        "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
        "userId": 2,
        "id": 19,
        "title": "adipisci placeat illum aut reiciendis qui",
        "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
        "userId": 2,
        "id": 20,
        "title": "doloribus ad provident suscipit at",
        "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
        "userId": 3,
        "id": 21,
        "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
        "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        "userId": 3,
        "id": 22,
        "title": "dolor sint quo a velit explicabo quia nam",
        "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        "userId": 3,
        "id": 23,
        "title": "maxime id vitae nihil numquam",
        "body": "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
        "userId": 3,
        "id": 24,
        "title": "autem hic labore sunt dolores incidunt",
        "body": "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
        "userId": 3,
        "id": 25,
        "title": "rem alias distinctio quo quis",
        "body": "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    },
    {
        "userId": 3,
        "id": 26,
        "title": "est et quae odit qui non",
        "body": "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
    },
    {
        "userId": 3,
        "id": 27,
        "title": "quasi id et eos tenetur aut quo autem",
        "body": "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
    },
    {
        "userId": 3,
        "id": 28,
        "title": "delectus ullam et corporis nulla voluptas sequi",
        "body": "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
    },
    {
        "userId": 3,
        "id": 29,
        "title": "iusto eius quod necessitatibus culpa ea",
        "body": "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
    },
    {
        "userId": 3,
        "id": 30,
        "title": "a quo magni similique perferendis",
        "body": "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
    },
    {
        "userId": 4,
        "id": 31,
        "title": "ullam ut quidem id aut vel consequuntur",
        "body": "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
    },
    {
        "userId": 4,
        "id": 32,
        "title": "doloremque illum aliquid sunt",
        "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
    },
    {
        "userId": 4,
        "id": 33,
        "title": "qui explicabo molestiae dolorem",
        "body": "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
    },
    {
        "userId": 4,
        "id": 34,
        "title": "magnam ut rerum iure",
        "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
    },
    {
        "userId": 4,
        "id": 35,
        "title": "id nihil consequatur molestias animi provident",
        "body": "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
    },
    {
        "userId": 4,
        "id": 36,
        "title": "fuga nam accusamus voluptas reiciendis itaque",
        "body": "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
    },
    {
        "userId": 4,
        "id": 37,
        "title": "provident vel ut sit ratione est",
        "body": "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
    },
    {
        "userId": 4,
        "id": 38,
        "title": "explicabo et eos deleniti nostrum ab id repellendus",
        "body": "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
    },
    {
        "userId": 4,
        "id": 39,
        "title": "eos dolorem iste accusantium est eaque quam",
        "body": "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
    },
    {
        "userId": 4,
        "id": 40,
        "title": "enim quo cumque",
        "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
    },
    {
        "userId": 5,
        "id": 41,
        "title": "non est facere",
        "body": "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
    },
    {
        "userId": 5,
        "id": 42,
        "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
        "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
    },
    {
        "userId": 5,
        "id": 43,
        "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
        "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
    },
    {
        "userId": 5,
        "id": 44,
        "title": "optio dolor molestias sit",
        "body": "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
    },
    {
        "userId": 5,
        "id": 45,
        "title": "ut numquam possimus omnis eius suscipit laudantium iure",
        "body": "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
    },
    {
        "userId": 5,
        "id": 46,
        "title": "aut quo modi neque nostrum ducimus",
        "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
    },
    {
        "userId": 5,
        "id": 47,
        "title": "quibusdam cumque rem aut deserunt",
        "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
    },
    {
        "userId": 5,
        "id": 48,
        "title": "ut voluptatem illum ea doloribus itaque eos",
        "body": "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
    },
    {
        "userId": 5,
        "id": 49,
        "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
        "body": "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
    },
    {
        "userId": 5,
        "id": 50,
        "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
        "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    },
    {
        "userId": 6,
        "id": 51,
        "title": "soluta aliquam aperiam consequatur illo quis voluptas",
        "body": "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
    },
    {
        "userId": 6,
        "id": 52,
        "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
        "body": "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
    },
    {
        "userId": 6,
        "id": 53,
        "title": "ut quo aut ducimus alias",
        "body": "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
    },
    {
        "userId": 6,
        "id": 54,
        "title": "sit asperiores ipsam eveniet odio non quia",
        "body": "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
    },
    {
        "userId": 6,
        "id": 55,
        "title": "sit vel voluptatem et non libero",
        "body": "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
    },
    {
        "userId": 6,
        "id": 56,
        "title": "qui et at rerum necessitatibus",
        "body": "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
    },
    {
        "userId": 6,
        "id": 57,
        "title": "sed ab est est",
        "body": "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
    },
    {
        "userId": 6,
        "id": 58,
        "title": "voluptatum itaque dolores nisi et quasi",
        "body": "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
    },
    {
        "userId": 6,
        "id": 59,
        "title": "qui commodi dolor at maiores et quis id accusantium",
        "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
    },
    {
        "userId": 6,
        "id": 60,
        "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
        "body": "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
    },
    {
        "userId": 7,
        "id": 61,
        "title": "voluptatem doloribus consectetur est ut ducimus",
        "body": "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
    },
    {
        "userId": 7,
        "id": 62,
        "title": "beatae enim quia vel",
        "body": "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
    },
    {
        "userId": 7,
        "id": 63,
        "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
        "body": "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
    },
    {
        "userId": 7,
        "id": 64,
        "title": "et fugit quas eum in in aperiam quod",
        "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
    },
    {
        "userId": 7,
        "id": 65,
        "title": "consequatur id enim sunt et et",
        "body": "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
    },
    {
        "userId": 7,
        "id": 66,
        "title": "repudiandae ea animi iusto",
        "body": "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
    },
    {
        "userId": 7,
        "id": 67,
        "title": "aliquid eos sed fuga est maxime repellendus",
        "body": "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
    },
    {
        "userId": 7,
        "id": 68,
        "title": "odio quis facere architecto reiciendis optio",
        "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
    },
    {
        "userId": 7,
        "id": 69,
        "title": "fugiat quod pariatur odit minima",
        "body": "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
    },
    {
        "userId": 7,
        "id": 70,
        "title": "voluptatem laborum magni",
        "body": "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
    },
    {
        "userId": 8,
        "id": 71,
        "title": "et iusto veniam et illum aut fuga",
        "body": "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
    },
    {
        "userId": 8,
        "id": 72,
        "title": "sint hic doloribus consequatur eos non id",
        "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
    },
    {
        "userId": 8,
        "id": 73,
        "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
        "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
    },
    {
        "userId": 8,
        "id": 74,
        "title": "enim unde ratione doloribus quas enim ut sit sapiente",
        "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
    },
    {
        "userId": 8,
        "id": 75,
        "title": "dignissimos eum dolor ut enim et delectus in",
        "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
    },
    {
        "userId": 8,
        "id": 76,
        "title": "doloremque officiis ad et non perferendis",
        "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
    },
    {
        "userId": 8,
        "id": 77,
        "title": "necessitatibus quasi exercitationem odio",
        "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
    },
    {
        "userId": 8,
        "id": 78,
        "title": "quam voluptatibus rerum veritatis",
        "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
    },
    {
        "userId": 8,
        "id": 79,
        "title": "pariatur consequatur quia magnam autem omnis non amet",
        "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
    },
    {
        "userId": 8,
        "id": 80,
        "title": "labore in ex et explicabo corporis aut quas",
        "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
    },
    {
        "userId": 9,
        "id": 81,
        "title": "tempora rem veritatis voluptas quo dolores vero",
        "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
    },
    {
        "userId": 9,
        "id": 82,
        "title": "laudantium voluptate suscipit sunt enim enim",
        "body": "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
    },
    {
        "userId": 9,
        "id": 83,
        "title": "odit et voluptates doloribus alias odio et",
        "body": "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
    },
    {
        "userId": 9,
        "id": 84,
        "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
        "body": "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
    },
    {
        "userId": 9,
        "id": 85,
        "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
        "body": "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
    },
    {
        "userId": 9,
        "id": 86,
        "title": "placeat quia et porro iste",
        "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
    },
    {
        "userId": 9,
        "id": 87,
        "title": "nostrum quis quasi placeat",
        "body": "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
    },
    {
        "userId": 9,
        "id": 88,
        "title": "sapiente omnis fugit eos",
        "body": "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
    },
    {
        "userId": 9,
        "id": 89,
        "title": "sint soluta et vel magnam aut ut sed qui",
        "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
    },
    {
        "userId": 9,
        "id": 90,
        "title": "ad iusto omnis odit dolor voluptatibus",
        "body": "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
    },
    {
        "userId": 10,
        "id": 91,
        "title": "aut amet sed",
        "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
    },
    {
        "userId": 10,
        "id": 92,
        "title": "ratione ex tenetur perferendis",
        "body": "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
    },
    {
        "userId": 10,
        "id": 93,
        "title": "beatae soluta recusandae",
        "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
    },
    {
        "userId": 10,
        "id": 94,
        "title": "qui qui voluptates illo iste minima",
        "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
    },
    {
        "userId": 10,
        "id": 95,
        "title": "id minus libero illum nam ad officiis",
        "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
    },
    {
        "userId": 10,
        "id": 96,
        "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
    },
    {
        "userId": 10,
        "id": 97,
        "title": "quas fugiat ut perspiciatis vero provident",
        "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
    },
    {
        "userId": 10,
        "id": 98,
        "title": "laboriosam dolor voluptates",
        "body": "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
    },
    {
        "userId": 10,
        "id": 99,
        "title": "temporibus sit alias delectus eligendi possimus magni",
        "body": "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
    },
    {
        "userId": 10,
        "id": 100,
        "title": "at nam consequatur ea labore ea harum",
        "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    }
]
```

<hr>

# (Q.9). Error Handling:

## Write a JavaScript program that uses the Fetch method to retrieve data from an API, and then handles errors that may occur. For example, you could use the API at https://jsonplaceholder.typicode.com/posts/123456789 to simulate an error, and then display an error message on the webpage.

### Sol.
```javascript
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
```

### Output:
```Output
HTTP error! status: 404
```



