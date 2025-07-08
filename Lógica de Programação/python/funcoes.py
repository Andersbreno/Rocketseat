def olaMundo():
    print('Olá, Mundo!')

def olaPessoa(nome):
    print(f'Olá, {nome}!')

olaPessoa('Andre')


def dobro(numero):
    return numero * 2


print(dobro(5))

def multiplicaDoisNumeros(a, b = 2):
    return a * b

print(multiplicaDoisNumeros(3))

x = 5

def soma():
    x = 10
    print(x)
    return x + 1
soma()
print(x)