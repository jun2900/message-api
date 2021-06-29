# Messaging API

Steps to install this API on local computer:

1. Download and install **docker**:
   - [Download link](https://docs.docker.com/docker-for-windows/install/) for **windows**
   - [Download link](https://docs.docker.com/docker-for-mac/install/) for **mac**
   - For linux u need to download and install docker according distribution and [docker compose](https://docs.docker.com/compose/install/)
2. Clone this repo
3. (Optional) Kill all service that are running on port 3306 (usually mysql service) and port 3000 on your local computer. If there is no service that running on the specified port then skip this step
4. Go to this clone directory on your local machine and on the root folder change **.env.sample** to **.env**
5. Build all the docker image using this command on the project root folder in your terminal:
   > docker-compose up
6. Now you can access the api. Here is the Postman collection regarding the api https://www.getpostman.com/collections/37933fa84d8925db2a4d
