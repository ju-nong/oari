const LENGTH = 29;

async function get() {
    const name = `${Math.floor(Math.random() * LENGTH) + 1}.jpg`;
    const path = `/node_modules/oari/images/${name}`;

    try {
        const response = await fetch(path);
        if (response.status === 200) {
            const blob = await response.blob();
            return {
                filepath: path,
                filename: name,
                file: blob,
            };
        } else {
            console.error(`There is no such Ari: ${name}`);
            return null;
        }
    } catch (error) {
        console.error(`Error fetching Ari: ${name}`);
        return null;
    }
}

module.exports = get;
