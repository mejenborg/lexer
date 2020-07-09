const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const tsconfigFile = './tsconfig.json';

const tsconfig = require(tsconfigFile);
const outDir = tsconfig.compilerOptions.outDir;

try {
    
    // Remove current build
    (function recursiveRemove(dir) {
        fs.readdirSync(dir, {withFileTypes:true}).map(file => {
            if (file.isDirectory()) {
                recursiveRemove(path.join(dir, file.name));
                fs.rmdirSync(path.join(dir, file.name));
            } else {
                fs.unlinkSync(path.join(dir, file.name));
            }
        });
    })(outDir);

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