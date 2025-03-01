Let's break down each part of the code, line by line.

### Blocking Code

```js
// 👉 Blocking 👈
console.log("Start");
alert("Block");
console.log("End");
```

1. `console.log("Start");`
   - This logs the string "Start" to the console.
2. `alert("Block");`

   - This creates a popup alert that displays "Block". It's a blocking operation because it waits for the user to close the alert before the script continues.

3. `console.log("End");`
   - This would log "End" to the console, but it will only happen **after** the alert is closed. So, the script execution is "paused" until the alert is dismissed, making this a synchronous (blocking) behavior.

### Non-Blocking Code

```js
// 👉 Non-Blocking 👈
console.log("Start");
setTimeout(() => {
  alert("Non-Blocking");
}, 1000);
console.log("End");
```

1. `console.log("Start");`
   - Logs the string "Start" to the console.
2. `setTimeout(() => { alert("Non-Blocking"); }, 1000);`
   - This schedules the alert "Non-Blocking" to be shown after a 1-second delay. `setTimeout` is non-blocking, meaning the rest of the code continues to run even before the alert is shown.
3. `console.log("End");`
   - Logs "End" to the console immediately, without waiting for the 1-second delay. The alert will show **after** 1 second.

### Blocking File System Operation (Without Callback)

```js
let fs = require("fs");

console.log("Start");

let data = fs.readFileSync("test.txt");
console.log(data.toString());

console.log("Ended ");
```

1. `let fs = require("fs");`
   - This imports the `fs` (file system) module, which allows for interacting with files (like reading from and writing to them).
2. `console.log("Start");`

   - Logs "Start" to the console.

3. `let data = fs.readFileSync("test.txt");`

   - `fs.readFileSync` is a blocking operation. It reads the contents of the file `test.txt` synchronously, meaning the code execution stops until the file is completely read.

4. `console.log(data.toString());`

   - After the file is read, the contents (which are stored in `data`) are converted to a string and logged to the console.

5. `console.log("Ended ");`
   - This logs "Ended" to the console. This will only happen after the entire process of reading the file is completed.

### Non-Blocking File System Operation (With Callback)

```js
let fs = require("fs");

console.log();

console.log("Program Start");

fs.readFile("test.txt", (err, res) =>
  err ? console.log(err) : console.log(res.toString())
);

console.log("Program Ended");
```

1. `let fs = require("fs");`
   - Same as before, this imports the `fs` module.
2. `console.log();`

   - This is an empty `console.log()` — it doesn't output anything but could be used for spacing.

3. `console.log("Program Start");`

   - Logs "Program Start" to the console.

4. `fs.readFile("test.txt", (err, res) => err ? console.log(err) : console.log(res.toString()));`

   - `fs.readFile` is **non-blocking** because it works asynchronously. It reads `test.txt` in the background while the rest of the code continues executing.
     - If there's an error, it will log the error (`err`).
     - If the file is read successfully, it will log the content (`res.toString()`).
   - This code doesn't wait for `readFile` to complete, so the program can keep going.

5. `console.log("Program Ended");`
   - Logs "Program Ended" to the console immediately, without waiting for the file reading operation to finish. This shows how non-blocking code works because it doesn't halt execution to wait for the file read.

### Summary of Concepts:

- **Blocking** operations (like `alert()` and `fs.readFileSync`) stop the program from continuing until they are complete.
- **Non-blocking** operations (like `setTimeout()` and `fs.readFile`) allow the program to continue running and handle tasks asynchronously.
