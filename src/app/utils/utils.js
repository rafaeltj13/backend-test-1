const path = require('path');
const fs = require('fs');
const fastcsv = require('fast-csv');

const CSV_FOLDER = path.join(__dirname, 'csv');

const generateCsv = async workflow => {
    if (workflow && workflow.data)

        if (!fs.existsSync(CSV_FOLDER)) fs.mkdirSync(CSV_FOLDER);

    const ws = fs.createWriteStream(`${CSV_FOLDER}/data.csv`);

    fastcsv
        .write([workflow && workflow.data], { headers: true })
        .pipe(ws);

    return workflow;
};

const removeCsvFolder = () => {
    const files = fs.readdirSync(CSV_FOLDER);

    for (const file of files) {
        fs.unlinkSync(path.join(CSV_FOLDER, file));
    }

    fs.rmdirSync(CSV_FOLDER);
};

module.exports = {
    generateCsv,
    removeCsvFolder,
    CSV_FOLDER
};