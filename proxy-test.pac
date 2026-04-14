function FindProxyForURL(url, host) {
    if (shExpMatch(url, "http://54.251.186.76/api/karaokeapi/checkstatus3*")) {
        return "PROXY ducvuong25.ddns.net:9999";
    }
    return "DIRECT";
}
