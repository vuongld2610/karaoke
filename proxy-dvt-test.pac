function FindProxyForURL(url, host) {
    if (url.toLowerCase().indexOf("dvt") !== -1) {
        return "PROXY 192.168.1.3:9999";
    }
    return "DIRECT";
}
