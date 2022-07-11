# Sample Staking

this repo contains 3 apps
<br/>
1 - smart contracts

2 - frontend

3 - backend


first of all you need to deploy smart contracts in your own hardhat node 
<br/>
then you need to copy 'config.ts' file from root of smart_contract project to root of frontend and backend project , it contains deployed contracts address
<br/>
in backend project you need to add MySql URL in .env file ( i pushed this file just for sample )
<br/>
now , you can run the frontend and backend

>smart_contract 
>>run npm i
<br/> 

>>npx hardhat run scripts/deploy.ts --network localhost 
<br/>

>backend 
>> run yarn install
<br/>

>> add backend address in .env
<br/>

>> run yarn start:dev
<br/>

>frontend 
>> run yarn install
<br/>

>>run yarn dev

>swager URL is 
>>http://localhost:3001/docs

>you can get all history from backend by calling
>>http://localhost:3001/staking