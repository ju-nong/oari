const getAri = async (number) => {
    const imageFileName = `${number}.jpg`;
    const moduleURL = new URL(import.meta.url);
    const imagePath = new URL(`./images/${imageFileName}`, moduleURL).href;

    try {
        const response = await fetch(imagePath);
        if (response.status === 200) {
            const blob = await response.blob();
            return { [imageFileName]: blob };
        } else {
            console.error(`There is no such Ari${filePath}`);
            return {};
        }
    } catch (error) {
        console.error(`Error fetching Ari${filePath}`);
        return {};
    }
};

module.exports = getAri;
