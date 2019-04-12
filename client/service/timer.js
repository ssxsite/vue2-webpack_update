export const Timer = {
  timeInit(time,servicetime) {
    let now = servicetime;
    time = time.replace(/-/g, "/");
    time = new Date(time);
    time = time*1 - now*1;
    return this.format(time);
  },
  format(time) {
    let h = Math.floor(time / (3600 * 1000));
    time = time % (3600 * 1000);
    let m = Math.floor(time / (60 * 1000));
    time = time % (60 * 1000);
    let s = Math.floor(time / 1000);
    h = h < 10 ? ('0' + h) : h;
    m = m < 10 ? ('0' + m) : m;
    s = s < 10 ? ('0' + s) : s;
    return [h, m, s];
  }
}
