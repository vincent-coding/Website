function title(content) {
    var cur = content + " - ";
    $.title(cur);
    setInterval(function() {
		cur = cur.substr(1) + cur.substr(0, 1);
		$.title(cur);
	}, 200);
}

// Website Loaded
$(function() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    title("VincentCoding - A young developer");
    var titles = new Typed('.subtitle', {
        strings: ["A real geek.", "A Java developer.", "A Python developer.", "A C# developer.", "A Node.js developer." ,"With web bases."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: false
      });
      var lang = new Typed('.language', {
        strings: ["Java", "Python", "CSharp" ,"HTML", "CSS", "JS", "PHP", "Node.js"],
        typeSpeed: 75,
        backSpeed: 75,
        loop: true,
        loopCount: Infinity,
        showCursor: false
      });
      var lang = new Typed("#nameAnim", {
        strings: ["Vincent", "VCoding"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        showCursor: false
      });
      var d = new Date();
      document.getElementById("copy").innerHTML = d.getFullYear() + " - Apache 2.0 for the website, different license for projects.";
});