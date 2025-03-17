export interface User { // this isn't like a C# interface where its like a contract, we're using this to describe the shape of the user object
    username: string; // both of these properties are required
    token: string;
}

// not convention to put I infront of User like c# interfaces.

// could also do: 
/*
export type User {
username: string;
token: string
}

*/