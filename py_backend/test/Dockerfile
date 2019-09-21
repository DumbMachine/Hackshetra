FROM ubuntu:16.04

RUN apt-get update && \
  apt-get install -y software-properties-common && \
  add-apt-repository ppa:jonathonf/python-3.6
RUN apt-get update

RUN apt-get install -y build-essential python3.6 python3.6-dev python3-pip python3.6-venv
RUN apt-get install -y git

# update pip
RUN python3.6 -m pip install pip --upgrade
RUN python3.6 -m pip install wheel

RUN wget  https://anaconda.org/pytorch/faiss-cpu/1.2.1/download/linux-64/faiss-cpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
RUN tar xvjf faiss-cpu-1.2.1-py36_cuda9.0.176_1.tar.bz2
RUN cp -r lib/python3.6/site-packages/* /usr/local/lib/python3.6/dist-packages/
RUN pip install mkl
RUN pip install tensorflow-gpu==2.0.0-alpha0
RUN pip install https://github.com/re-search/DocProduct/archive/v0.2.0_dev.zip
RUN pip install gpt2-estimator
RUN pip install pyarrow



WORKDIR /usr/src/app
COPY ./script.sh .


EXPOSE 5000
CMD ["bash", "run"]