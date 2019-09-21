FROM tensorflow/tensorflow:1.14.0-py3 

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    build-essential \
    git \
    wget 

RUN pip install cudatoolkit
RUN pip install cudnn

RUN wget  https://anaconda.org/pytorch/faiss-cpu/1.2.1/download/linux-64/faiss-cpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
RUN tar xvjf faiss-cpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
RUN cp -r lib/python3.6/site-packages/* /usr/local/lib/python3.6/dist-packages/
RUN pip install mkl
RUN pip install --upgrade pip
# RUN pip install tensorflow-gpu==2.0.0-alpha0
# RUN pip install pycurl
RUN  apt-get install -y --no-install-recommends libcurl4-openssl-dev \ 
    libssl-dev
RUN pip install https://github.com/re-search/DocProduct/archive/v0.2.0_dev.zip
RUN pip install gpt2-estimator
RUN pip install pyarrow
RUN pip install bs4 
RUN pip install flask 


WORKDIR /usr/src/app
# COPY . .
EXPOSE 5000

CMD ["python", "server.py"]
