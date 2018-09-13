var marvelGame = 
{
    charapters: [
        new character("#cpt-america", "Cpt America", "123.jpg", 120, 4, 8, 5),
        new character("#ironman", "Ironman", "123.jpg", 120, 6, 6, 7),
        new character("#hulk", "Hulk", "123.jpg", 120, 8, 4, 9)
    ],
    init: function(){
        for(i = 0; i < this.charapters.length; i++)
        {
            $("#available").append(this.charapters[i].getHtml);
            $("#available>div").on("click", function() {
                this.completeSelection(this);
            });
        }
    },
    completeSelection: function(element)
    {
        $("#you").append(element).off("click");

        $("#available>div").on("click", function() {
            this.addToDefenderaddToDefender(this);
        });
    },
    addToDefender: function(element)
    {
        $("#defender").append(element);
    }
}

