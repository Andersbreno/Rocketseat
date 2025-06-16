print('Olá, eu sou sua assistente, Pythrina. O que você quer fazer hoje?')

comando = input('Digite um comando: ')

match comando:
    case 'Oi'| 'olá':
        print('Oi, como vai você?')
    case 'tchau':
        print('Tchau, fou bom conversar com você.')
    case 'piada':
        print('Sabe qual é o padroeiro das pessoas que trabalham com Ti? São Login.')
    case 'clima':
        print('Tá muito quente. Deve estar uns 50 graus!')
    case _: 
        print('Desculpe, não entendi o comando.')