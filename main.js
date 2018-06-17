function isHappy(n) {
    const past = {};
    
    while (true) {
        let total = 0;
        
        while (n > 0) {
            total += Math.pow(n % 10, 2);
            n = Math.floor(n / 10);
        }
        
        if (total === 1)
            return true;
            
        if (past[total])
            return false;
            
        n = total;
        past[total] = 1;             
    }
}