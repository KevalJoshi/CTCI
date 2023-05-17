function setZeros(matrix){
                let i, j;
                let index = [];

                for(i = 0; i < matrix.length; i++){
                    for(j = 0; j < matrix[i].length; j++){
                        if(matrix[i][j] == 0){
                            index.push(i, j);
                        }
                    }
                }
                for(i = 0; i < index.length; i++){
                    if(i % 2 === 0){
                        for(j = 0; j < matrix[index[i]].length; j++){
                            matrix[index[i]][j] = 0;
                        }
                    }else{
                        for(j = 0; j < matrix.length; j++){
                            matrix[j][index[i]] = 0;
                        }
                    }
                }
                return matrix;
            }
            var matrix = [[ 1, 2, 3, 4 ],
                          [ 5, 6, 7, 8 ],
                          [ 9, 0, 11, 12 ],
                          [ 13, 14, 15, 16 ]];
                         console.log(setZeros(matrix));