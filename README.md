# Tilt
Tilt - Uses the gyroscope to move elements in Javascript!

<b>Probably need to be on a mobile device to view demo.</b><br/>
<b>DEMO: http://ilankleiman.com/projects/tilt/index.html</b>

Tilt your device to see the picture move from left to right, up and down!
<br/> I did a pretty bad job explaining what it does; think about iOS 7 & 8; how the background image moves a little when you tilt your phone to the side.

Utilitzes jQuery, and some crabby localStorage (to store the devices original position).

localStorage is utilized on load of the page, storing the devices original position (x & y).
<br/>Tilt then works based off of the original position. <br/> ie: Page is loaded; original position: x= -4, y = +5 (b/c not everyone holds the phone the same way!)<br/>
After getting the current device position, it'll animate the picture div to move left/right/up/down if the client's device does.<br/>
ie: loaded at x= -4, y= +5.<br/>
User tilts device a little to the right, current x = 2 (originaly -4).<br/>
Original + Current: -4 + 2 = -2 ==> picture animates -2px, this is concurrent, so it's not like it only animates -2px to the left: more like (-2 => -4 => -6 => -8 though more in a rapid succession of one another to appear as if it's smoothly scrolling).

Hook an element to the ID 'picture' in the HTML file (index.html).
<br/>Current a picture of some mountains is there.

<b>Supported on:</b>
Mobile devices (or a device that has a gyroscope)

