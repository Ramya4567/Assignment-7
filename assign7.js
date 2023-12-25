$(document).ready(function () {

    function generateStory() {
       
        var nounName = $('#nounName').val();
        var nounObject = $('#nounObject').val();
        var adjective = $('#adjective').val();
        var adverb = $('#adverb').val();

        var story = "In a faraway land, there lived a brave adventurer named <span class='userInput'>" + nounName + "</span>. ";
        story += "One day, they stumbled upon a mystical <span class='userInput'>" + nounObject + "</span> ";
        story += "that emitted a strangely <span class='userInput'>" + adjective + "</span> glow. Determined to uncover its secrets, ";
        story += "they embarked on a(n) <span class='userInput'>" + adverb + "</span> quest. Along the way, they encountered a ";
        story += "curious <span class='userInput'>" + nounObject + "</span> and a <span class='userInput'>" + adjective + "</span> creature. ";
        story += "Undeterred, they continued <span class='userInput'>" + adverb + "</span> until they reached the hidden chamber ";
        story += "containing the legendary <span class='userInput'>" + nounObject + "</span>. It was a(n) <span class='userInput'>" + adjective + "</span> sight.";

     
        $('#storyContainer').html(story);
    }

   
    $('#generateStoryButton').on('click', generateStory);

});
