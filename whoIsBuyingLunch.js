function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        
        var n = names.length;
        var selectedNum = Math.floor(n*Math.random());
        
        // console.log(selectedNum);
        var selectedPerson = names[selectedNum] + " is going to buy lunch today!";
        return selectedPerson;
    /******Don't change the code below*******/    
    }