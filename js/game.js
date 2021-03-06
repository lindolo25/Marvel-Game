var marvelGame = {
    charapters: [],
    main:undefined,
    defender:undefined,
    enemiesLeft: 0,
    init: function()
    {
        this.reset();
        
        $(".charapter").on("click", function(){
            marvelGame.charapterClicked(this);
        });

        $("#attack").on("click", function(){
            marvelGame.attack();
        });

        $("#resetGame").on("click", function(){
            marvelGame.reset();
        });
    },
    charapterClicked: function(charapter)
    {
        if(this.main === undefined & this.defender === undefined)
        {
            this.main = $(charapter).attr("data-index");
            $(charapter).appendTo("#main-area");

            $("main").show();
            $("#chose-area").hide();
            var toMove = $("#chose-area>.charapter")
            this.enemiesLeft = toMove.length;
            for(i = 0; i < toMove.length; i++)
            {
                $(toMove[i]).appendTo("#enemies-area");
            }
        }
        else if(this.defender === undefined)
        {
            this.defender = $(charapter).attr("data-index");
            $(charapter).appendTo("#defender-area");
        }
        this.log("","");
    },
    attack: function()
    {
        if(this.main === undefined) return;
        else if(this.defender === undefined) this.log("Choose a defender from the enemies list", "alert-info");
        else
        {
            var defenderHP = this.reduceCharapterHP(this.defender,this.charapters[this.main].attackPower);
            var mainHP = this.reduceCharapterHP(this.main,this.charapters[this.defender].counterAttackPower);
            
            if(mainHP <= 0)
            {
                this.log("You lose, Game Over", "alert-danger");
                this.main = undefined;
                $("#resetGame").show();
                return;                
            }
            else if(defenderHP <= 0)
            {
                this.enemiesLeft --;
                $("#" + this.charapters[this.defender].ID).appendTo("#chose-area");
                this.defender = undefined;
                if(this.enemiesLeft == 0)
                {
                    this.log("You win, game over", "alert-success");
                    this.main = undefined;                    
                    $("#resetGame").show();
                    return; 
                }
                else
                {
                    this.log("you have defeated the defender, choose a new enemy.", "alert-success");
                }
            }
            else
            {
                this.log("You have damage "+ this.charapters[this.defender].name +" by "+ this.charapters[this.main].attackPower +" Points<br> "+ this.charapters[this.defender].name +" attacked back with a damage of " + this.charapters[this.defender].counterAttackPower, "alert-info");
            }
            
            this.charapters[this.main].attackPower += this.charapters[this.main].basePower;
        }      
    },
    reset: function()
    {
        this.charapters = [];
        this.main = undefined;
        this.defender = undefined;
        this.enemiesLeft = 0;

        var charaptersTemp = $(".charapter");
        for(i = 0; i < charaptersTemp.length; i++)
        {
            this.charapters.push({
                ID: $(charaptersTemp[i]).attr("id"),
                name: $(charaptersTemp[i]).attr("data-name"),
                healthPoints: parseInt($(charaptersTemp[i]).attr("data-health-points")),
                attackPower: parseInt($(charaptersTemp[i]).attr("data-attack-power")),
                counterAttackPower : parseInt($(charaptersTemp[i]).attr("data-counter-attack-power")),
                basePower : parseInt($(charaptersTemp[i]).attr("data-attack-power"))
            });
            $(charaptersTemp[i]).attr("data-index", i);
            $("#" + $(charaptersTemp[i]).attr("id") +" #health-points").text($(charaptersTemp[i]).attr("data-health-points"));
            $(charaptersTemp[i]).appendTo("#chose-area");
        }
        
        $("main").hide();
        $("#resetGame").hide();
        $('#chose-area').show();
        this.log("","");
    },
    log: function(message, type)
    {
        $("#log").html('<p class="alert '+ type +'">'+ message + '</p>');
    },
    reduceCharapterHP: function(charapter, points)
    {
        charapter = this.charapters[charapter];
        charapter.healthPoints -= points;
        $("#" + charapter.ID +" #health-points").text(charapter.healthPoints);
        return charapter.healthPoints;
    }

}

