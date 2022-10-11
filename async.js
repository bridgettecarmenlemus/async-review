import fs from "fs"
const filename = "file.txt"

// call back
fs.readFile(filename,"utf8",function (err,data) {
    console.log(data);
})

// promise (then)
fs.promises.readFile(filename,"utf8")
.then((data) => {
    console.log(data);
})

// async
const showText = async () => {
//async function showText() {
    const data = await fs.promises.readFile(filename, 'utf8');
    return data
}

console.log(await showText())