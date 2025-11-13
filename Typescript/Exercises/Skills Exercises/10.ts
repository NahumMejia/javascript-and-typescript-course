//10.-Asyn/Await

/*Create an asynchronous function that simulates fetching data from an API and returns a typed promise. */

interface User {
    id: number;
    name: string;
    email: string;
}

async function getUser(id:number): Promise<User> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Nahum",
                email: "nahum@example.com"
            });
        }, 2000)
    })
}

async function showUser() {
    console.log('Getting users...');
    const user = await getUser(1);
}

showUser();