# Lettering Widget

Take ultimate control over your type.

## Contributing

For more information on contributing to this repository visit [Contributing to a GitHub repository](https://world.mendix.com/display/howto50/Contributing+to+a+GitHub+repository)!

## Typical usage scenario

Use this to have complete control over every letter, word or line in any headline.
 
## Description/Demo

Add your widget to the page. Within the widget's properties choose a class name that you will also apply to your headline. Select how you want your headline to split up by character, words or line. Apply same class to headline. On running the Modeler the code of the headline will appear as:

`<h2 class="mx-name-label5 lettering" data-mendix-id="236" aria-label="Dashboard Actions">
	<span class="char1" aria-hidden="true">D</span>
	<span class="char2" aria-hidden="true">a</span>
	<span class="char3" aria-hidden="true">s</span>
	<span class="char4" aria-hidden="true">h</span>
	<span class="char5" aria-hidden="true">b</span>
	<span class="char6" aria-hidden="true">o</span>
	<span class="char7" aria-hidden="true">a</span>
	<span class="char8" aria-hidden="true">r</span>
	<span class="char9" aria-hidden="true">d</span>
</h2>`

Now the text is easy to manipulate in your CSS. For example:

`.lettering{
  font-size:50px;
  font-weight:bold;

}
.lettering span{
  position:relative;
  display:inline-block;
}

.lettering span:nth-child(odd){
  color:#58B4D4;
  top: 3px;
  transform: rotate(3deg);
  
}
.lettering span:nth-child(even){
  color:#ABE0F3;
  transform: rotate(-3deg);
} `

### Gothchas

There are a few style settings to take note of when using Lettering.

If you want to adjust the postioning of the letters via, top, bottom, left or right properties set the all span's position to `relative`.
For use of the transform property set the all span's display to `inline-block`
