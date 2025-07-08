soma = 0
n = 1

# while n <= 10:
#     soma = soma + n
#     n = n + 1
#     print(f'Soma: {soma}')
#     print(f'n: {n}')

# for index in range(1,11):
#     soma += index

soma = sum([i for i in range(1,11)])
print(f'A soma dos números de 1 a 10 é {soma}')