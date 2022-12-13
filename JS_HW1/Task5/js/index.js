let numberOfLevel = 8;
let width = (2 * numberOfLevel) -1;
let midlle = Math.floor(width / 2); 
let level = ''; 

    for(let i = 0; i < numberOfLevel; i++) { 
        level = '';
        for(let j = 0; j < width; j++) {
            if(j < midlle-i || j > midlle+i) {
                level += '-';
            } else {
                level += '#';
            }
        }
        console.log(level);
    }



