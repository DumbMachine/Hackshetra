# Hackshetra
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

## Desciption:

![image](https://user-images.githubusercontent.com/29337284/65381302-e18cf180-dd0b-11e9-9e90-ffb95ba5aebb.png)
![image](https://user-images.githubusercontent.com/29337284/65381311-0da87280-dd0c-11e9-843f-508b686f7823.png)
![image](https://user-images.githubusercontent.com/29337284/65381352-059d0280-dd0d-11e9-8f0f-6b8ba70c35ea.png)

 This is a simple Google Assistant ChatBot Action, to provide you information about your illness after hearing the symptoms. Data has learnt the embeddings from 1.3 million Q/A answers hosted by BioASQ data. The model trained using Transoformer network was trained individualy on the Answers and Questions dataset, whose lower level embedding were then obtained from FCNN and the feed into a (.) Product Function to give a Similarity Matrix.

 ![image](https://camo.githubusercontent.com/b9ce3382ce50b3cf59ffc061aa9b268bfe27182d/68747470733a2f2f692e696d6775722e636f6d2f777a57743033392e706e67)

## Tech Stack
- Angular for Frontend of the Doctors Dashboard.
- Ml Backend in Python ( Flask ), making use of Tensorflow and Transformer(BERT).
- Node Backend for Google Assistant Actions.

![image](https://user-images.githubusercontent.com/29337284/65381268-4d228f00-dd0b-11e9-92c7-56cfb25e34eb.png)

## Instructions to Run:
```
Make sure you have a good internet connection, otherwise don't even try this. Please dont no.
```
1. Download the required data for the model and install 
```
$ cd py_backend
$ wget  https://anaconda.org/pytorch/faiss-gpu/1.2.1/download/linux-64/faiss-gpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
$ tar xvjf faiss-cpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
$ cp -r lib/python3.6/site-packages/* {$which python}/dist-packages/
$ pip install mkl
$ pip install tensorflow-gpu==2.0.0-alpha0
$ conda install pycurl  # dont forget this, otherwise the next one won't work
$ pip install https://github.com/Santosh-Gupta/DocProduct/archive/master.zip
```
2. 