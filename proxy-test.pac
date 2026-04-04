function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*/api/karaokeapi/checkstatus3*")) {
        return "PROXY 192.168.1.3:8080";
    }
    return "DIRECT";
}
