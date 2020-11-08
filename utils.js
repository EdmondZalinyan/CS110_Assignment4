function productMatrix(mat1, mat2) {
    let mat3 = [];
    let length = mat1.length;
    for (let i = 0; i < length; i++) {
        mat3[i] = [];
        for (let j = 0; j < length; j++) {
            mat3[i][j] = 0;
            for (let k = 0; k < length; k++)
                mat3[i][j] += mat1[i][k] * mat2[k][j];
        }
    }
    return mat3;
}
function sumOfMatrices(mat1, mat2) {
    let mat3 = [];
    let length = mat1.length;
    for (let i = 0; i < length; i++) {
        mat3[i] = [];
        for (let j = 0; j < length; j++) {
            mat3[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return mat3;
}
function sumOfEachRow(mat) {
    let sums = [];
    for (let i = 0; i < mat.length; i++)
        sums[i] = sumOfArray(mat[i]);

    return sums;
}
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}



module.exports = {
    productMatrix,
    sumOfMatrices,
    sumOfEachRow
};