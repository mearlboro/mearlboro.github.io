---
layout: post
title: "Synch.Live"
subtitle: "Part 6: Filming and tracking"
description: We set up a Raspberry Pi 4 with a Raspberry Pi High Quality camera to film the Synch.Live players and track their motion with OpenCV.
hidetitle: "display:none"
categories: [complexity, raspberrypi]
permalink: "synch-live-part-6"
sections:
 - title: introduction
   url: '#introduction'
 - title: The Kit
   url: '#the-kit'
   nested:
     - title: high quality camera
       url: '#high-quality-camera'
     - title: Lens
       url: '#lens'
 - title: Implementation
   url: '#implementation'
   nested:
     - title: Hardware
       url: '#hardware'
     - title: Configuration
       url: '#configuration'
     - title: Software
       url: '#software'
     - title: Stream
       url: '#stream'
 - title: Object Tracking
   url: '#tracking'
   nested:
    - title: Preprocessing
      url: '#preprocessing'
    - title: Detection
      url: '#detection'
    - title: Tracking
      url: '#tracking'
 - title: Bibliography
   url: '#bibliography'

---

### Introduction

With a fleet of 10 hats now fully [built](/synch-live-part-3), [deployed](/synch-live-part-4) and [synchronised](/synch-live-part-5), it is now time to focus our attention to the other core component in our system: the observer.

The system consists of a camera that records the motion of the players of Synch.Live, and a computer that processes this video, by tracking the green pilot light at the top of each hat and producing the trajectories of all players. Moreover, once these trajectories are computer, the system performs periodic information-theoretic calculations over a given time window, and the results of these calculation will inform how synchronised the blinking lights are on the hats.

In this post, I document how we built the hardware, I play with the Raspberry Pi camera and OpenCV tracking, hopefully will finish up with our first pre-pre-pilot, where we will collect some real world data of humans moving around with the hats on.

The hardware configs, software installs and code can be deployed directly using Ansible - [instructions & code]().

This article is part of a series describing my collaboration with [Hillary Leone](https://hillaryleone.com) on [Synch.Live](https://www.synch.live).
To summarise, Synch.Live is a _game in which of groups of strangers try to solve a group challenge, without using words.  We will use a specially-designed headlamp, simple rules and a just-published  algorithm to create the conditions for human emergence._
A discussion about emergence and the goals of the project is in a [previous article](/synch-live-part-1).


### The Kit

To build the observer system, we use the following parts:

* [Raspberry Pi 4](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) with 8GB of RAM, a case and cooling fan. We used the [starter kit by Labists](https://www.amazon.co.uk/LABISTS-Raspberry-Starter-Motherboard-Preloaded/dp/B07WKKS471).
* [Raspberry Pi high quality camera](https://www.adafruit.com/product/4561)
* [set of C-mount lens](https://thepihut.com/collections/raspberry-pi-camera-lenses/products/raspberry-pi-high-quality-camera-lens?variant=31811254190142) for the camera
* tripod or a stand
* set of adjustable clamps

We may also need he following tools at various times in the build:

* soldering station
* velcro
* extra length of wire
* multimeter, to check wiring

<br/>

#### High Quality Camera
The RPi High Quality camera really is an impressive thing for the price and amazing for many applications from time-lapse photography to home-brewed physical security systems. It features a Sony-[IMX477](https://www.arducam.com/sony/imx477/) sensor, of 7.857mm diagonal (which allegedly makes it a 1/2.3" sensor), with 12.3MP resolution and rather high sensitivity.
Actual sensor size is 7.56 x 5.47 mm so an aspect ratio of about 4:3.

This means a crop factor of about 5.6 when attaching lens. We will discuss this below in the lens section.

![](/assets/img/posts/synch/sensor.png)

<br/>

#### Lens
The RPi High Quality camera supports C-mount and CS-mount lens. This is the same mount for 8mm film, as well as a standard in CCTV cameras, so besides the RPi lens, one could find some nice lenses for it in an old camera shop as well (I'm sure I'll play with this one day).

The CS and C mounts have the same screw-in mechanism of the same depth and circomference, but the lens is father away from the camera in C-mount, so a little adapter ring normally comes with the camera.

I was a little dazzled by the [choice](https://thepihut.com/collections/raspberry-pi-camera-lenses) of lens on the page, so we went for the starter kit.

![](/assets/img/posts/synch/lens.png)

Our widest lens has a 6mm focal length.
This lens has a smaller resolution (3MP) but a wide aperture of 1.2. Even so, the High Quality camera is a good choice despite not making use of all the resolution in some cases, as it has high sensitivity and better colour accuracy then the normal RPi camera, both of which are quite important when filming at night-time and doing object detection based on colour.

An alternative are M12 lens, which are smaller, lighter and cheaper, also very popular in the CCTV world. These work natively on the Arducam, but require a convertor to be used on our camera. For example the Arducam ulta-wide [2.72mm M12-mount lens](https://thepihut.com/collections/raspberry-pi-camera-lenses/products/m12-lens-140-degree-ultra-wide-angle-with-raspberry-pi-hq-camera-adapter). It's likely that vignetting or a fisheye effect may occur if we use them because they are designed for smaller sensor sizes, these are also likely to have smaller resolution as well, yet we may still find these lenses useful despite the drawbacks if we need a larger angle of view.

<br/>

#### Angle of view
To better understand what each focal length really means for our sensor size, it's worth refering to the [angle of view](https://en.wikipedia.org/wiki/Angle_of_view) (AOV), a value based on the sensor size and focal length.
Similarly, depending on how much space the Synch.Live players have to move and how tall the camera is set, we calculate the the AOV required by our experiment and choose a lens that matches that on our specific sensor size.

The AOV is different depending on the sensor diagonal, height and width, and these are used on a case-by-case basis because sensors (especially in cinema) have various aspect ratios. Recall ours is 4:3, so we should also aim to put the players in a space with the same aspect ratio and then use the diagonal calculation. Otherwise one may have to calculate the sides and potentially get a lens with a slightly larger AOV to make sure whole space fits in frame.

To calculate AOV of a camera in Python, assuming `l` can be either of the diagonal/height/witdh of the sensor, and `f` is the focal length of the lens, we use the arctangent function and convert from radians to degrees.

To calculate AOV for an experiment, `l` takes the diagonal/height/width of the space where the players move, and `f` is the height the camera is set at.

```python
def aov(l: float, f: float) -> float:
    aov_rad = 2 * math.atan(l / (2 * f))
    aov_deg = aov_rad * 180 / math.pi

    return aov_deg
```
It results that our 6mm lens on the RPi high quality camera has a diagonal AOV of ~66.43°. The vendor advertises 63° although that may be because of calculating the horizontal size and possible rounding error. This lens is perfect for a 20mx15m space with the camera set at a height of about 40m.

For those used to (film) photography, we can also use the AOV to do a direct comparison with familiar focal lenses on a 36x24mm sensor (A.K.A. 35mm/FX/full-frame, which has ~43.26mm diagonal). We can also multiply the focal lens with the crop factor for our sensor to get the equivalent 35mm lens, which gives us ~33mm.

The 16mm lens we bough has higher resoluton of 10MP and variable aperture as well and it will be very useful when the observer is set up very high (AOV is ~27.6°).

As we may need to use other lens depending on the experimental setup, we will likely explore wider angle lens:

* [3.2mm C-mount lens](https://thepihut.com/collections/raspberry-pi-camera-lenses/products/ultra-wide-angle-c-mount-lens-for-raspberry-pi-hq-camera-3-2mm-focal-length), the spec claims the AOV is 120° but my calculation gives 101.67° on the High Quality camera
* [2.8mm to 12mm varifocal C-mount lens](https://thepihut.com/collections/raspberry-pi-camera-lenses/products/c-mount-lens-for-raspberry-pi-hq-camera-2-8-12mm-varifocal), the spec claims different AOV than my calculation yields, which is 140° for 2.8mm and 36.25° for 12mm.

<br/>


### Implementation

To setup the observer, we first put together the hardware, image the SD card, and prepare it to deploy configuration with Ansible. The specific steps are described below, and the setup script and Ansible playbook are available [here]().

#### Hardware

1) **Plugin camera connector**

The camera module connects to the RPi using a ribbon connector.

![](/assets/img/posts/synch/camera-module.png)

The ribbon is easily detached from both sides. Connect the ribbon to the RPi first, and fix it in place as shown in the animation. Fold it away from the side with the USB ports before installing the fan.

![](/assets/img/posts/synch/connect-camera.gif)

2) **Attach fan**

The fan has a quiet mode and a full power mode depending on what GPIO pins it's connected to. The former is pins 1 and 6, the latter is 2 and 6, which is what we went for to make sure the RPi won't overheat when doing all those graphics for object detection and tracking.

![](/assets/img/posts/synch/pi4-fan.png)


3) **Camera and Lens**

It's worth mounting the camera on a mini-tripod during setup. The RPi camera has a standard (quarter-inch) tripod screw.

We set up our 6mm lens, which is a CS-mount lens so it does not require any adapter, following the [guide](https://cdn.shopify.com/s/files/1/0176/3274/files/Typical_CS-Mount_Lens_Guide.pdf?v=1588262518). Screw the lens in, tighten the screw on the mount, and make sure turning the focus wheel does not unscrew it.

Finally, our system looks like this:

![](/assets/img/posts/synch/pi4-and-camera.png)

3) **Support**

We attach clamps to the computer using Velcro, so we can fix it onto the tripod or stand that will be holding the camera using the tripod screw.

![](/assets/img/posts/synch/pi4-velcro.png)

Now RPi we can move the camera to a stand and attach the computer with the clamps.

![](/assets/img/posts/synch/pi4-clamps-stand.png)

Using a C-stand will be particularly useful if we setup the observer out a window in a tall building. This will allows us to easily point the camera downwards and have a lot of control over the angle.

![](/assets/img/posts/synch/pi4-stand.png)

<br/>

#### Configuration

4) **OS installation**

The kit for the RPi 4 allows easy access to the SD card, so unlike the setup for the players we don't have to have the SD card ready before building the hardware.

We install Raspberry Pi OS Lite on the SD card same as for the players.

5) **Preconfiguration**

Almost identical to the setup process on the players documented in [part 4](http://localhost:4000/synch-live-part-4#player-setup), preconfigure the card by enabling SSH, connecting to wireless, setting the hostname to `observer` and the static IP to `192.168.100.100`, and copying the SSH keys.

6) **Enable camera**

We enable the camera by changing the RPi config. This cane be done with `raspi-config`, and to do it headlessly in the terminal we can run:

```shell
$ raspi-config nonint do_camera 0
```
where 0 means that the flag is enabled.

<br/>

#### Software

7) **Install Python packages**

The camera requires the Python package `picamera`. For the object detection and tracking, we will be using OpenCV an the `imutils` package. The Python version of OpenCV used by the current build is version 4.4.0.46 of `opencv-contrib-python`.

```
pip3 install picamera imutils opencv-contrib-python~=4.4.0.46
```
Installing the above will install `numpy` and other related useful packages.

8) **Interfacing with camera**

It's time to test whether the hardware setup was successful. The RPi provides the software `raspistill` and `raspivid` which can be used to control the camera. The command below takes our first image!

```
raspistill -o first-image.jpg
```

![](/assets/img/posts/synch/first-image.jpg)

It isn't that well focused, but it definitely looks photographic. Nice!

A note worth making is that only one application/thread at a time can access the camera stream. Errors may appear (for example, unable to access the camera) if the connection to the stream has not been closed by the previous application. This may happen quite a bit during testing so Killing the culprit process or restarting the RPi should fix this.

9) **PiCamera in Python**

The `picamera` package provides the `PiCamera` object which can be parametrised with the desired resolution and framerate amongst others. We choose something small (480p) at 12fps rather than 24 as we want to make it easier for the tracking we will do in the future.

Note that it is best practice to let the camera warm up for a second or so before starting to fetch frames from it, and always to stop/release all the streams before closing the appliation.

Our main usage of the camera will be to record video, and the `imutils` library provides the tools to wrap up the feed from the camera into a `VideoStream` object which then allows us to fetch frames one by one. We can also create another stream and use it to write all the frames to disk in the form of a video. This we can do using OpenCV's `VideoWriter` object.

For example, the code below records for 100 frames (approximately 8 seconds) and saves those frames to disk to a file called `output.mov`.

```python
import cv2
from imutils.video import VideoStream
from picamera import PiCamera

read_stream = VideoStream(
    usePiCamera=1, resolution=(640,480), framerate=12).start()
time.sleep(1)

codec = cv2.VideoWriter_fourcc(*'MJPG')
date  = datetime.datetime.now().strftime('%y-%m-%d_%H%M')
video_writer = cv2.VideoWriter(
    f'output.mov', codec, 12.0, (640, 480))

i = 0
while i < 100:
    frame = read_stream.read()
    video_writer.write(frame)
    i += 1

read_stream.stop()
video_writer.release()
```

We use the MJPG (motion JPG) codec which does per-frame compression but not between frame compression, and we save it as `.mov` as it is a better and more modern wrapper than `.avi`.

<br/>

#### Stream

9) **Install Flask**

As we have setup our RPi 4 without a screen, it is rather difficult to focus as we cannot see the image before shooting. To fix this, we wish to stream footage from the camera in real time, so we can frame and focus properly. We also want to be able to see the characteristic bounding boxes resulting from the object tracking in this video.

For this, we setup a web server using Flask. Flask is a very lightweight web library powered by Python. We install it with `pip`:

```shell
$ pip install flask
```

10) **Create server and page templatess**

We use a Python file `server.py` which initialises the Flask application and configures routes using function decorators. For each route, we can return a rendered HTML template. These templates live in a subfolder called `templates/`.

We configure the route `/` to be our homepage, with the template in `index.html`, and we also configure `video_stream`, where we direct the output from the camera. The video stream will then be loaded inside the `index.html` page as if it were a static video or image file.

In order to create this video stream, we declare a global variable `output_frame` which will contain the latest frame that is to be streamed.

The `streaming()` function is where the frames are fetched from the camera and the `output_frame` is set.
This function can be extended with the object detection and tracking on each frame or to save the current frame to disk. The `output_frame` itself can be a modified version of the input frame. To avoid blocking the front-end/webserver side all of this should happen on a separate thread.

`generate_frame()` is a Python generator (as it returns using `yield`) which takes the global `output_frame`, converts it into a binary format and wraps it into a HTTP response which the server sees at the path `video_feed`.

Lastly, to avoid issues of concurrency we use a lock wherever we access the stream produced by the camera as well as when we produce the `output_frame`.

The code below is a minimum working example to stream video from the camera to the web server. The expected directory structure is something like this:

```.
├── server.py
└── templates
    └── index.html
```
<br/>

templates/index.html:
{% assign opentag = '{{' %}
```html
<html>
  <head>
    <title>Synch.Live</title>
  </head>
  <body>
    <h1>Synch.Live</h1>
    <img src="{{ opentag }} url_for('video_feed') }}">
  </body>
</html>
```


server.py:
```python
from flask import Response, Flask, render_template
from imutils.video import VideoStream
import threading
import time

app = Flask(__name__)
app.debug    = True
app.threaded = True

stream = VideoStream(
    usePiCamera=1, resolution=(640,480), framerate=12).start()
output_frame = None
lock = threading.Lock()


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/video_feed")
def video_feed():
    return Response(generate_frame(),
        mimetype = "multipart/x-mixed-replace; boundary=frame")


def generate_frame():
    global output_frame, lock

    while True:
        with lock:
            if output_frame is None:
                continue
            (flag, encoded_frame) = cv2.imencode(".jpg", output_frame)
            if not flag:
                continue

        yield(b'--frame\r\n' b'Content-Type: image/jpeg\r\n\r\n' +
            bytearray(encoded_frame) + b'\r\n')

def streaming():
    global stream, output_frame, lock

    with lock:
        frame = stream.read()
    if frame is None:
        logging.info('Error reading first frame. Exiting.')
        exit(0)

    # detect objects on the first frame
    # object_detection(frame)

    with lock:
        output_frame = frame.copy()

    while True:
        with lock:
            frame = stream.read()

        # track the detected objects in each frame
        # object_tracking(frame)

        with lock:
            output_frame = frame.copy()



 __name__ == '__main__':

    t = threading.Thread(target=tracking)
    t.daemon = True
    t.start()

    app.run(host='192.168.100.100', port=8888, debug=True,
            threaded=True, use_reloader=False)

    # release video stream before closing
    stream.stop()
```

Running this code on the observer using `python server.py` and then visiting `192.168.100.100:8888` from any machine in the same network as the observer should produce a webpage with the stream!

Which it does!!

![](/assets/img/posts/synch/picamera-stream.png)


### Bibliography
https://www.raspberrypi.org/documentation/configuration/camera.md
https://www.raspberrypi.org/documentation/raspbian/applications/camera.md


https://cdn.shopify.com/s/files/1/0176/3274/files/Raspberry_Pi_High_Quality_Camera_Getting_Started_Guide.pdf?v=1588238055

https://pypi.org/project/imutils/


https://makezine.com/projects/beginner-project-a-remote-viewing-camera-with-raspberry-pi/

https://www.pyimagesearch.com/2019/09/16/install-opencv-4-on-raspberry-pi-4-and-raspbian-buster/https://www.pyimagesearch.com/2017/10/09/optimizing-opencv-on-the-raspberry-pi/

