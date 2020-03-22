export function formatDate(arg) {
    let sec = parseInt(arg / 1000);
    let min= parseInt(sec / 60);
    sec = sec % 60;
    sec = sec < 10 ? '0' + sec : sec;
    let value = min + ':' + sec;
    return value;
};