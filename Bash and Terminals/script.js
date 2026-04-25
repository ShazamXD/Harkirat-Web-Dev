/* Terminal is nothing but another interface to do things on your machine

- pw: Print Working Directory 
it tells where am i right now in the system 

- cd: Change Directory 
it lets you move from one folder to another 

- cd .. : goes one step back, takes you to the parent folder (one level up)


- cd ../.. : go up two levels 

- ls : List Files and Folders 
it shows you all what is inside the folder

- mkdir : Make Directory
It creates a new directory (folder) in your current location

- touch : creates a new empty file, if it exists then just updates its timestamp (not important right now)

- cat : Concatenate 
show file content in terminal, it displays what's inside this file 


- vi : open a file in a terminal editor

💡 What it does:

It lets you:

create files
edit files
write code/text
👉 all inside the terminal
🧠 Think of it like:

touch → gives you an empty paper 📄
cat → lets you read it 📖
👉 vi → lets you edit and write on that paper ✍️

💻 Example:
vi file.txt

👉 Opens the file in editor mode

⚠️ Important (this is where beginners struggle)

vi has modes:

1. Normal mode (default)
You can’t type directly
Used for commands
2. Insert mode (to type)

Press:

i

👉 Now you can write text

3. Save & exit

Press:

Esc

Then type:

:wq

👉 Means:

w = write (save)
q = quit
🚪 Quick exit without saving:
:q!
😅 Reality check

vi feels confusing at first, but:

it’s super powerful
every developer eventually learns it
🧩 One-line summary:

👉 vi = open and edit files inside terminal


- mv : move or rename files/folders
it helps to move the files/folders to different location
example: mv file.txt Documents/ 
        it moves the file.txt to Documents folder 


- cp : copy files/folders
it creates a duplicate of the file or folder
example: . Copy a file
        cp file.txt copy.txt

👉 Creates a new file copy.txt with same content

2. Copy to another folder
cp file.txt Documents/

👉 Copies file.txt into Documents

3. Copy a folder (important ⚠️)
cp -r project/ backup/

👉 -r = recursive (needed for folders)








*/
