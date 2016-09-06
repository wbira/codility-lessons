function solution (N) {
    var maximumSequence = 0,
        currentSequence = 0
        firstSetBit = false;

    while(N > 0){
        if(N & 1){
            firstSetBit = true;
            currentSequence = 0;
        }else{
            currentSequence++;
        }

        if(currentSequence > maximumSequence && firstSetBit){
            maximumSequence = currentSequence
        }

        N = N >> 1;
    }
    return maximumSequence;
}


