from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import codecs
import re
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import sys
import time

options = webdriver.ChromeOptions()
options.add_argument('-headless')
# options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options=options)
# driver = webdriver.Chrome()

import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json

# Accessing the Data base


########## Just for some testing
# with open("test.json", "r") as f:
#     file_contents = json.load(f)

# for key, value in file_contents.items():
#     ref.push().set(value)

# print(class_list)

def time_converter(time):
    newtime = int(time.split(":")[0])
    newmin = int(time.split(":")[1])
    if(newtime>12):
        timestr = str((newtime-12)) + ':'+str(newmin)+'pm'
        # timestr = str((newtime-12)) + ':00pm'
        return timestr
    else:
        timestr = str(newtime) + ':'+str(newmin)+'am'
        # timestr = str(newtime) + ':00am'

def time_converter2(time):
    newtime = int(time.split(":")[0])
    newmin = int(time.split(":")[1])
    if(newtime>12):
        # timestr = str((newtime-12)) + ':'+str(newmin)+'pm'
        timestr = str((newtime-12)) + ':00pm'
        return timestr
    else:
        # timestr = str(newtime) + ':'+str(newmin)+'am'
        timestr = str(newtime) + ':00am'
    

def scrap_em_all(userCalender, userCampus, userNumPeople, userTime):

    # userCampus = "CA"

    if(userCampus=="B"):
        driver.get('https://libcal.rutgers.edu/spaces?lid=2565')
        month = userCalender.split('-')[1]
        # month = "10"
        day = userCalender.split('-')[2]
        # day = "27"
        # userTime = "14:30"
        driver.find_element(By.CLASS_NAME,'fc-goToDate-button').click()
        if(month=="11"):
            # time.sleep(3)
            driver.find_element(By.CLASS_NAME,'next').click()
            driver.implicitly_wait(10)
            
        if(driver.find_element(By.CLASS_NAME, "today").text==day):
            driver.find_element(By.CLASS_NAME, "today").click()            
            # test = driver.find_elements(By.CLASS_NAME, "day")
            # for i in test:
            #     print(i.text)
            #     print(i.get_attribute('class'))
            # print("You are gay")
        
        else:
            days = driver.find_elements(By.CLASS_NAME, "day")
            for date in days:
                try:
                    if(date.get_attribute('class')=="day"):
                        if(date.text==day):
                            date.click()
                            # time.sleep(5)

                except:
                    continue

        tiles = driver.find_elements(By.CLASS_NAME, "fc-timeline-event")
        for tile in tiles:
            title = tile.get_attribute('title')
            newtitle = title.replace(",", "")
            titlesplit = newtitle.split(" ")
            titletime = titlesplit[0]
            titlemonth = titlesplit[2]
            titledate = titlesplit[3]
            titlestatus = titlesplit[-1]
            # print(titlestatus)
            # print(titletime)
            finaltime = time_converter(userTime)
            finaltime2 = time_converter2(userTime)
            # print(finaltime)
            # print(finaltime2)
            if(titlestatus=="Available"):
                if(titledate==day):
                    if(finaltime==titletime or finaltime2==titletime):
                        print(titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Library of Science and Medicine")
                        return titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Library of Science and Medicine"
            # print(titlesplit)
        print("No room available")
        return "No room available"



    if(userCampus=="L"):
        driver.get('https://libcal.rutgers.edu/spaces?lid=2560')
        month = userCalender.split('-')[1]
        # month = "10"
        day = userCalender.split('-')[2]
        # day = "27"
        # userTime = "14:30"
        driver.find_element(By.CLASS_NAME,'fc-goToDate-button').click()
        # driver.implicitly_wait(10)
        if(month=="11"):
            # time.sleep(3)
            driver.find_element(By.CLASS_NAME,'next').click()
            driver.implicitly_wait(10)
            
        if(driver.find_element(By.CLASS_NAME, "today").text==day):
            driver.find_element(By.CLASS_NAME, "today").click()            
            # test = driver.find_elements(By.CLASS_NAME, "day")
            # for i in test:
            #     print(i.text)
            #     print(i.get_attribute('class'))
            # print("You are gay")
        
        else:
            days = driver.find_elements(By.CLASS_NAME, "day")
            for date in days:
                try:
                    if(date.get_attribute('class')=="day"):
                        if(date.text==day):
                            date.click()
                            # time.sleep(5)
                except:
                    continue

        tiles = driver.find_elements(By.CLASS_NAME, "fc-timeline-event")
        for tile in tiles:
            title = tile.get_attribute('title')
            newtitle = title.replace(",", "")
            titlesplit = newtitle.split(" ")
            titletime = titlesplit[0]
            titlemonth = titlesplit[2]
            titledate = titlesplit[3]
            titlestatus = titlesplit[-1]
            finaltime = time_converter(userTime)
            finaltime2 = time_converter2(userTime)
            # print(finaltime)
            if(titlestatus=="Available"):
                if(titledate==day):
                    if(finaltime==titletime or finaltime2==titletime):
                        print(titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Carr Library")
                        return titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Carr Library"
            # print(titlesplit)
        print("No room available")
        return "No room available" 



    if(userCampus=="CA"):
        driver.get('https://libcal.rutgers.edu/spaces?lid=2558')
        month = userCalender.split('-')[1]
        # month = "10"
        day = userCalender.split('-')[2]
        # day = "27"
        # userTime = "14:30"
        driver.find_element(By.CLASS_NAME,'fc-goToDate-button').click()
        # driver.implicitly_wait(10)
        if(month=="11"):
            # time.sleep(3)
            driver.find_element(By.CLASS_NAME,'next').click()
            driver.implicitly_wait(10)
            
        if(driver.find_element(By.CLASS_NAME, "today").text==day):
            driver.find_element(By.CLASS_NAME, "today").click()            
            # test = driver.find_elements(By.CLASS_NAME, "day")
            # for i in test:
            #     print(i.text)
            #     print(i.get_attribute('class'))
            # print("You are gay")
        
        else:
            days = driver.find_elements(By.CLASS_NAME, "day")
            for date in days:
                try:
                    if(date.get_attribute('class')=="day"):
                        if(date.text==day):
                            date.click()
                            # time.sleep(5)
                except:
                    continue

        tiles = driver.find_elements(By.CLASS_NAME, "fc-timeline-event")
        for tile in tiles:
            title = tile.get_attribute('title')
            newtitle = title.replace(",", "")
            titlesplit = newtitle.split(" ")
            titletime = titlesplit[0]
            titlemonth = titlesplit[2]
            titledate = titlesplit[3]
            titlestatus = titlesplit[-1]
            finaltime = time_converter(userTime)
            finaltime2 = time_converter2(userTime)
            # print(finaltime)
            if(titlestatus=="Available"):
                if(titledate==day):
                    if(finaltime==titletime or finaltime2==titletime):
                        print(titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Alexander Library")
                        return titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Alexander Library"
            # print(titlesplit)
        print("No room available")
        return "No room available"  

    if(userCampus=="CD"):
        driver.get('https://libcal.rutgers.edu/spaces?lid=2563')
        month = userCalender.split('-')[1]
        # month = "10"
        day = userCalender.split('-')[2]
        # day = "27"
        # userTime = "14:30"
        driver.find_element(By.CLASS_NAME,'fc-goToDate-button').click()
        # driver.implicitly_wait(10)
        if(month=="11"):
            # time.sleep(3)
            driver.find_element(By.CLASS_NAME,'next').click()
            driver.implicitly_wait(10)
            
        if(driver.find_element(By.CLASS_NAME, "today").text==day):
            driver.find_element(By.CLASS_NAME, "today").click()            
            # test = driver.find_elements(By.CLASS_NAME, "day")
            # for i in test:
            #     print(i.text)
            #     print(i.get_attribute('class'))
            # print("You are gay")
        
        else:
            days = driver.find_elements(By.CLASS_NAME, "day")
            for date in days:
                try:
                    if(date.get_attribute('class')=="day"):
                        if(date.text==day):
                            date.click()
                            # time.sleep(5)
                except:
                    continue

        tiles = driver.find_elements(By.CLASS_NAME, "fc-timeline-event")
        for tile in tiles:
            title = tile.get_attribute('title')
            newtitle = title.replace(",", "")
            titlesplit = newtitle.split(" ")
            titletime = titlesplit[0]
            titlemonth = titlesplit[2]
            titledate = titlesplit[3]
            titlestatus = titlesplit[-1]
            finaltime = time_converter(userTime)
            finaltime2 = time_converter2(userTime)
            # print(finaltime)
            if(titlestatus=="Available"):
                if(titledate==day):
                    if(finaltime==titletime or finaltime2==titletime):
                        print(titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Douglass Library")
                        return titlesplit[6]+" "+titlesplit[7]+" "+titlesplit[8]+" Douglass Library"
            # print(titlesplit)
        print("No room available")
        return "No room available"

check = False

cred = credentials.Certificate("cred.json")
firebase_admin.initialize_app(cred, {
    'databaseURL':'https://studyspace-ba88a-default-rtdb.firebaseio.com/Users'
})
while True:

    ref = db.reference("/")
    class_list = ref.get()
    for name, content in class_list.items():
        for key, value in content.items():
            # print("Its working")
            if(value["userStatus"]=="false"):
                check = True
                ref.child(name).child(key).update({'userStatus':"true"})
                userCalender = value["userCalender"]
                userCampus = value["userCampus"]
                userNumPeople = value["userNumPeople"]
                userTime = value["userTime"]
                # finalLib = value["finalLib"]
                # print(finalLib)
                print(userCalender)
                print(userCampus)
                print(userNumPeople)
                print(userTime)
                output = scrap_em_all(userCalender, userCampus, userNumPeople, userTime)
                ref.child(name).child(key).update({'finalLib':output})

# driver.get('https://libcal.rutgers.edu/spaces?lid=2558&gid=4346&c=0')


