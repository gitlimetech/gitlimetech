#!/bin/sh

echo "Switching to branch master"
git checkout main

echo "Building app"
#yarn run build
npm run build

echo "Deploying files to server"
rsync -avP build/ root@172.105.49.107:/var/www/html/merchant
echo "Deployment complete"
