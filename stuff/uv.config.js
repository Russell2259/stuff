self.__uv$config = {
    prefix: '/stuff/stuff/service/'/*location.pathname.includes('/uv/service/') ? location.pathname.split('/uv/service/')[0] + '/uv/service/'*/,
    bare: 'https://tomp.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: './uv.handler.js',
    client: './uv.client.js',
    bundle: './uv.bundle.js',
    config: './uv.config.js',
    sw: './uv.sw.js',
};
