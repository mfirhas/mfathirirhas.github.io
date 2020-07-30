---
title: "Basic Image Processing using C#"
date: 2016-09-26T12:05:00+07:00
tags: ["c#"]
---

> Image Processing is one of Signal Processing Field taking image as the signal. In digital term of processing, the image we used is a digital image with format .bmp, .jpg, or .png. In this post I'll show you basic processing for image processing using C# to loop through image pixels to get and create an image. 

<!--more-->

Most of tools used for implementing code in image processing is Matlab or python. Those tools and languages are great in providing such great libraries to provide ease in developing image processing apps. In this blog we're gonna use C# with .Net Framework in Visual Studio. We're gonna use template Windows Form Application as template. The API that we're gonna use is [GDI+](https://en.wikipedia.org/wiki/Graphics_Device_Interface#GDI.2B) which is already installed in .Net framework. There're some APIs such `Bitmap` that we're gonna use for manipulating images.

# RGB Image
RGB image is a digital image consits of 3 color channels **Red** ,**Blue**, and **Yellow**. These colors construct our digital image into Bitmap format. They're `Bitmap` class that we used from GDI+ libraries that provide us some access to the digital image showed in the monitor. This is native implementation of libraries that access the hardware resources to display output in monitor. Beside those things, we're also gonna use some *pointers* implementation to gather better performances in accessing memory for our image's pixel values. This *pointers* only matters when it comes to large scale project, small scale project won't make any difference in performances.

To initialize Bitmap object in our code, we use `Bitmap` keyword to instantiate an object Bitmap. For example:

{% highlight c# %}
Bitmap bmp = new Bitmap(new Image("Image_path"));
{% endhighlight %}

The code above will initialize a Bitmap object that read the image data from path `Image_path`. `Image` variable read the data from file path, this filepath will be translate to bitmap that will be processed. This Bitmap object consists of many APIs to be implemented, two of them that will be used to access image's pixels are `Bitmap.SetPixel` and `Bitmap.GetPixel`. 

`GetPixel` method will be used to get the pixel values from certain coordinates. We will be used coordinate to get the pixel value here. For example:

{% highlight c# %}
Image img = Image.FromFile("d:\\lena.bmp");
Bitmap bmp = new Bitmap(img);
int R = new int[bmp.Width*bmp.Height];
int G = new int[bmp.Width*bmp.Height];
int B = new int[bmp.Width*bmp.Height];
int counter = 0;
for(int y = 0; y < bmp.Height; y++)
{
	for(int x = 0; x < bmp.Width; x++)
	{
		Color c = bmp.GetPixel(x,y);
		R[counter] = c.R;
		G[counter] = c.G;
		B[counter] = c.B;
		counter++;
	}	
}
{% endhighlight %}

In the first line we assign `Image` variable to read file from a path. The we initialize a Bitmap file from Image variable we initialized before. We will use RGB color channels to separate image's color into 3 subband. We will save the values for each color band into array of integer R, G, and B. This array ofcourse will be in length of length times the width of image.

After that we go through loop for each coordinates in image. We use counter for color channel index. We loop from the top left of image to the bottom right. This thing's sure go from left to right and then continued to bottom. The pixel value of each coordinate(x and y) will be stored in `Color` variable. This pixel value will be consists of 3 color channel R, G and B. We will store these values of integer of each color band into each integer array of pixels value. 

Here's another example for `SetPixel`:

{% highlight c# %}
Bitmap bmp = new Bitmap(width, height)
int counter = 0;
for(int y = 0; y < bmp.Height; y++)
{
	for(int x = 0; x < bmp.Width; x++)
	{
		Color c = Color.FromArgb(R[counter], G[counter], B[counter]);
		bmp.SetPixel(x,y,c);
	}	
}
{% endhighlight %}

Let say we want to create a Bitmap image from existing values of pixel stored in variable R, G, and B. We create an empty Bitmap with width and height. This empty Bitmap will be load by pixels value by looping through coordinates of image the same with the `GetPixel` method. We use `Color.FromArgb(R,G,B)` to create a pixel value consits of 3 color channels. The we set the pixel value in coordinate `x` and `y` with value `c`.


That's some basics image processing with C#. The most basic of it is to access the most fundamental component of image itself that is pixel.

