# 🚀 Guia de Configuração das Landing Pages

Este guia mostra como personalizar as landing pages com as informações do seu negócio e fazer deploy.

---

## 📝 Arquivo de Configuração

Todas as configurações ficam no arquivo `.env` na raiz do projeto. Copie o arquivo `.env.example` e renomeie para `.env`, depois edite as variáveis.

---

## 🔧 Variáveis Disponíveis

### 🏢 Identidade da Empresa

```bash
# Nome da empresa (usado em toda a página)
VITE_COMPANY_NAME=Seu Nome Aqui

# Título da página (aparece na aba do navegador)
VITE_PAGE_TITLE=Seu Nome - Controle Total das Suas Finanças

# Descrição da página (SEO)
VITE_PAGE_DESCRIPTION=Gerencie receitas e despesas pelo WhatsApp. Dashboard completo, metas financeiras e relatórios detalhados.
```

**Onde aparece:**
- `VITE_COMPANY_NAME`: Logo, Hero, seções, depoimentos, rodapé
- `VITE_PAGE_TITLE`: Título da aba do navegador
- `VITE_PAGE_DESCRIPTION`: Meta descrição para SEO

---

### 🖼️ Imagens e Logos

```bash
# URL do logo principal (aparece no topo da página)
VITE_LOGO_URL=https://seusite.com/logo.png

# URL do ícone (favicon)
VITE_FAVICON_URL=https://seusite.com/favicon.ico

# URL da imagem de preview do WhatsApp
VITE_WHATSAPP_PREVIEW_URL=https://seusite.com/preview.png
```

**Dicas:**
- Logo recomendado: PNG com fundo transparente, altura 40-60px
- Favicon: PNG ou ICO, 32x32px ou 64x64px
- Preview WhatsApp: 1200x630px (recomendado para redes sociais)

---

### 📞 Contato de Suporte

```bash
# Telefone de contato (aparece formatado)
VITE_SUPPORT_PHONE=+55 (11) 99999-8888

# Email de suporte
VITE_SUPPORT_EMAIL=suporte@seusite.com.br

# WhatsApp (número com DDD, sem + ou espaços)
VITE_SUPPORT_WHATSAPP=+5511999988888
```

**Onde aparece:**
- Rodapé da página
- Botões de contato
- Link direto para WhatsApp

---

### 💰 Preços dos Planos

```bash
# Preço do plano mensal (use vírgula para centavos)
VITE_PLAN_PRICE_MONTHLY=29,97

# Preço do plano anual (use vírgula para centavos)
VITE_PLAN_PRICE_ANNUAL=179,00
```

**Importante:** Use sempre vírgula para decimais (ex: `29,97` e não `29.97`)

---

### 🔗 URLs de Pagamento dos Planos

```bash
# URL de pagamento do plano mensal (Hotmart, Asaas, Kiwify, etc.)
VITE_MONTHLY_PLAN_URL=https://pay.hotmart.com/XYZ123

# URL de pagamento do plano anual
VITE_ANNUAL_PLAN_URL=https://pay.hotmart.com/ABC456
```

**Como funciona:**
- Se configurar a URL, o botão direcionará diretamente para o pagamento
- Se deixar em branco, o botão direcionará para o WhatsApp (fallback)
- Funciona com qualquer plataforma: Hotmart, Kiwify, Asaas, Stripe, etc.

**Exemplos de URLs:**
- Hotmart: `https://pay.hotmart.com/CODE`
- Kiwify: `https://kiwify.com.br/produto/CODE`
- Asaas: `https://asaas.com/checkout/CODE`
- Stripe: `https://checkout.stripe.com/pay/CODE`

---

### ✨ Funcionalidades dos Planos

```bash
# Funcionalidades do plano mensal (separadas por vírgula)
VITE_PLAN_FEATURES_MONTHLY=Mensagens por texto,Áudio e imagem,Limite por categoria,Relatórios de gastos,Sem fidelidade

# Funcionalidades do plano anual (separadas por vírgula)
VITE_PLAN_FEATURES_ANNUAL=Mensagens por texto,Áudio e imagem,Limite por categoria,Relatórios completos,Metas financeiras,Suporte prioritário
```

**Dicas:**
- Separe cada funcionalidade por vírgula
- Não use espaços após a vírgula (ou use conforme preferir)
- Mantenha as funcionalidades do anual incluindo as do mensal + extras

---

### 📊 Facebook Pixel

```bash
# ID do Pixel do Facebook (conversão)
VITE_PIXEL_FACEBOOK=1234567890123456

# Exigir consentimento para o Pixel (true ou false)
VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT=true
```

**Dicas:**
- Para obter o ID: Acesse o Gerenciador de Eventos do Facebook
- Se `REQUIRE_CONSENT=true`, o Pixel só ativa após o usuário aceitar os cookies

---

### 🏷️ Google Tag Manager

```bash
# ID do container GTM (formato: GTM-XXXXXX)
GTM_ID=GTM-XXXXXX

# Permitir GTM em desenvolvimento (true ou false)
GTM_ENABLE_DEV=true
```

**Dicas:**
- Para obter o ID: Acesse sua conta do Google Tag Manager
- Em produção, mantenha `GTM_ENABLE_DEV=false`

---

## 📋 Exemplo Completo de Configuração

```bash
# Template Variant (não altere)
VITE_TEMPLATE_VARIANT=template1

# Identidade da Empresa
VITE_COMPANY_NAME=Minha Finanças AI
VITE_PAGE_TITLE=Minha Finanças AI - Controle Total pelo WhatsApp
VITE_PAGE_DESCRIPTION=Organize suas finanças pelo WhatsApp. Sem planilhas, sem apps. Simples e rápido.

# Imagens
VITE_LOGO_URL=https://meusite.com.br/assets/logo.png
VITE_FAVICON_URL=https://meusite.com.br/assets/favicon.png
VITE_WHATSAPP_PREVIEW_URL=https://meusite.com.br/assets/preview.png

# Contato
VITE_SUPPORT_PHONE=+55 (11) 99999-9999
VITE_SUPPORT_EMAIL=contato@meusite.com.br
VITE_SUPPORT_WHATSAPP=+5511999999999

# Preços
VITE_PLAN_PRICE_MONTHLY=29,97
VITE_PLAN_PRICE_ANNUAL=179,00

# URLs de Pagamento (opcional - deixe em branco para usar WhatsApp)
VITE_MONTHLY_PLAN_URL=https://pay.hotmart.com/ABC123
VITE_ANNUAL_PLAN_URL=https://pay.hotmart.com/DEF456

# Funcionalidades
VITE_PLAN_FEATURES_MONTHLY=Mensagens por texto,Áudio e imagem,Limite por categoria,Relatórios de gastos,Sem fidelidade
VITE_PLAN_FEATURES_ANNUAL=Mensagens por texto,Áudio e imagem,Limite por categoria,Relatórios completos,Metas financeiras,Suporte prioritário

# Facebook Pixel
VITE_PIXEL_FACEBOOK=1234567890123456
VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT=true

# Google Tag Manager
GTM_ID=GTM-ABC123
GTM_ENABLE_DEV=false

# Ambiente
NODE_ENV=production
```

---

## 📄 Páginas de Termos e Privacidade

As páginas de **Termos de Uso** e **Política de Privacidade** são geradas automaticamente e funcionam com rotas relativas:

- **Termos de Uso**: `seudominio.com/termos`
- **Política de Privacidade**: `seudominio.com/privacidade`

Não é necessário configurar essas URLs no arquivo `.env`. As páginas já estão incluídas no projeto e serão acessíveis automaticamente assim que o site estiver no ar.

---

## 🔄 Como Aplicar as Mudanças

1. **Edite o arquivo `.env`** com suas informações
2. **Reinicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
3. **Para produção**, faça o build:
   ```bash
   npm run build
   ```

---

## 🎨 Templates Disponíveis

Existem 3 templates com estilos diferentes:

- **Template1**: Design escuro dramático (Modelo Dor)
- **Template2**: Design branco limpo (Modelo Aspiracional)
- **Template3**: Design premium escuro (Modelo Educativo)

Para alterar o template, mude a variável:
```bash
VITE_TEMPLATE_VARIANT=template1  # ou template2, template3
```

---

## 🚀 Deploy no Easypanel

Este repositório está público e você pode fazer deploy diretamente no Easypanel.

### Opção 1: Fork do Repositório (Recomendado)

Fazer um fork permite que você personalize o código sem depender de alterações no repositório original.

**Passo 1: Faça o Fork**

1. Acesse o repositório: https://github.com/user/landingpage-fatureai-kit-3-modelos
2. Clique no botão **"Fork"** no canto superior direito
3. Selecione sua conta como destino do fork
4. Aguarde o processo de fork ser concluído

**Passo 2: Configure no Easypanel**

Continue com os passos abaixo da seção "Configurando no Easypanel", mas use a URL do SEU fork (ex: `https://github.com/seu-usuario/landingpage-fatureai-kit-3-modelos`)

---

### Opção 2: Usar Diretamente do Repositório Original

Se preferir não fazer fork, você pode usar diretamente o repositório original. Neste caso, qualquer alteração que quiser fazer precisará ser feita localmente e depois fazer push para seu próprio repositório.

---

## ⚙️ Configurando no Easypanel

### Pré-requisitos

- Conta no Easypanel (https://easypanel.io)
- Conta no GitHub
- Repositório público (seu fork ou o original)

---

### Passo 1: Criar um novo App no Easypanel

1. Faça login no Easypanel
2. Clique em **"New App"** ou **"Create App"**
3. Dê um nome para sua aplicação (ex: `landing-page-fatureai`)
4. Escolha o servidor onde deseja hospedar

---

### Passo 2: Configurar o Repositório GitHub

1. Na seção **"Source"**, selecione **"GitHub"**
2. Clique em **"Connect GitHub"** se ainda não conectou
3. Autorize o Easypanel a acessar seus repositórios
4. Preencha os campos do repositório:

**Campos obrigatórios:**
- **Owner**: Seu nome de usuário do GitHub
  - Exemplo: `luizp5`
  - Para encontrar: Acesse seu perfil no GitHub ou veja a URL do repositório

- **Repository**: Nome do repositório
  - Exemplo: `landingpage-fatureai-kit-3-modelos`
  - Para encontrar: É o nome após a barra na URL do repositório

- **Branch**: Branch principal
  - Geralmente: `main`
  - Pode ser `master` em repositórios mais antigos

- **Build Path**: Diretório raiz do projeto
  - Deixe como: `/` (barra)
  - Use `/` quando o projeto está na raiz do repositório

**Exemplo completo:**
```
Owner: luizp5
Repository: landingpage-fatureai-kit-3-modelos
Branch: main
Build Path: /
```

**Importante:**
- Se o repositório for privado, você precisará configurar as credenciais de acesso
- Certifique-se de que o Branch está correto (main ou master)
- O Build Path deve ser `/` para este projeto

---

### Passo 3: Configurar o Build

O projeto usa Dockerfile e o Easypanel detectará automaticamente.

---

### Passo 4: Configurar Variáveis de Ambiente (.env)

⚠️ **MUITO IMPORTANTE:** As variáveis de ambiente **DEVEM** ser configuradas **ANTES** do primeiro deploy!

**Ordem correta:**
1. Configure as variáveis de ambiente
2. Faça o deploy
3. O build irá "bake" as variáveis no código

Se você configurar as variáveis **DEPOIS** do build, elas não funcionarão. Será necessário fazer um novo deploy.

**Na seção "Environment Variables", clique em "Add Variable" para cada variável:**

**Variáveis obrigatórias:**

```bash
VITE_COMPANY_NAME=Sua Empresa
VITE_PAGE_TITLE=Sua Empresa - Controle Financeiro
VITE_PAGE_DESCRIPTION=Descrição do seu negócio
VITE_SUPPORT_EMAIL=contato@seusite.com
VITE_SUPPORT_WHATSAPP=+5511999999999
VITE_PLAN_PRICE_MONTHLY=29,97
VITE_PLAN_PRICE_ANNUAL=179,00
VITE_TEMPLATE_VARIANT=template1
NODE_ENV=production
```

**Variáveis opcionais:**

```bash
VITE_LOGO_URL=https://seusite.com/logo.png
VITE_FAVICON_URL=https://seusite.com/favicon.ico
VITE_SUPPORT_PHONE=+55 (11) 99999-9999
VITE_MONTHLY_PLAN_URL=https://pay.hotmart.com/ABC123
VITE_ANNUAL_PLAN_URL=https://pay.hotmart.com/DEF456
VITE_PIXEL_FACEBOOK=1234567890123456
VITE_PIXEL_FACEBOOK_REQUIRE_CONSENT=true
GTM_ID=GTM-XXXXXX
GTM_ENABLE_DEV=false
```

---

### Passo 5: Configurar Domínio Próprio

⚠️ **IMPORTANTE:** Configure o domínio **ANTES** do primeiro deploy para evitar problemas com SSL!

**Opção A: Domínio Próprio (Recomendado)**

1. **No seu provedor de domínios** (Registro.br, GoDaddy, Namecheap, etc.), faça:
   - Acesse o painel de DNS do seu domínio
   - Adicione um registro **A** apontando para o **IP do seu servidor**
     ```
     Tipo: A
     Nome: @ (ou subdomínio desejado, ex: landing)
     Valor: IP_DO_SEU_SERVIDOR (ex: 192.168.1.1)
     TTL: 3600 (ou 1 hora)
     ```
   - Para subdomínio (ex: landing.seusite.com), use:
     ```
     Tipo: A
     Nome: landing
     Valor: IP_DO_SEU_SERVIDOR
     TTL: 3600
     ```

2. **Como encontrar o IP do seu servidor:**
   - No Easypanel, vá em **Settings** → **Servers**
   - Clique no seu servidor
   - O IP estará visível na página

3. **No Easypanel:**
   - Clique em **"Domains"** no menu lateral
   - Clique em **"Add Domain"**
   - Digite seu domínio completo:
     - Domínio raiz: `seusite.com`
     - Subdomínio: `landing.seusite.com`
   - O Easypanel tentará configurar o SSL automaticamente
   - Se o DNS já estiver propagado, o SSL será gerado instantaneamente
   - Se não, pode levar até 24 horas para propagar

4. **Verificar propagação do DNS:**
   - Aguarde de 5 a 30 minutos para propagação inicial
   - Verifique em: https://dnschecker.org/
   - Quando mostrar o IP correto globalmente, o SSL será gerado

5. **Vincular o domínio ao App:**
   - Volte para o seu App
   - Em **"Domains"**, selecione o domínio configurado
   - O Easypanel fará o redirecionamento automático

**Opção B: Domínio Temporário do Easypanel**

1. O Easypanel gera automaticamente um domínio temporário
2. Formato: `seu-app.seu-servidor.easypanel.host`
3. Este domínio já vem com SSL configurado
4. **Desvantagem:** Não é profissional para uso em produção

---

### Passo 6: Fazer o Deploy

1. Revise todas as configurações
2. Clique em **"Deploy"** ou **"Create"**
3. Aguarde o processo de build (pode levar 2-5 minutos)
4. Acompanhe os logs em tempo real

---

### Passo 7: Verificar o Deploy

1. Após o deploy, clique na URL gerada ou no seu domínio configurado
2. Verifique se:
   - [ ] A página carrega corretamente
   - [ ] O nome da empresa aparece em todos os lugares
   - [ ] Os preços estão corretos
   - [ ] Os botões de WhatsApp funcionam
   - [ ] As imagens (logo, favicon) carregam

---

## 🔄 Como Atualizar o Deploy

### Método 1: Commit Direto no GitHub

1. Faça suas alterações localmente
2. Commit e push para o GitHub:
   ```bash
   git add .
   git commit -m "Atualiza configurações"
   git push
   ```
3. No Easypanel, o deploy automático será acionado

### Método 2: Deploy Manual no Easypanel

1. Vá até o seu App no Easypanel
2. Clique em **"Redeploy"** ou **"Deploy"**
3. Aguarde o novo deploy

### Método 3: Atualizar Variáveis de Ambiente

1. No Easypanel, acesse seu App
2. Vá em **"Environment"**
3. Edite as variáveis necessárias
4. Clique em **"Save"** e depois **"Redeploy"**

---

## ❓ Dúvidas Frequentes

### O nome da empresa aparece em quantos lugares?
R: O `VITE_COMPANY_NAME` aparece em:
- Logo da página
- Hero section (título)
- Seção de solução
- Seção de superpoderes da IA
- Depoimentos
- Rodapé

### Posso usar emojis nos preços?
R: Não recomendado. Use apenas números e vírgula: `29,97`

### Como faço para o botão do WhatsApp funcionar?
R: Configure o `VITE_SUPPORT_WHATSAPP` com o número completo (com código do país e DDD, sem espaços ou símbolos especiais)

### Onde coloco minhas imagens?
R: Você pode:
1. Hospedar em um CDN e usar a URL completa
2. Colocar na pasta `public/` do projeto e usar `/nome-do-arquivo.png`

### Como configurar URLs de pagamento (Hotmart, Kiwify, etc.)?
R: Use as variáveis `VITE_MONTHLY_PLAN_URL` e `VITE_ANNUAL_PLAN_URL` com seus links de pagamento. Se deixar em branco, o botão direcionará para o WhatsApp automaticamente.

### Posso usar diferentes plataformas de pagamento?
R: Sim! Você pode usar qualquer plataforma que gere um link de checkout:
- **Hotmart**: `https://pay.hotmart.com/CODE`
- **Kiwify**: `https://kiwify.com.br/produto/CODE`
- **Asaas**: `https://asaas.com/checkout/CODE`
- **Stripe**: `https://checkout.stripe.com/pay/CODE`
- **Qualquer outro**: Basta colar a URL completa

### O que acontece se não configurar as URLs de pagamento?
R: Os botões de compra direcionarão automaticamente para o WhatsApp com uma mensagem personalizada sobre o plano escolhido. Isso funciona como um fallback automático.

### O Easypanel é gratuito?
R: O Easypanel possui um plano gratuito com limitações. Você precisará de seu próprio servidor (VPS) para conectar ao Easypanel.

### Preciso de servidor próprio?
R: Sim, o Easypanel é um painel de controle que você instala em seu próprio VPS. Serviços populares de VPS:
- DigitalOcean
- Linode
- AWS Lightsail
- Hetzner

---

## ✅ Checklist Antes de Publicar

### Configuração
- [ ] Nome da empresa configurado
- [ ] Logo carregando corretamente
- [ ] Preços definidos
- [ ] Funcionalidades dos planos preenchidas
- [ ] Contatos (email, telefone, WhatsApp) corretos
- [ ] URLs de pagamento configuradas (ou WhatsApp como fallback)
- [ ] Facebook Pixel configurado (se usar)
- [ ] Google Tag Manager configurado (se usar)

### Deploy
- [ ] Repositório conectado ao Easypanel
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio configurado
- [ ] Deploy concluído sem erros

### Testes
- [ ] Testado em mobile e desktop
- [ ] Links de WhatsApp funcionando
- [ ] Botões de compra/redirecionamento funcionando
- [ ] URLs de pagamento configuradas corretamente (se usado)
- [ ] Imagens carregando corretamente
- [ ] Console do navegador sem erros

---

## 🆘 Troubleshooting

### Deploy falhou

1. **Verifique os logs de build** no Easypanel
2. **Verifique as variáveis de ambiente** (especialmente NODE_ENV=production)
3. **Confirme que o repositório está público** ou as credenciais estão corretas

### Página não carrega

1. **Confirme que o build foi concluído** com sucesso
2. **Verifique os logs da aplicação**

### Imagens não carregam

1. **Verifique as URLs** no .env
2. **Confirme que as imagens estão acessíveis publicamente**
3. **Use URLs absolutas** (com https://)

### Variáveis não funcionam

1. **Verifique o prefixo VITE_** para variáveis que aparecem no frontend
2. **Reinicie o deploy** após alterar variáveis
3. **Confirme que não há espaços extras** nos valores

---

## 🚀 Outras Opções de Deploy

Além do Easypanel, você pode fazer deploy em:

### Vercel (Recomendado parasites estáticos)
```bash
npm i -g vercel
vercel
```

### Netlify
Conecte seu repositório do GitHub ao Netlify

### Qualquer servidor com suporte a sites estáticos
O projeto é um site estático gerado com Vite + React

---

**Desenvolvido com ❤️ para facilitar suas vendas**
