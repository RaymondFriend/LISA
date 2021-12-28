# LISA --- Learning Images with Sound-based Assistance

*Project by: Jacob Weisgal, Kevin Rasmussen, and Raymond Friend. April 10, 2016.*

**LISA** is a conversion tool which turns visual data into audio data. We have designed this tool to restore easy digestion of visual content to individuals who have become visually-impaired in their lifetime.

Specifically, we map the HSB (hue, saturation, and brightness) values of each pixel in an image to an FTV value of a particular instant in the audio file. The order in which we choose the pixels matters a great deal, because we wish to choose them in such a way that any size image would be recognizable in the same shape as any other. As is shown in `Presentation Video.mp4`, the Hilbert Curve (a recursive shape) and its many pseudo-Hilbert Curves perfectly fit this requirement. 

We believe with this system, a training module could be designed to expose visually-impaired individuals to this type of data representation. The conversion taking place can be intuitively understood as:

- *Frequency*: proportional to Hue (reds with lower frequencies, blues with higher)
- *Timbre*: deeper when Saturation is low, lighter when Saturation is high
- *Volume*: negatively proportional to Brightness (darkest colors receive loudest sounds)

This demo is built to indicate the possibilities of analyzing a 2 dimensional image space over a 1 dimensional soundwave. The included video (`Demo.mp4`) is sped up to indicate the intended run-speed of the demo, but only functions at such a speed on a very fast computer.

Another included video (`Presentation Video.mp4`) gives a visualization of what exactly is going on behind the scenes of the calculations and pixel navigation. 

To run the demo yourself (albeit much slower, to provide your browser a breath to keep up), open the `index.html` file in Firefox (due to its relaxed local security settings). If the `index.html` file is opened directly, there may be some issues with cross-domain security and local storage access on a browser that is not Firefox. 

*Note*: For the first time you load an image, a caching error may occur where all but the first pixel will be shaded black. If this happens, simply refresh the page and the image will load properly.

To change the image processed, replace the variable `IMAGE_SET` (defined on line 21 of `index.html`) with the directory to the image of your choice. Some more examples of images able to be processed are included in the images directory.

`Hilbert_Stepper.js`, while not accessed directly in the demo, was used to generate large sequences of coordinates along a N-th order Hilbert curve.
