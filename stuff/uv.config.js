self.__uv$config = {
    prefix: '/stuff/uv/service/',
    bare: 'https://polarislearning.art/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './uv.handler.js',
    client: './uv.client.js',
    bundle: './uv.bundle.js',
    config: './uv.config.js',
    sw: './uv.sw.js',
};
