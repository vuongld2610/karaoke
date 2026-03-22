function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "baohanh.vietk.vn")) {
        return "PROXY ducvuong25.ddns.net:8080";
    }
    return "DIRECT";
}
