import fs from "fs";
import path from "path";

const OUTPUT_DIR = process.argv[2] || "ouptut";

const file = fs.readFileSync("structure.json", "utf-8");

const json = JSON.parse(file);

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

let stack = [OUTPUT_DIR];

traverseJson(json);

function traverseJson(data) {
    if (Array.isArray(data)) {
        data.forEach((item) => {
            if (typeof item === "string") {
                if (!fs.existsSync(path.join(...stack, item))) {
                    fs.writeFileSync(path.join(...stack, item), "");
                }
            } else {
                console.log("unknown type");
            }
        });
    } else if (typeof data === "object") {
        Object.keys(data).forEach((key) => {
            const value = data[key];
            // create directory with value name
            stack.push(key);
            if (!fs.existsSync(path.join(...stack))) {
                fs.mkdirSync(path.join(...stack));
            }
            traverseJson(value);
        });
    } else if (typeof data === "string") {
        if (!fs.existsSync(path.join(...stack, data))) {
            fs.writeFileSync(path.join(...stack, data), "");
        }
    } else {
        console.log("unknown type");
    }
    stack.pop();
}
