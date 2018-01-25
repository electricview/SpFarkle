function roll(numdice) {

    var results = [];

    for (i = 0; i < numdice; i++) 
    {
        results[i] = Math.floor(Math.random() * 6) + 1;
    }

    document.getElementById("scorebutton").disabled = false; // we only allow scoring if they've rolled.
    return results;
}

function displayresults() {
    document.getElementById("Die Results").innerHTML = results;
    document.getElementById("Dice Left").innerHTML = diceLeft; // may have to move this if for some reason we want to score without changing dies left.
}

function scoreme(inputCheck) {

    var boxesNotChecked = 0;

    for (i = 0; i < inputCheck; i++) { // looping through our 6 check boxes for each dice
        var boxname = "box" + i;

        if (document.getElementById(boxname).checked == true) { //Checking if any of our boxes are checked, if so, we are going to add them to score.
            diceLeft--;
            score += results[i];                                                        // change this later to actually get proper score numbers
            results.splice(i, 1);
            document.getElementById("Banked Score").innerHTML = "Banked " + results[i]; // change this later to actually reflect the amount of score added
            document.getElementById(boxname).checked = false; // we set the box to false since we've scored it
            document.getElementById("Score Feedback").style.display = "none"; // if we can bank some points, then remove any error message we may have had displayed previously.
        }
        else {                                              // if a box isn't checked we are keeping count so we can find out if ALL boxes were not checked.
            boxesNotChecked++;
        }

        if (boxesNotChecked == inputCheck) {                         // if all of our boxes were not checked, we dont score anything and return an error message to the user.
            document.getElementById("Score Feedback").innerHTML = "No dice selected";
        }

        displayresults()
    }
        
        }

