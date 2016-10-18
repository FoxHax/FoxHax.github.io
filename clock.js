(function () {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var digitalClockElem = document.getElementById('digitalClock');
    var wordClockElem = document.getElementById('wordClock');
    var wordTime, digitalTime, twelveHourFormat;

    updateClock(h, m);

    window.setInterval(function () {
        now = new Date();
        h = now.getHours();
        m = now.getMinutes();

        updateClock(h, m);
    }, 5000);

    function updateClock(h, m) {
        document.body.style.backgroundImage = getBackgroundImagePer(h)

        twelveHourFormat = convertTo12HourFormat(h);

        wordTime = getWordTime(twelveHourFormat, m);
        digitalTime = getserializedDigitalTime(twelveHourFormat, m);

        wordClockElem.innerHTML = wordTime;
        digitalClockElem.innerHTML = digitalTime;
        document.title = wordTime + ' (' + digitalTime + ')';
    }

    function getserializedDigitalTime(hour, minute) {
        if (minute < 10) {
            return hour + ':0' + minute;
        }
        return hour + ':' + minute;
    }

    function getWordTime(hour, minute) {
        var nearestHourWord = getNearestHourWord(hour, minute);
        return getTimePhrase(nearestHourWord, minute);
    }

    function getNearestHourWord(hour, minute) {
        if (minute > 32) {
            return getWordHour(hour + 1);
        }
        return getWordHour(hour)
    }

    function convertTo12HourFormat(hour) {
        if (hour > 12) { return hour - 12; }
        if (hour === 0) { return 12; }

        return hour;
    }

    function getWordHour(currentHour) {
        if (currentHour === 1)       { return 'ONE' }
        else if (currentHour === 2)  { return 'TWO' }
        else if (currentHour === 3)  { return 'THREE' }
        else if (currentHour === 4)  { return 'FOUR' }
        else if (currentHour === 5)  { return 'FIVE' }
        else if (currentHour === 6)  { return 'SIX' }
        else if (currentHour === 7)  { return 'SEVEN' }
        else if (currentHour === 8)  { return 'EIGHT' }
        else if (currentHour === 9)  { return 'NINE' }
        else if (currentHour === 10) { return 'TEN' }
        else if (currentHour === 11) { return 'ELEVEN' }
        else if (currentHour === 12) { return 'TWELVE' }
    }

    function getTimePhrase(wordHour, currentMinute) {
        if (currentMinute <= 2)       { return wordHour + ' O\'CLOCK'; }
        else if (currentMinute <= 7)  { return 'FIVE PAST ' + wordHour; }
        else if (currentMinute <= 12) { return 'TEN PAST ' + wordHour; }
        else if (currentMinute <= 17) { return 'QUARTER PAST ' + wordHour; }
        else if (currentMinute <= 22) { return 'TWENTY PAST ' + wordHour; }
        else if (currentMinute <= 27) { return 'TWENTY-FIVE PAST ' + wordHour; }
        else if (currentMinute <= 32) { return 'HALF PAST ' + wordHour; }
        else if (currentMinute <= 37) { return 'TWENTY-FIVE TO ' + wordHour; }
        else if (currentMinute <= 42) { return 'TWENTY TO ' + wordHour; }
        else if (currentMinute <= 47) { return 'QUARTER TO ' + wordHour; }
        else if (currentMinute <= 52) { return 'TEN TO ' + wordHour; }
        else if (currentMinute <= 57) { return 'FIVE TO ' + wordHour; }
        else if (currentMinute <= 59) { return wordHour + ' O\'CLOCK'; }
    }

    function getBackgroundImagePer(currentHour) {
        if (currentHour < 6 || currentHour >= 20) { return 'url("Night.png")'; }
        else if (currentHour < 10) { return 'url("Morning.jpg")'; }
        else if (currentHour < 17) { return 'url("Day.jpg")'; }
        else if (currentHour < 20) { return 'url("Sunset.jpg")'; }
    }
})();
