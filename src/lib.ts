import { dlopen, FFIType, suffix } from 'bun:ffi';
import { existsSync } from 'fs';
import { join } from 'path';

const libPath = join(import.meta.dir, `bun_ffi.${suffix}`);

if (!existsSync(libPath)) {
    console.error(`Error: Library file not found in "${libPath}"`);
    console.log('Expected directory:', import.meta.dir);
    throw new Error('Library file not found');
};

const { symbols } = dlopen(libPath, {
    add: {
        args: [FFIType.i32, FFIType.i32],
        returns: FFIType.i32,
    },
    reqwest: {
        // args: undefined,
        returns: FFIType.void,
    },
});

export function add(x: number, y: number): number {
    return symbols.add(x, y);
};

export function reqwest(): void {
    return symbols.reqwest();
};

