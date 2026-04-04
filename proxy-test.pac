function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*/api/karaokeapi/checkstatus3*")) {
        return "PROXY ducvuong25.ddns.net:8080";
    }
    return "DIRECT";
}
