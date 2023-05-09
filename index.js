// const fs = require("fs");

async function getAri() {
    // const path = `/node_modules/oari/images`;
    // const dir = fs.readdirSync(path);

    // return dir.length;

    try {
        const response = await fetch(filePath);
        if (response.status === 200) {
            const blob = await response.blob();
            return {
                filepath: filePath,
                filename: imageFileName,
                file: blob,
            };
        } else {
            console.error(`There is no such Ari${filePath}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching Ari${filePath}`);
        return null;
    }
}

// exports = getAri;
module.exports = getAri;
