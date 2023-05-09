const getAri = async (number) => {
    const imageFileName = `${number}.jpg`;
    const filePath = require(`/node_modules/oari/images/${imageFileName}`);

    try {
        const response = await fetch(filePath);
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
