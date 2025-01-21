# portfolio
This repository contains the source code for my personal portfolio website. Built to showcase my skills, projects, and experience, the website is designed with a focus on modern web development practices and user-friendly design. Technologies used include HTML, CSS, JavaScript, and React.

__*Disclaimer*:__
- This portfolio may not be compatible with viewing on certain mobile devices due to how the main container is wrapped in a custom SVG I made for desktop devices.

__*Lessons Learned:*__
- How to create a custom SVG
- How to implement EmailJS
- How to implement multiple pages
- How to switch states to make it look like the user is on a new page
- How to check compatibility between resolutions

__*Most Major Problems Encountered:*__
- **Problem 1:** I initially went for a full rectangle main container where I would put a gradient on it and then make the avatar border match the gradient, but there was no way to make them flow seemlessly into each other. They would have the same gradient but the avatar border would show obvious signs that it was not flowing together with the main container.
    - **Solution:** I learned to create a custom SVG so that it's a rectangle with a circle infused in the top left so I could place my avatar there. This way, the colors would flow seemlessly into each other.

- **Problem 2:**  The portfolio is not compatible with multiple resolutions. I did not take into account multiple resolutions until about 75% of the way in my project.
    - **Solution:** Using media queries, I was able to cover many resolutions; however, mobile devices seem to struggle the most. The SVG main container does not make the project efficiently vertically scalable.

    In the future, I will need to plan out my foundation better or else I will end up with nearly unsolvable problems like the SVG scaling. The full solution is doable, but the effort to hit every resolution in terms of width and height is not worth it. Normally, media queries need to hit a few different resolutions in terms of width, but with your main container being an SVG, you need to account for both axises.

Of course there were many other problems too, but I deemed these as the most noteworthy and most-time consuming.  

__*Ending Notes:*__
- This was my first full-on project where I implemented everything I learned. I have created smaller projects (not displayed on my portfolio or my resume) that utilize front-end and back-end technologies, but this is my first big project.
- Before, I mostly created projects that entirely utilized either front-end specifically or back-end specifically, but not really made together.
- Moving forward, I learned a lot of lessons, especially on creating a more solid foundation, even at a small cost of showcase. If I simply leaned into a solid-color background, I would have easily avoided the two most major problems of the project.