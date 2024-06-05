// import { useState } from "react";
import ImageCard from './ImageCard';

function MainComponent(){
    const slider1Images = [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/d62c78db-3c98-46e7-8566-d685d5c689f3.png?im_w=720&amp;im_q=highq',
      ];
    
      const slider2Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=720&amp;im_q=highq',
      ];
      const slider3Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/cda19e4c-ae11-47b1-831b-a29f94ab76dc.png?im_w=720&amp;im_q=highq',
      ];
      const slider4Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png?im_w=720&im_q=highq'
      ];
      const slider5Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/ee71281a-74af-4200-882a-53c2c8d96a42.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/6cf06751-2105-4462-9d7c-86db287fe20c.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/b90b03a6-8bff-46f3-812e-21bf3636104f.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/44b9a499-bb02-4048-8748-23104627d664.jpeg?im_w=720&im_q=highq',
      ];
      const slider6Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/b4348974-568a-4623-9d8b-0890067e5e34.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/46c755f6-23e2-4f1b-81e2-836ce5581a73.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/591f7acf-c271-4762-89ab-e8e3edb4115b.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/82a3d8ea-c9f1-4a2f-975e-7006723db174.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/77378053-ce46-4874-85ae-e7b34c45cb65.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/fc2d91f3-1200-468e-8b83-c2b4a6f83b5f.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/acd2e7d0-9389-4fc1-9a7c-e590a9d4a3b5.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/411ef1d3-f6bd-479c-98e6-1227abb1d664.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/2b9bdcf2-2584-48ab-8bce-fa6bf013daa7.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/f3a006f8-4d2e-4064-9fb9-820ff7452bcc.jpeg?im_w=720&im_q=highq',
      ];
      
      const slider7Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/862336a0-9c76-41e0-a350-77b345b6548f.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/f39f4ad7-e951-464c-bfde-842e8ac3ea18.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/97d5fe8e-c19d-4f61-b9aa-11895feaacbe.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/8b6d7a9d-92bf-449b-bc68-3742c6628a13.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/9234e075-14be-4b65-b4c6-b9670e1a57b0.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/c9f802f2-9c13-401c-860c-74ef41efe04e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b5da8f04-2670-46b8-ba97-5b3622599de6.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/15fe8f86-f222-405f-86be-14c1551876fd.jpeg?im_w=720&im_q=highq',
           ];
      const slider8Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/bc989f2d-eca8-4bcf-a9b0-b70b8e685a64.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/acb7c0e1-5e3d-4f12-9aea-f9ee71a9035a.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/1e05770b-cfb9-4484-aa14-8fd4d14ee7b3.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/b6288ffe-0bc2-4b01-b2f6-d0d0b78d0959.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/db3f6905-3141-479a-bfbb-65feca74bc1e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/400678f7-fbed-4f07-80b3-ba2fd03c66b1.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/ed181394-a67d-4f7f-8900-feac53044453.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/af7c30fc-c3c5-4393-8ccb-803b2466b4e9.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/39488676-998d-45fc-ae50-4700fa5f864f.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/46e12a73-947b-4a95-a70c-d4c80334eeb9.jpeg?im_w=720&im_q=highq'];
      const slider9Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/0dc93cbc-8753-426d-b48d-6ae45bb1e3fd.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/e0d8bd33-d1a0-424a-a769-d76808fbc64a.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/26a93df9-9d69-4d5e-ba25-fbacabef4975.jpeg?im_w=720&im_q=highq',
      ];
    
      const slider10Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/108249b2-6e2b-4dfd-abc4-f0d0da659959.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/e7843985-2cc0-4ae6-a528-babbbe8f5948.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/977dda44-cb92-4a6d-a9ef-b7ed7cf31df1.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/ed26372f-f1a8-4a2c-b4fe-d5eb88875266.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/5e1a4457-1aae-4cbf-a749-594782c948fc.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/05f9593e-9a1d-4bc3-8f5d-128fc70bc17e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/23b4963f-cf9a-490b-874c-41e5ed7bfba4.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/7c500cf2-9082-4fde-b487-ad83fbf977f0.jpeg?im_w=720&im_q=highq',
      ];
      const slider11Images = [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/6bcaf9e7-9496-4d98-90f1-d77c4f9cf0be.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/a87f8f76-689b-446c-8c1b-568b00b8061a.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/c1f73593-65e0-48e0-9235-e4427f567460.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/5301d677-7a92-4420-88f8-51b9c2bf11f2.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/a9949a21-6de2-4567-9a22-c659bacca05f.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/4323a517-3783-4501-a826-cbdbe424d24c.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/c3ed014e-23bf-4e70-997f-ce0169c2bf7f.jpeg?im_w=720&im_q=highq'  
      ];
      const slider12Images = [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/55a2777a-fc80-4d7b-af05-a9f737ff8661.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/ba2f3fdb-57c8-48c3-81bc-9f9b79a90b42.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/3678fa10-80f2-49ba-bff4-657eecf0cbc5.jpeg?im_w=720&im_q=highq',
      ];
      // past experience
      const slider13Images = [
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/fb9dcb8d-7fa5-402f-91ae-fa2a26e9f097.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/1b9af44a-7179-4e2a-9db6-3c6c09b0609d.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/bd6acfc2-8099-46a4-9f6d-5456781f2cd0.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/c6e9bcb2-74e6-435c-9b53-bcc75712321e.png?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/f6e94f81-7507-4dbb-8ae8-bcd054ffb63b.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/f9fb29f7-e04c-461a-94ca-e4532e8cefa1.jpeg?im_w=720&im_q=highq'
        ];
      const slider14Images = [
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/58387bc5-15cf-4be7-bb18-56a9081326fb.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/c9a998fa-2f64-4576-a8e7-025cf2f08e66.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/e504263d-6a89-4124-8b3b-7483d658a29e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/d9520bdd-c46e-433d-a467-372a2157cb43.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b2703230-f8e3-4904-98c2-f3c3e1491d9a.jpeg?im_w=720&im_q=highq'
        ];
      
      const slider15Images = [
        'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/d106e0ef-f825-4ff8-baf7-86256a54fbd5.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/7da53713-0a37-40c4-8eb0-3b294db5757e.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/1954ee23-d520-4c4c-964a-b8c908c07d78.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/180686c5-db83-4b9d-933e-f6b6194b4dff.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/16a723d0-513e-4aa4-9484-a388f1d08a30.jpeg?im_w=720&im_q=highq'
        ];
      const slider16Images = [
        'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/e9fec6f3-b66f-4156-968a-7cc537c06519.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/c963ea36-dc00-4030-9719-34ba4f45ce42.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/98e420b2-c582-4b82-b13f-7338c1e28ce7.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/1b848add-640d-49a9-a3d5-96c19b6ff743.jpeg?im_w=720&im_q=highq'
      ];
      const slider17Images = [
        'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/c67f78f1-5807-449a-9a88-753b7fa62d6a.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/59c0c816-3f21-4027-bfa6-9cf361464921.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/9f57a7cf-5910-4f51-9f7b-0b6b2505bc1d.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/ed52e65f-fd82-4007-97cb-6a6b1d25c896.jpeg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-782615921189136934/original/7c7a3716-6a1a-41c5-bb1c-e33d232373b5.jpeg?im_w=720&im_q=highq'
        ];
      const slider18Images = [
      'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/1c0f22ac-4df7-4463-a915-c66bab72eaf0.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/a927a15f-fe37-4398-ac87-2386ea0c66bd.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/9f845a2c-a22b-4b93-a39c-efaadfd8a2ac.jpeg?im_w=720&im_q=highq',
      'https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/cccf5fd2-d52e-4e18-bd92-cbd04576de77.jpeg?im_w=720&im_q=highq'
      ];
      const slider19Images = [
        'https://a0.muscache.com/im/pictures/be0957a9-da56-47d6-89ca-223b6e75321a.jpg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/c27c3eaf-d825-4628-9d8f-fdbf79910525.jpg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/ccb23909-6320-4f68-9dda-be3cdbb5315f.jpg?im_w=720&im_q=highq',
        'https://a0.muscache.com/im/pictures/miso/Hosting-44577127/original/a43bc870-91dd-4107-be5d-ed441418e42b.jpeg?im_w=720&im_q=highq'
        ];
      
    return(
        <>
        <div className='xl:px-16 lg:px-8 md:px-4 sm:px-3 custom-xs:px-2 grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 custom-xs:grid-cols-1'>
        {/* lg:px-16 md:px-6 sm:px-6 custom-xs:px-6 */}
        {/* <div className='px-4 w-[23rem]'> */}
          <ImageCard
          images={slider1Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
        {/* </div> */}
        <ImageCard
          images={slider2Images}
          title="Another Experience"
          host="Hosted by Someone Else"
          status="Available"
        />
         <ImageCard
          images={slider3Images}
          title="Another Experience"
          host="Hosted by Someone Else"
          status="Available"
        />
         <ImageCard
          images={slider4Images}
          title="Another Experience"
          host="Hosted by Someone Else"
          status="Available"
        />
         <ImageCard
          images={slider5Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider6Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider7Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider8Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider9Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider10Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider11Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider12Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
      </div>
         {/* // past experiences */}
         <div className='text-3xl font-bold xl:px-20 xl:px-20 lg:px-12 md:px-8 sm:px-6 custom-xs:px-6 pb-7 pt-'>
         <span >Past experiences</span>

         </div>

      <div className='xl:px-16 lg:px-8 md:px-4 sm:px-3 custom-xs:px-2 grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 custom-xs:grid-cols-1'>
        <ImageCard
          images={slider13Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider14Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider15Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider16Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
          <ImageCard
          images={slider17Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider18Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
         <ImageCard
          images={slider19Images}
          title="Wake up in the Musée d’Orsay"
          host="Hosted by Mathieu Lehanneur"
          status="Sold"
        />
      {/* </div> */}
      </div>
      </>
    )
}
export default MainComponent