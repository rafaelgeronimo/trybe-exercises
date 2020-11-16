# Exercícios - Git & GitHub
## Parte 1 - Instalação e configuração
Nesse exercício, realizamos a instalação e a configuração do *Git* no sistema operacional.

### Instalação

*Comando para instalar no Linux:*
```shell
sudo apt install git-all
```

*Como estou usando uma distribuição baseada no Arch Linux, o comando que utilizei foi:*
```shell
sudo pacman -S git
```

### Identidade

Para configurar nossa identidade devemos informar ao *Git* nosso nome e endereço de e-mail. Isso é feito através do comando:
```shell
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.com.br
```

### Editor

Aqui configuramos qual é o editor que usaremos para abrir o arquivo de configuração do *Git*, o `.gitconfig`.
```shel
git config --global core.editor "code --wait"
```
| Vamos usar o VS Code como editor durante todo o curso.

Para acessar facilmente o arquivo de configuração do *Git*:
```shel
code .gitconfig
```

### Verificação
Vamos validar e verificar se está tudo certo!

Verificar qual a versão do *Git* está instalada:
```shel
git --version
```

Checar as configurações:
```shell
git config --list
```
| Esse comando deve listar o nome de usuário, email e editor utilizado

## Parte 2 - Criando conta no *GitHub*

Orientados a criar uma conta aqui no *GitHub*

## Parte 3 - Adicionando uma chave SSH na sua conta do *GitHub*

Passos para gerar a chave SSH e adicioná-la à sua conta do GitHub.

### Gerando a chave SSH
```shell
ssh-keygen -t rsa -b 4096 -C "seu@email.com"
```

### Adicionando a chave SSH ao ssh-agent

O _ssh-agent_ é um protocolo que permite login remoto seguro para um computador em uma rede que utiliza criptografica de chave pública. O programa cliente SSH tipicamente é executado durante uma sessão de login remoto e são configurados para olhar para a chave privada do usuário em um arquivo no diretório home do usuário. [Wikipédia](https://pt.wikipedia.org/wiki/Ssh-agent)

Iniciando o `ssh-agent`:
```shell
eval "$(ssh-agent -S)"
```

Agora devemos adicionar a chave privada SSH ao `ssh-agent`:
```shell
ssh-add ~/.ssh/id_rsa
```

### Adicionando a chave SSH na sua conta do GitHub

Instalando o xclip.
Ubuntu e seus derivados:
```shell
sudo apt install xclip
```

Arch e seus derivados:
```shell
sudo pacman -S xclip
```

Copie a chave SSH para a memória com o comando:
```shell
xclip -sel clip < ~/.ssh/id_rsa.pub
```

## Parte 4 - Do `git init` ao `git push`

Nessa parte do exercício, criamos esse repositório.

## Parte 5 - O seu repositório no *GitHub*

Aqui recebemos as instruções para criação dos arquivos iniciais desse repositório e a sincronização desses entre a máquina local e o repositório online.