#!/bin/bash

export PUBLIC_URL=https://allowance.fun
yarn build 
cd build 
sudo chown -R jcorbett:jcorbett /data/www.allowance.fun
rsync -av --delete . /data/www.allowance.fun/
sudo chown -R jenkins:jenkins /data/www.allowance.fun
cd -
