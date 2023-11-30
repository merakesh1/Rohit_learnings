from tkinter import *

svs = []
btns = []
pturn = 1
player1 = 'X'
player2 = 'O'

def tictactoe():
    root = Tk()
    root.geometry("300x300")
    add_cells(root)
    print(svs)
    print(btns)
    root.mainloop()

def add_cells(root):
    pos = [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1),
           (1, 2), (2, 0), (2, 1), (2, 2)]

    for i in range(9):
        sv = StringVar()
        sv.set(" ")
        svs.append(sv)

        b = create_button(root, i, sv)
        b.grid(row=pos[i][0], column=pos[i][1])
        btns.append(b)

def create_button(root, ind, sv):
    b = Button(root, width=5, height=2, textvariable=sv, font=(
        'Sans', 23, 'bold'), command=lambda: set_cell(ind))
    return b

def set_cell(ind):
    global pturn
    if svs[ind].get() == ' ':
        if pturn == 1:
            svs[ind].set(player1)
            pturn = 2
        else:
            svs[ind].set(player2)
            pturn = 1

tictactoe()