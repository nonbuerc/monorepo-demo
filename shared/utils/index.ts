export const add1 = (num = 0) => {
    console.log(num++);
    return num++;
};
export const add2 = (num: number = 0) => {
    console.log(num + 2);
    return num + 2;
};
