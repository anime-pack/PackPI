
export function definePlatformSuffix(): void {
    switch (process.platform) {
        case 'darwin':
            process.env.PLATFORM_SUFFIX = 'dylib';
            break;
        case 'win32':
            process.env.PLATFORM_SUFFIX = 'dll';
            break;
        default:
            process.env.PLATFORM_SUFFIX = 'so';
            break;
    }
}
