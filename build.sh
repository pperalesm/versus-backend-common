npm run build
npm pack

cp backend-common-0.0.1.tgz ../catalog-microservice
cd ../catalog-microservice
npm install file:backend-common-0.0.1.tgz
cd ../backend-common

cp backend-common-0.0.1.tgz ../accounts-microservice
cd ../accounts-microservice
npm install file:backend-common-0.0.1.tgz
cd ../backend-common
