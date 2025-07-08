tabuleiro = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
]

jogador = 'x'



def exibeTabuleiro():
    for linha in tabuleiro:
        print('|'.join(linha))
        print('-' * 5)


def jogada(linha, coluna):
    if (
        linha < 0 or linha > 2
        or coluna < 0 or coluna > 2
        or tabuleiro[linha][coluna] != ' '
        ):
        print('Jogada Inválida')
        return jogador
    tabuleiro[linha][coluna] = jogador
    return 'o' if jogador == 'x' else 'x'

    # if jogador == 'x':
    #     return 'o'
    # else:
    #     return 'x'

def temGanhador():

    for linha in range(3):
        if(
            tabuleiro[linha][0] != ' ' and
            tabuleiro[linha][0] == tabuleiro[linha][1] and
            tabuleiro[linha][0] == tabuleiro[linha][2]
        ):
            print(f'{tabuleiro[linha][0]} GANHOU!')
            return True
    
    for coluna in range(3):
        if(
            tabuleiro[0][coluna] != ' ' and
            tabuleiro[0][coluna] == tabuleiro[1][coluna] and
            tabuleiro[0][coluna] == tabuleiro[2][coluna]
        ):
            print(f'{tabuleiro[0][coluna]} GANHOU!')
            return True

    if(
        tabuleiro[1][1] != ' ' and
        (
            (
                tabuleiro[0][0] == tabuleiro[1][1] and
                tabuleiro[0][0] == tabuleiro[2][2]
            ) or
            (  
                tabuleiro[0][2] == tabuleiro[1][1] and
                tabuleiro[1][1] == tabuleiro[2][0])
        )
    ):
        print(f'{tabuleiro[1][1]} Ganhou!')
        return True
    

    return False

def temEmpate():
    for linha in range(3):
        for coluna in range(3):
            if tabuleiro[linha][coluna] == ' ':
                return False
    print('Terminou em empate!')            
    return True
        
while True:
    print(f'Jogador da vez {jogador}')
    try:
        linha = int(input('Digite a linha: '))
        coluna = int(input('Digite a coluna: '))
        jogador = jogada(linha, coluna)
    except IndexError:
        print('Digite valores numéricos entre 0 e 2')
    except ValueError:
        print('Digite valores numéricos inteiros')
    exibeTabuleiro()
    if temGanhador() or temEmpate():
        break
# tabuleiro = [['' for _ in range(3) ] for _ in range(3)]
# print(tabuleiro)