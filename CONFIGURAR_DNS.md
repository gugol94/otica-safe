# Guia de Configuração DNS para GitHub Pages (Registro.br)

Este guia explica como configurar o DNS do seu domínio registrado no **Registro.br** para apontar para o GitHub Pages.

## 📋 Pré-requisitos

- Domínio registrado e ativo no Registro.br: `oticasafe.com.br`
- Repositório GitHub: `gugol94/otica-safe`
- GitHub Pages configurado para usar GitHub Actions (já está pronto!)

## 🔧 Passo 1: Configurar DNS no Registro.br

### 1.1 Acesse o painel do Registro.br

1. Vá em https://registro.br/
2. Faça login com sua conta
3. Clique em **"Meus Domínios"**
4. Selecione o domínio `oticasafe.com.br`
5. Clique em **"Editar Zona"** ou **"Gerenciar DNS"**

### 1.2 Adicione os registros DNS

Você precisa adicionar os seguintes registros:

#### Para usar `www.oticasafe.com.br` (recomendado):

| Tipo  | Nome/Host              | Valor/Destino                      | TTL   |
|-------|------------------------|-------------------------------------|-------|
| CNAME | www                    | gugol94.github.io.                 | 3600  |
| A     | oticasafe.com.br       | 185.199.108.153                    | 3600  |
| A     | oticasafe.com.br       | 185.199.109.153                    | 3600  |
| A     | oticasafe.com.br       | 185.199.110.153                    | 3600  |
| A     | oticasafe.com.br       | 185.199.111.153                    | 3600  |

**⚠️ IMPORTANTE para Registro.br**: 
- Use o **nome completo do domínio** (`oticasafe.com.br`) nos registros A, NÃO use `@`
- Para o CNAME, use apenas `www` (sem o domínio completo)

#### Ou para usar apenas `oticasafe.com.br` (sem www):

Neste caso, altere o arquivo `CNAME` para conter apenas `oticasafe.com.br` (sem www) e configure os mesmos registros A acima.

### 1.3 Detalhes importantes

- **CNAME**: Aponte o subdomínio `www` para o GitHub Pages (use apenas `www` no campo Nome/Host)
- **Registros A**: Apontam o domínio raiz para os servidores do GitHub (use o nome completo `oticasafe.com.br` no campo Nome/Host)
- **TTL**: Tempo de cache (3600 segundos = 1 hora)
- **Não esqueça o ponto final**: `gugol94.github.io.` (com ponto no final)
- **⚠️ Registro.br não aceita `@`**: Use sempre o nome completo do domínio nos registros A

### 1.4 Remover registros conflitantes (se existirem)

Antes de adicionar os novos registros, remova:
- Quaisquer registros A antigos apontando para outros IPs
- CNAME conflitantes no mesmo nome
- Registros AAAA (IPv6) antigos, se houver

## 🚀 Passo 2: Fazer Push dos Arquivos

Execute os comandos no terminal:

```powershell
# Adicione os novos arquivos
git add CNAME .nojekyll
git commit -m "Adiciona configuração de domínio customizado"
git push origin main
```

O GitHub Actions irá fazer o deploy automaticamente (acompanhe em: https://github.com/gugol94/otica-safe/actions)

## ⚙️ Passo 3: Configurar no GitHub Pages

1. Vá em https://github.com/gugol94/otica-safe/settings/pages
2. Em **"Custom domain"**, digite: `www.oticasafe.com.br`
3. Clique em **"Save"**
4. Aguarde a verificação do DNS (pode levar alguns minutos)
5. Quando disponível, marque a opção **"Enforce HTTPS"** (recomendado)

## ⏰ Tempo de Propagação

- **DNS do Registro.br**: 5-30 minutos (geralmente rápido)
- **Propagação global**: 2-48 horas (na prática, costuma ser 1-4 horas)
- **Certificado SSL do GitHub**: 10-60 minutos após verificação do DNS

## ✅ Como Verificar se Funcionou

### Verificar DNS (PowerShell):

```powershell
# Verificar CNAME
nslookup -type=CNAME www.oticasafe.com.br

# Verificar registros A
nslookup oticasafe.com.br
```

### Resultados esperados:

- **CNAME** deve retornar: `gugol94.github.io`
- **Registros A** devem retornar os IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### Testar no navegador:

Após a propagação, acesse:
- http://www.oticasafe.com.br (deve redirecionar para HTTPS)
- http://oticasafe.com.br (deve redirecionar para www e HTTPS)
- https://www.oticasafe.com.br (deve funcionar com certificado SSL)

## 🔍 Problemas Comuns

### "DNS check unsuccessful"
- **Causa**: DNS ainda não propagou ou registros incorretos
- **Solução**: Aguarde 30 minutos e verifique se os registros estão corretos no Registro.br

### "Certificate not yet created"
- **Causa**: GitHub ainda está gerando o certificado SSL
- **Solução**: Aguarde até 1 hora. Não force mudanças enquanto isso.

### Site não carrega após horas
- **Causa**: Registros DNS incorretos
- **Solução**: Verifique os IPs dos registros A e o CNAME usando `nslookup`

### Certificado SSL não ativa
- **Causa**: DNS não está totalmente propagado ou há redirecionamento incorreto
- **Solução**: 
  1. Desmarque "Enforce HTTPS"
  2. Remova o domínio customizado
  3. Aguarde 10 minutos
  4. Adicione novamente o domínio
  5. Aguarde verificação
  6. Marque "Enforce HTTPS"

## 📞 Suporte

- **Registro.br**: https://registro.br/ajuda/
- **GitHub Pages**: https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Status do GitHub**: https://www.githubstatus.com/

## 📝 Notas Adicionais

### Redirecionamento automático

O GitHub Pages automaticamente:
- Redireciona HTTP → HTTPS
- Redireciona `oticasafe.com.br` → `www.oticasafe.com.br` (se configurado com www no CNAME)

### Alterando de www para não-www (ou vice-versa)

Se quiser usar `oticasafe.com.br` em vez de `www.oticasafe.com.br`:

1. Edite o arquivo `CNAME` para conter apenas: `oticasafe.com.br`
2. Remova o registro CNAME do www no Registro.br
3. Commit e push
4. Atualize no GitHub Settings > Pages

### Subdomínios adicionais

Para criar subdomínios como `loja.oticasafe.com.br`:
- Adicione um CNAME: `loja` → `gugol94.github.io.`
- Crie um novo repositório para hospedar o subdomínio

---

**Última atualização**: Outubro 2025  
**Domínio**: www.oticasafe.com.br  
**Repositório**: gugol94/otica-safe
