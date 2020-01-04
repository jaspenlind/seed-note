export function* range(begin: number, end: number, interval = 1) {
  for (let i = begin; i < end; i += interval) {
    yield i;
  }
}
