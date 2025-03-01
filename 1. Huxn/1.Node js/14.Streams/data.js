import fs from "fs";

for (let i = 0; i <= 10000; i++) {
  fs.writeFileSync("1. Huxn/14.Streams/data.txt", `${i}\n`, { flag: "a" });
}
