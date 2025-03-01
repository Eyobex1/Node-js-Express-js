Here's an explanation of each line of code:

```js
import express from "express";
```

- This imports the `express` module. Express is a web framework for Node.js that helps you build web applications and APIs easily. The `import` statement is used to include it in the file.

```js
const app = express();
```

- This line creates an instance of the Express application by calling the `express()` function. The `app` object will be used to define routes and handle incoming HTTP requests.

### One Callback Function

```js
app.get("/", (req, res) => res.send("Single Callback"));
```

- `app.get("/")`: This sets up a route for GET requests to the root (`/`) of the web server. When a request is made to the root, this route will be triggered.
- `(req, res) => res.send("Single Callback")`: This is the callback function that will be called when the route is triggered. It takes two arguments:
  - `req`: The request object that contains information about the HTTP request (like headers, query parameters, etc.).
  - `res`: The response object used to send a response back to the client.
- `res.send("Single Callback")`: Sends the text `"Single Callback"` as the response to the client.

### More Than One Callback

```js
app.get(
  "/cbexample2",
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    res.send("More then one callback");
  }
);
```

- `app.get("/cbexample2", ...)`: This sets up a route for GET requests to `/cbexample2`.
- The route has two callback functions:

  1. `(req, res, next) => { ... }`: The first callback function takes three parameters:
     - `req`: The request object.
     - `res`: The response object.
     - `next`: The next function that you call to pass control to the next middleware (callback) in the chain.
     - Inside this function, `console.log("First callback")` logs a message to the console, and `next()` is called to pass control to the next callback.
  2. `(req, res) => { res.send("More then one callback"); }`: This is the second callback that sends the response `"More then one callback"` to the client.

- **Note**: The `next()` function is essential for passing control from one callback to the next. If you forget to call `next()`, the second callback won't be triggered, and the request will hang.

### Listening to the Server

```js
app.listen(5003, () => console.log("Server Up!"));
```

- `app.listen(5003, ...)`: This starts the server and listens for incoming HTTP requests on port `5003`. When the server is up and running, it will listen for connections on that port.
- `console.log("Server Up!")`: This message will be logged to the console to indicate that the server has successfully started and is listening on port `5003`.

### Key Notes:

1. Express uses the `app.get()` method to define routes that handle GET requests.
2. Callback functions (route handlers) are executed when the corresponding route is matched.
3. You can define multiple callbacks for a single route. If you do, make sure to call `next()` in each middleware, except for the last one, to ensure the next callback is called.
4. `app.listen()` is used to start the Express server, and the callback passed to it runs when the server starts successfully.
