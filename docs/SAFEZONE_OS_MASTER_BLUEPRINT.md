# SAFEZONE OS — Master Blueprint

## Visão do Produto

A SafeZone OS não deve parecer apenas um dashboard de esports.

Ela deve funcionar como:

- sistema operacional competitivo;
- plataforma de gestão de carreira;
- CRM competitivo;
- painel executivo;
- software de performance;
- central operacional da organização.

O objetivo é permitir que uma organização de esports consiga operar Academy, Prime, Talent, Staff, Financeiro, Tryouts, Evolução competitiva, Rotina, Coaching e Performance dentro de um único sistema.

---

## Stack

### Frontend

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- Recharts
- shadcn/ui

### Backend

- Supabase
- PostgreSQL
- Row Level Security
- Edge Functions

### Infra

- Vercel
- GitHub
- Discord OAuth

---

## Identidade Visual

### Direção

Mistura de:

- software executivo;
- startup SaaS premium;
- cyberpunk clean;
- performance analytics.

### Referências

- Linear
- Vercel
- Notion
- Stripe Dashboard
- Faceit
- Tracker.gg
- Valorant esports HUD

### UI

- dark mode first;
- neon cyan accents;
- glassmorphism leve;
- cards premium;
- animações suaves;
- navegação rápida;
- experiência de software vivo.

---

## Estrutura Principal

### Sidebar

#### CEO

- Overview
- Financeiro
- Growth
- Retenção
- Talent ROI

#### Academy

- Players
- Presença
- Rankings
- Evolução
- Rotina

#### Prime

- Lineups
- Scrims
- Agenda
- Performance

#### Talent

- Pipeline
- Scouts
- Potenciais
- Investimentos

#### Performance

- Match Analytics
- Player Analytics
- Team Analytics
- Heatmaps

#### Staff

- Coaches
- Scouts
- Managers
- Tasks

#### Sistema

- Configurações
- Billing
- Integrações
- Discord

---

## Sistema de Organizações

### Multi-tenant

Cada organização possui membros, players, coaches, seasons, financeiro, métricas e squads.

Estrutura base:

```sql
organizations
profiles
teams
players
staff
```

---

## Sistema de Permissões (RBAC)

### Roles

```ts
CEO
Manager
Coach
Scout
Media
Player
Viewer
```

### Permissões

- **CEO:** acesso total.
- **Manager:** operacional geral.
- **Coach:** players + notas + performance.
- **Scout:** tryouts + talent.
- **Player:** apenas perfil próprio.

---

## Sistema CEO

### Objetivo

Painel executivo para tomada de decisão. Deve responder:

- quem está evoluindo;
- quem está em risco;
- quanto a organização cresce;
- quem gera ROI;
- onde estão gargalos.

### KPIs

#### Financeiro

- receita mensal;
- receita recorrente;
- churn;
- inadimplência;
- ticket médio;
- lifetime value.

#### Competitivo

- evolução média;
- winrate squads;
- retenção;
- consistência.

#### Operacional

- presença;
- atividade staff;
- aulas realizadas;
- scrims realizadas.

### Widgets

- alerts;
- players em risco;
- talentos promissores;
- squads com queda;
- próximos eventos;
- tarefas pendentes.

---

## Sistema Academy

### Objetivo

Acompanhar evolução competitiva.

### Funcionalidades

- presença;
- evolução semanal;
- ranking interno;
- pontuação;
- disciplina;
- performance score;
- plano de treino.

### Player Card

Cada player possui:

- nick;
- role;
- tracker;
- rank;
- main agents;
- rotina;
- status;
- evolução;
- coach notes;
- clips;
- VODs.

---

## Sistema Prime

### Objetivo

Operar lineups competitivas.

### Funcionalidades

- squads;
- scrims;
- calendário;
- review sessions;
- lineup performance;
- communication score;
- teamplay score.

### Analytics

- entry success;
- clutch rate;
- trade efficiency;
- communication;
- consistency.

---

## Sistema Talent

### Objetivo

Transformar scouting em pipeline real.

### Pipeline

```txt
Novo Lead
↓
Observação
↓
Tryout
↓
Academy
↓
Prime
↓
Mercado
```

### Métricas

- potencial;
- consistência;
- disciplina;
- mentalidade;
- comunicação;
- evolução;
- ceiling competitivo.

### Investimentos

- periféricos;
- upgrade PC;
- mídia;
- coaching.

### ROI

- evolução;
- promoções;
- valor competitivo.

---

## Sistema de Tryouts

### Objetivo

Sistema estilo CRM.

### Etapas

- inscrição;
- análise;
- observação;
- tryout;
- avaliação;
- aprovação;
- rejeição.

### Avaliações

#### Técnicas

- aim;
- movement;
- crosshair placement;
- clutch.

#### Mentais

- disciplina;
- comunicação;
- adaptação;
- mentalidade.

---

## Sistema de Performance

### Performance Score

Score automático baseado em:

```txt
Mechanical
+ Communication
+ Teamplay
+ Discipline
+ Consistency
+ Evolution
```

### Histórico

- evolução semanal;
- gráficos;
- comparação;
- progressão;
- alerts automáticos.

---

## Sistema de Presença

### Status

- presente;
- atrasado;
- ausente;
- justificado.

### Impacto

A presença afeta:

- score;
- ranking;
- disciplina;
- promoções.

---

## Sistema Financeiro

### Controle

- mensalidades;
- pagamentos;
- inadimplência;
- receitas;
- despesas;
- projeções.

### Alerts

- player atrasado;
- risco de churn;
- pagamento vencendo.

---

## Sistema Staff

### Coaches

- players acompanhados;
- notas;
- tarefas;
- performance dos players.

### Scouts

- leads;
- observações;
- prospects.

### Managers

- agenda;
- operações;
- squads.

---

## Sistema de Rotina

### Feed Operacional

Exemplo:

```txt
Player X faltou treino
Coach Y adicionou nota
Novo talento aprovado
Academy subiu 4% em retenção
Scrim marcada para 20h
```

---

## Sistema Discord

### OAuth

- login;
- sync usuários;
- roles;
- presença.

### Automação

- lembretes;
- eventos;
- notificações;
- sincronização squads.

---

## Banco de Dados

### Entidades principais

```txt
organizations
profiles
players
teams
staff
tryouts
matches
stats
payments
warnings
awards
presence
coach_notes
performance_scores
seasons
scrims
```

---

## Roadmap de Construção

### FASE 1 — Foundation

- auth;
- layout;
- sidebar;
- routing;
- database;
- RBAC;
- Supabase.

### FASE 2 — Core System

- players;
- academy;
- performance;
- tryouts;
- presence.

### FASE 3 — Competitive Intelligence

- analytics;
- scouting;
- ranking;
- match ingestion;
- progression.

### FASE 4 — SaaS

- billing;
- subscriptions;
- organizations;
- invites;
- white-label.

---

## Direção Final

O sistema deve transmitir: **"Essa organização realmente opera aqui dentro."**

Não pode parecer:

- template;
- admin panel genérico;
- dashboard fake;
- UI placeholder.

Deve parecer:

- produto vivo;
- sistema operacional competitivo;
- software usado diariamente.
