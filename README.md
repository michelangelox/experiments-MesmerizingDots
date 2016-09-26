# experiments-mesmerizingdots
Experiment found on: https://www.miguelmoreno.net/mesmerizing-dots/

# Mesmerizing dots
A very simple experiment using the KineticJS library to generate and animate dots in a illusory pattern. 

I saw on Reddit a post titled [Mesmerizing Dots] (http://i.imgur.com/c61LxoH.gif) a gif with some coloured dots in motion in a particular pattern.

It was quite intriguing and I found myself staring at the thing for more than I am willing to admit.
So, it was almost midnight, and I am thinking, I can probably do this in a couple of hours… right? Sure, it would be a fun experiment in Javascript.... and there goes my sleep.

Update: not quite finished, but I think I headed in the right direction. 

##Explained: 
The dots.js script code contains a loop that runs 18 times, creating the dots and corresponding animations, while the index rotates the layer that the dot is animating on by 20. I need to get the timing of the individual dots right and perhaps also the changing of colors.
Notice how all the dots just move up and down a static line. 18 dots, 18 lines angled at 20 degrees from eachother. 

I added a toggle button/link so you can see how the illusion suddenly disappears when you see the lines.

##usage
Clone and run **index.html**

![dots](http://i.imgur.com/ogxOwfj.png)
