# SmartGarden
IoT System to monitor soil and gardening conditions

Hardware:
- Android Phone (Control Center, and sending data to Cloudant Server via MQTT requests and receiving with HTTP requests)
- TI MSP432 with TI CC3100 (Wifi Unit pushing data to server via HTTP requests)
- TI CC2650 Sensortag (BLE device sending data to Android Phone)
- NoSQL Server provided by Cloudant


                         System Architecture
                           ________________ 
      NoSQL Server:       |                |
                          |                |
                          |     Server     |
                          |                |
                          |________________|
                         ^                  ^
                        / MQTT up            \ HTTP up
      Edge Devices:    / HTTP down            \ 
       _______________v    ________________    \_______________ 
      |                |  |                |  |                |
      |                |  |                |  |                |
      |     Phone      |<----   CC2650     |  |     MSP432     |
      |                |  |BLE             |  |                |
      |________________|  |________________|  |________________|

## App Interface
![Image1](/App_Images/Image1.jpg)
![Image2](/App_Images/Image2.jpg)
![Image3](/App_Images/Image3.jpg)
