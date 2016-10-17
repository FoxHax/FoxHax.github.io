// This file and the vernacular time style were made by Rory Madden

(function updateClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var digitalClockElem = document.getElementById('digitalClock');
    var wordClockElem = document.getElementById('wordClock');
    var wordTime, digitalTime;

    document.body.style.backgroundImage = getBackgroundImagePer(h)

    wordTime = getWordTime(h, m);
    digitalTime = getserializedDigitalTime(h, m);

    wordClockElem.innerHTML = wordTime;
    digitalClockElem.innerHTML = digitalTime;
    document.title = wordTime + ' (' + digitalTime + ')';
})();

function getserializedDigitalTime(hour, minute) {
    var twelveHourFormat = convertTo12HourFormat(hour);

    if (minute < 10) {
        return twelveHourFormat + ':0' + minute;
    }
    return twelveHourFormat + ':' + minute;
}

function getWordTime(hour, minute) {
    var nearestHourWord = getNearestWordHour(hour, minute);
    return getTimePhrase(nearestHourWord, minute);
}

function getNearestWordHour(hour, minute) {
    if (minute > 32) {
        return getWordHour(hour + 1);
    }
    return getWordHour(hour)
}

function convertTo12HourFormat(hour) {
    if (hour > 12) { return hour - 12 }
    if (hour === 0) { return 12 }
}

function getWordHour(currentHour) {
    var twelveHourFormat = convertTo12HourFormat(currentHour);

    if (twelveHourFormat === 1)       { return 'ONE' }
    else if (twelveHourFormat === 2)  { return 'TWO' }
    else if (twelveHourFormat === 3)  { return 'THREE' }
    else if (twelveHourFormat === 4)  { return 'FOUR' }
    else if (twelveHourFormat === 5)  { return 'FIVE' }
    else if (twelveHourFormat === 6)  { return 'SIX' }
    else if (twelveHourFormat === 7)  { return 'SEVEN' }
    else if (twelveHourFormat === 8)  { return 'EIGHT' }
    else if (twelveHourFormat === 9)  { return 'NINE' }
    else if (twelveHourFormat === 10) { return 'TEN' }
    else if (twelveHourFormat === 11) { return 'ELEVEN' }
    else if (twelveHourFormat === 12) { return 'TWELVE' }
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
