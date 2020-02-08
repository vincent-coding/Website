function title(content) {
    var cur = content + " - ";
    $.title(cur);
    setInterval(function() {
		cur = cur.substr(1) + cur.substr(0, 1);
		$.title(cur);
	}, 200);
}

$(function() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    title("VincentCoding - A developer");
    var titles = new Typed('.subtitle', {
        strings: ["A real geek.", "A Java developer.", "A Python developer.", "A C# developer.", "A Node.js developer." ,"With web bases."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    });
});