export const noteSimp = (note)=>{
    let result = noteChecker(note);
    if(result){
        const sharp = ['#','#','♯','sharp','_#','_#','_♯','_sharp'];
        const flat = ['b','♭','flat','_b','_♭','_flat'];
        let accidental = '';
        if(result.input.length >1){
            if( sharp.filter( item=>item==result[1] || item==result[2] || item==result[3] ) ){
                accidental = '♯';
            }
            else if( flat.filter( item=>item==result[1] || item==result[2] || item==result[3] ) ){
                accidental = '♭';
            }
        }
        return `${result.input[0].toUpperCase()}${accidental}`;
    }
    else{
        return false;
    }
}

export const noteChecker = (note)=>{
    let regex = new RegExp(/^[A-Ga-g](#|#|♯|b|♭|sharp|flat)?(_(#|#|♯|b|♭|sharp|flat))?$/i);
    return regex.exec(note);
}

export const noteToNum = (note)=>{
    if(!noteChecker(note)){
        return null;
    }
    switch(note){
        case 'A':
            return 0;
        break;
        case 'B':
            return 2
        break;
        case 'C':
            return 3
        break;
        case 'D':
            return 5
        break;
        case 'E':
            return 7
        break;
        case 'F':
            return 8
        break;
        case 'G':
            return 10
        break;
        case 'A♯':
            return 1
        break;
        case 'B♯':
            return 3
        break;
        case 'C♯':
            return 4
        break;
        case 'D♯':
            return 6
        break;
        case 'E♯':
            return 8
        break;
        case 'F♯':
            return 9
        break;
        case 'G♯':
            return 11
        break;
        case 'A♭':
            return 11
        break;
        case 'B♭':
            return 1
        break;
        case 'C♭':
            return 2
        break;
        case 'D♭':
            return 4
        break;
        case 'E♭':
            return 6
        break;
        case 'F♭':
            return 7
        break;
        case 'G♭':
            return 9
        break;
        default:
            return noteToNum(noteSimp(note));
        break;
    }
}