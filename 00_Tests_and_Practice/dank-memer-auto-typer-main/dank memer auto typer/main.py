from re import search
import pynput
import random
import time
from pynput.keyboard import Key, Controller
from pynput.mouse import Button, Controller as mController

mouse = mController()
keyboard = Controller()

i = 0
sleep_time = random.randint(30,60)

def shiftTabTimes(num):
    times = 0
    number = random.randint(3,num)
    while times < number:
        with keyboard.pressed(Key.shift):
            keyboard.press(Key.tab)
        time.sleep(0.5)
        times += 1
    keyboard.press(Key.enter)
    
def shiftTabTimes_b(num):
    times = 0
    number = random.choice([3,num])
    while times < number:
        with keyboard.pressed(Key.shift):
            keyboard.press(Key.tab)
        time.sleep(0.5)
        times += 1
    keyboard.press(Key.enter)

while i < 1:
    
    time.sleep(5)
    keyboard.type('pls dig')
    keyboard.press(Key.enter)
    time.sleep(2)
    keyboard.type('pls fish')
    keyboard.press(Key.enter)
    time.sleep(2)
    keyboard.type('pls beg')
    keyboard.press(Key.enter)
    time.sleep(2)
    keyboard.type('pls hunt')
    keyboard.press(Key.enter)
    time.sleep(2)
        
    # keyboard.type('pls search')
    # keyboard.press(Key.enter)
    # time.sleep(1)
    # # mouse.click(Button.left)
    # shiftTabTimes(5)
    # time.sleep(5)
    # keyboard.type('pls highlow')
    # keyboard.press(Key.enter)
    # time.sleep(1)
    # # mouse.click(Button.left)
    # shiftTabTimes_b(5)
    # time.sleep(5)
    # keyboard.type('pls crime')
    # keyboard.press(Key.enter)
    # time.sleep(1)
    # # mouse.click(Button.left)
    # shiftTabTimes(5)
    # time.sleep(5)
    # keyboard.type('pls pm')
    # keyboard.press(Key.enter)
    # time.sleep(1)
    # # mouse.click(Button.left)
    # shiftTabTimes(7)
    
    # time.sleep(45)
    time.sleep(sleep_time)