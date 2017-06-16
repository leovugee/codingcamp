var answer = prompt("Wie hoch ist der Fernsehturm?");
var sure = "365m";
var win = "Sehr gut, das ist die richtige Antwort";

	while(answer != sure){
		if (confirm("!!!FALSCHE Antwort!!! Willst du es nochmal versuchen?")){
			prompt("Wie hoch ist der Fernsehturm?");
			
			} else {
				win = "Der Fernsehturm ist " + sure + " hoch";
				answer = sure;
		}
	}

alert(win);




 