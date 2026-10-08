# Página de divulgação do curso PNEEI-TEE (IFSertãoPE)

Curso de Formação Inicial para a Rede de Governança da Política Nacional de Educação Escolar Indígena dos
Territórios Etnoeducacionais (PNEEI-TEE).

Este repositório contém uma página web **estática**: apenas HTML, CSS e JavaScript. Não há banco de dados,
PHP, formulário, cookies, rastreadores nem bibliotecas carregadas de serviços externos (CDN). Basta publicar
os arquivos em um servidor web comum (Apache, Nginx, IIS etc.).

## Arquivos a publicar no servidor

Todos devem ficar na **mesma pasta**:

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Página principal do curso (página inicial) |
| `acessibilidade.html` | Página de acessibilidade |
| `styles.css` | Estilos |
| `abas.js` | Script das abas (PPC, Materiais, Galeria) |
| `Curso.png` | Banner do curso |
| `PPC.pdf` | Projeto Pedagógico do Curso |

Os demais arquivos do repositório (`.git`, `.gitignore`, `.nojekyll`, `README.md`) **não precisam** ir para o
servidor.

Os caminhos são relativos, então a página funciona na raiz do domínio ou em uma subpasta, sem ajustes. Os nomes
dos arquivos diferenciam maiúsculas de minúsculas (importante em servidor Linux): mantenha exatamente como estão.

## Requisitos do servidor

1. Servir os arquivos por HTTPS.
2. Codificação UTF-8 (os arquivos já estão em UTF-8 e declaram isso no HTML).
3. Não enviar o cabeçalho `X-Frame-Options: DENY` nem uma política CSP `frame-ancestors 'none'`. A aba PPC
   exibe o `PPC.pdf` dentro da própria página (iframe do mesmo domínio): `X-Frame-Options: SAMEORIGIN` ou
   `frame-ancestors 'self'` funcionam. Se o cabeçalho bloquear, o visualizador fica em branco, mas os botões
   "Baixar o PPC" e "Abrir em nova aba" continuam funcionando.
4. Se houver política de segurança de conteúdo (CSP), a página precisa apenas de scripts e estilos do próprio
   domínio (`'self'`). Não há scripts inline.

## Links externos

- Acesso ao curso no AVA: <https://ava.ead.ifsertaope.edu.br/course/view.php?id=1123>
- Portal do IFSertãoPE: <https://ifsertaope.edu.br/>
- Página de acessibilidade: links para o W3C (w3c.br, w3.org) e para o eMAG (emag.governoeletronico.gov.br).

## Atualização do conteúdo

- Os textos ficam em `index.html` e `acessibilidade.html` (edição em qualquer editor de texto).
- As seções "Materiais do curso" e "Galeria de fotos e vídeos" ainda estão reservadas ("em breve") e serão
  preenchidas depois, editando o `index.html` e enviando os novos arquivos (PDFs, imagens) para a mesma pasta.
- Para trocar o PPC, substitua o `PPC.pdf` mantendo o mesmo nome. Se o navegador exibir a versão antiga, é
  cache: limpe o cache do servidor/CDN, se houver, ou peça atualização forçada (Ctrl+F5).

## Acessibilidade

A página segue as recomendações do WCAG 2.0 e do eMAG 3.1: link "pular para o conteúdo", textos alternativos,
contraste mínimo AA, navegação completa por teclado (inclusive nas abas) e compatibilidade com ampliação de
texto. Sem JavaScript, todo o conteúdo continua acessível.
