class character 
{ 
    constructor(selector, name, picture, healthPoints, attackPower, counterAttackPower, basePower)
    {
        Object.defineProperty(this, "selector", { value: selector, writable: false });
        Object.defineProperty(this, "name", { value: name, writable: false });
        Object.defineProperty(this, "picture", { value: picture, writable: false });
        var temp = $('<div id="'+ this.selector +'">'+ this.name +'</div>');
        Object.defineProperty(this, "getHtml", { value: temp, writable: false });
        
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
        this.basePower = basePower;
    }
}

