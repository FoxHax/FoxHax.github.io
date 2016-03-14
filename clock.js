// This file and the vernacular time style were made by Rory Madden

setInterval('updateClock()', 0);

function updateClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
	
	if (h < 6) {
		document.body.style.backgroundImage = "url('Night.png')";
	} else if (h < 10) {
		document.body.style.backgroundImage = "url('Morning.jpg')";
	} else if (h < 17) {
		document.body.style.backgroundImage = "url('Day.jpg')";
	} else if (h < 20) {
		document.body.style.backgroundImage = "url('Sunset.jpg')";
	} else if (h <= 24) {
		document.body.style.backgroundImage = "url('Night.png')";
	}
	
	if (h > 12){
		h -= 12
	}
	
	if (h == 0) {
		h = 12
	}
	
	ah = h + 1
	
	if (h == 1) {
        nh = 'ONE'
    } else if (h == 2) {
        nh = 'TWO'
    } else if (h == 3) {
        nh = 'THREE'
    } else if (h == 4) {
        nh = 'FOUR'
    } else if (h == 5) {
        nh = 'FIVE'
    } else if (h == 6) {
        nh = 'SIX'
    } else if (h == 7) {
        nh = 'SEVEN'
    } else if (h == 8) {
        nh = 'EIGHT'
    } else if (h == 9) {
        nh = 'NINE'
    } else if (h == 10) {
        nh = 'TEN'
    } else if (h == 11) {
        nh = 'ELEVEN'
    } else if (h == 12) {
        nh = 'TWELVE'
    }

    if (ah == 1) {
        nah = 'ONE'
    } else if (ah == 2) {
        nah = 'TWO'
    } else if (ah == 3) {
        nah = 'THREE'
    } else if (ah == 4) {
        nah = 'FOUR'
    } else if (ah == 5) {
        nah = 'FIVE'
    } else if (ah == 6) {
        nah = 'SIX'
    } else if (ah == 7) {
        nah = 'SEVEN'
    } else if (ah == 8) {
        nah = 'EIGHT'
    } else if (ah == 9) {
        nah = 'NINE'
    } else if (ah == 10) {
        nah = 'TEN'
    } else if (ah == 11) {
        nah = 'ELEVEN'
    } else if (ah == 12) {
        nah = 'TWELVE'
    } else if (ah == 13) {
        nah = 'ONE'
    }
	
	if (m <= 2) {
        wordTime = nh + ' O\'CLOCK';
	} else if (m <= 7) {
		wordTime = 'FIVE PAST ' + nh;
    } else if (m <= 12) {
        wordTime = 'TEN PAST ' + nh;
    } else if (m <= 17) {
        wordTime = 'QUARTER PAST ' + nh;
    } else if (m <= 22) {
        wordTime = 'TWENTY PAST ' + nh;
    } else if (m <= 27) {
        wordTime = 'TWENTY-FIVE PAST ' + nh;
    } else if (m <= 32) {
        wordTime = 'HALF PAST ' + nh;
    } else if (m <= 37) {
        wordTime = 'TWENTY-FIVE TO ' + nah;
    } else if (m <= 42) {
        wordTime = 'TWENTY TO ' + nah;
    } else if (m <= 47) {
        wordTime = 'QUARTER TO ' + nah;
    } else if (m <= 52) {
        wordTime = 'TEN TO ' + nah;
    } else if (m <= 57) {
        wordTime = 'FIVE TO ' + nah;
    } else if (m <= 59) {
        wordTime = nah + ' O\'CLOCK';
    }
	
	if (m < 10) {
        m = "0" + m;
    }

	digitalTime = h + ':' + m;
    var digitalClockElem = document.getElementById('digitalClock');
	digitalClockElem.innerHTML = '' + digitalTime + '';

    var wordClockElem = document.getElementById('wordClock');
	wordClockElem.innerHTML = wordTime;
	document.title = wordTime + ' (' + digitalTime + ')';
 }