## Before Starting This Task

Watch the following video and skim its accompanying note.

* Layers (Part 1) ([video](https://www.youtube.com/watch?v=dGnnlqIXwHY&list=PLVD25niNi0Bmz_QDPAm_KPNxGRWDfVZnO&index=16)|[note](https://github.com/MissStrong/ICS2O/blob/main/Notes/Unit%202/08.1%20Layers%20(Part%201).md))

**Only begin this task if you have already finished Exercise 2.7.**

## Instructions

Go to **script.js** under **Files** and complete the body of `draw()` to replicate the sketch below as closely as possible. There is one non-trailing circle that follows the mouse in the foreground and there are trailing circles with the coordinates `(width/2, mouseY)` in the background. The colour of the non-trailing circle stays the same but the colours of the trailing circles are randomly chosen from an array of three colours. If you want, you can change what the four colours in the sketch are.

![](https://raw.githubusercontent.com/MissStrong/ICS2O/main/Images/Overlapping_Circles.gif)

*Do not* modify anything in **index.html**. This HTML file needs to be there in order for the sketch to display properly.

When it works, and you've answered the questions in **sources.md**, click **Submit** in the top right corner. 

## script.js

Here is the original code in **script.js** for reference:

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createGraphics(width, height);
  // What else goes here?

function draw() {
  // What goes here?
}
```
