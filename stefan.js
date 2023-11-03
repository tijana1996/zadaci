const arr = [2,8,3,5,7,9,1];
    function zbir10UNizu(param, arr) {
        const final = [];
        arr.forEach((x, xIndex) => {
            arr.forEach((y, yIndex) => {
                if (xIndex !== yIndex) {
                    const sum = x + y;
                    if (sum === param) {
                        const sumArray = [];
                        if(x < y) {
                            sumArray.push(x,y);
                        } else sumArray.push(y,x);
                        if(!final.find(i => i[0] === sumArray[0] && i[1] === sumArray[1])) {
                            final.push(sumArray);
                        }
                    }
                }
            })
        })
        return final
    }
    console.log(zbir10UNizu(10, arr));