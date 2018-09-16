var marvelGame = {
    charapters: [],
    main:undefined,
    defender:undefined,
    init: function()
    {
        // load charapters from HTML ---------------------------------------------------------------
        var charaptersTemp = $(".charapter");
        for(i = 0; i < charaptersTemp.length; i++)
        {
            $("main").hide();
            this.charapters.push({
                ID: $(charaptersTemp[i]).attr("id"),
                healthPoints: parseInt($(charaptersTemp[i]).attr("data-health-points")),
                attackPower: parseInt($(charaptersTemp[i]).attr("data-attack-power")),
                counterAttackPower : parseInt($(charaptersTemp[i]).attr("data-counter-attack-power")),
                basePower : parseInt($(charaptersTemp[i]).attr("data-base-power"))
            });
            $(charaptersTemp[i]).attr("data-index", i);
        }
        console.log(this.charapters[0]);
        
        // set the onclick event for the charapter ---------------------------------------------------
        charaptersTemp.on("click", function(){
            marvelGame.charapterClicked(this);
        });

        // set the attack event ----------------------------------------------------------------------
        $("#attack").on("click", function(){
            marvelGame.attack();
        });

        // set reset event ----------------------------------------------------------------------------
        $("#resetGame").on("click", function(){
            marvelGame.reset();
        });
        $("#resetGame").hide();
    },
    charapterClicked: function(charapter)
    {
        if(this.main === undefined)
        {
            this.main = $(charapter).attr("data-index");
            $(charapter).appendTo("#main-area");
            console.log(this.charapters[this.main].healthPoints);

            $("main").show();
            $("#chose-area").hide();
            // Move the rest of the charapters to the Enemies Area -------------------------------------
            var toMove = $("#chose-area>.charapter")
            for(i = 0; i < toMove.length; i++)
            {
                $(toMove[i]).appendTo("#enemies-area");
            }
        }
        else if(this.defender === undefined)
        {
            this.defender = $(charapter).attr("data-index");
            $(charapter).appendTo("#defender-area");
            console.log(this.charapters[this.defender].healthPoints);
        }        
    },
    attack: function()
    {
        console.log("an attack");
        
    },
    reset: function()
    {
        console.log("Reset");
    },

}

