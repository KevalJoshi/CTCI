 var N = 4;
            function rotate90Clockwise(arr){
                for (j = 0; j < N; j++) {
                    for (i = N - 1; i >= 0; i--){
                        return(arr[i][j] + " ");
                    }
                     return("/n");
                }
            }
            var arr = [[ 1, 2, 3, 4 ],
                        [ 5, 6, 7, 8 ],
                        [ 9, 10, 11, 12 ],
                        [ 13, 14, 15, 16 ]];
                    console.log( rotate90Clockwise(arr));