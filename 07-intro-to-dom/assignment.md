# Reading
- [Eloquent JavaScript, Chapter 12](http://eloquentjavascript.net/12_browser.html)
- [Eloquent JavaScript, Chapter 13](http://eloquentjavascript.net/13_dom.html)

The exercises at the end of Chapter 13 are due before the start of next class!


<p style="text-align: center">
  <img src="img/cat.png" style="position: relative">
</p>
	
<script>
  var cat = document.querySelector("img");
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>