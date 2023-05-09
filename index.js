const fs = require("fs");
const path = require("path");

const getAri = (number, dir = "images") => {
    const imageDir = path.join(process.cwd(), dir);
    const imageFileName = `${number}.jpg`;
    const filePath = path.join(imageDir, imageFileName);

    if (fs.existsSync(filePath)) {
        const image = fs.readFileSync(filePath);
        return { [imageFileName]: image };
    } else {
        console.error(`There is no such Ari${filePath}`);
        return {};
    }
};

module.exports = getAri;
