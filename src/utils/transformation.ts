export const scale = (value: number) => `scale(${value})`;
export const translate = (x: number, y: number) => `translate(${x}, ${y})`;
export const transform = (...transformations: string[]) => transformations.join(" ");
