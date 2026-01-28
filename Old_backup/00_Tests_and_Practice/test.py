
secret_number = 9
guess_count = 0
guess_limit = 3

while guess_count < guess_limit:
    guess = int(input('Guess: '))
    secret_guess = secret_number - int(guess)
    guess_count += 1
    if guess == secret_number:
        print('You won!')
        break
    elif int(guess) < secret_number:
        print("your guess is less than the secret number")
    elif int(guess) > secret_number:
        print("your number is greater than the secret number")
    else:
        print("Sorry you failed!")
    
    if (secret_guess > -2 and secret_guess<2):
        print("Very close!")
    elif((secret_guess > -4 and secret_guess<-2) or (secret_guess > 2 and secret_guess<4)):
        print("Not very close!")
    elif((secret_guess > -6 and secret_guess<-4) or (secret_guess > 4 and secret_guess<6)):
        print("Very far!")
    else:
        print("Way too far")