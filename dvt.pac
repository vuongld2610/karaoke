function FindProxyForURL(url, host) {
    if (url.toLowerCase().indexOf("dvt") !== -1) {
        return "PROXY ducvuong25.ddns.net:9999";
    }
    return "DIRECT";
}
