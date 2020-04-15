# Online Assesment Application Backend

## Features


1  User can signup/login


2 User will be Directed To dashbord after Authentication


3 User can Give test from Dashbord and can see Report of all Tests



# APi endpoint


### /user/create (POST)

To create user in db

### /user/create-session (POST)

To create session


Library used passport jwt and  google oauth



### /user/report (GET)   

generate report of test 


## Endpoints for question


### /question/create (POST)   


 To add question in db

### /question/getQuestions (GET)   


To get all questions from db

### /question/:id/create/option 


to create options for question




# MODEL SCHEMA


## User 


### name 

### email (unique)

### password 

### report  (consist report of all test given)



## Question

### title (question info)


### options (conatins list of options )


### tag 

### marks

### correct (correct option)



## Option

### text 

### id (to identify no of option for a question)

### question  ( store reference to question)


# Add question along with given field and options to use