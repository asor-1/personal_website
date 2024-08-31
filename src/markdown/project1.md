# Tracking Single Cell Segmentations

As of now, segmented single cells is relatively easy with resources such as Cellpose and Stardist at user's disposal.
However, it can take users hours on end just to find the ground truth lables for their cell segemention. I'm introducing UCellSeg, and unsupervised learning model that is able to cell segment with a fraction of the amount of ground labels required from other methods. 

## Table of Contents
- [Installation](#Installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Installation

Step-by-step instructions on how to install and set up your project.

```bash
git clone https://github.com/asor-1/yourproject.git
cd 
pip install -r requirements.txt
```
## Loading images 

Input all of your files in the */data* folder. 

# Running the GUI

Inputting these commands into the terminal will allow you access the GUI.
```bash
cd GUI_folder
python GUI_module.py
```
### How to contorl the GUI
If you need a more in depth explanation of the GUI please check out this link -> [insertlINk]

---

Since you are using the GUI we ask the user to provide use which 1-5 user based segmentations of the cells. This will help the model generalize the shape of the cells. This will be done by the following:
1. Click user-segmentations. This will pop up frames/sections of your images and you will provide the model 1-5 segmentations of the cells. These segmentations will be saved and then added to the training of your model.
**Controls**
- You can control the segmentation process w
