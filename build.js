const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const tsconfigFile = './tsconfig.json';

const tsconfig = require(tsconfigFile);
const outDir = tsconfig.compilerOptions.outDir;

try {
    // Remove current build
    fs.readdirSync(outDir).map(file => fs.unlinkSync(path.join(outDir, file)));

    // Compile new build
    const proc = childProcess.exec(`tsc --build ${tsconfigFile}`);
    proc.stdout.on('data', (data) => {
        console.log(data);
    });
    proc.on('close', (code) => {
        if (code !== 0) {
            throw Error(`Build failed (${code})`);
        }
    })
} catch (err) {
    console.error(err);
}