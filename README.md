# SAFEZONE HUB (Next.js 15 + Supabase)

Plataforma SaaS para gestão competitiva de organizações de Valorant.

## Stack
- Next.js 15 + TypeScript + Tailwind + shadcn/ui (base ready) + Framer Motion
- Supabase (Postgres + Auth + RLS)
- Recharts
- Deploy Vercel

## Arquitetura
- `app/`: rotas e layouts (App Router)
- `components/`: UI reutilizável
- `modules/`: blocos de domínio por módulo
- `services/`: integrações externas (Valorant API, Discord)
- `lib/`: Supabase client, RBAC e helpers
- `types/`: tipos de domínio
- `database/`: schema SQL e evolução de banco

## Como rodar
1. `cp .env.example .env.local`
2. Preencher variáveis Supabase, Discord e Valorant.
3. `npm install`
4. `npm run dev`
5. Acesse `http://localhost:3000`

## Banco (Supabase)
1. Criar projeto no Supabase.
2. Executar `database/schema.sql` no SQL Editor.
3. Ativar RLS e políticas por `org_id` + `role`.
4. Gerar tipos com `supabase gen types typescript` (opcional).

## Discord Login
- Criar app OAuth2 no Discord Developer Portal.
- Callback: `https://SEU_DOMINIO/api/auth/discord/callback`
- Escopos: `identify`, `email`, `guilds` (e bot scopes se usar sincronização).
- Salvar secrets no Vercel e no Supabase Auth provider.

## Integração Supabase
- `lib/supabase.ts` usa `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Em produção, usar clients separados (browser/server/admin) e service role apenas server-side.

## API Valorant
- Em `services/valorant.ts`, endpoint HenrikDev com revalidação de 5 min.
- Para Tracker.gg, substituir service mantendo contrato de retorno.

## Deploy na Vercel
1. Importar repositório na Vercel.
2. Configurar variáveis `.env.example`.
3. Build command: `npm run build`.
4. Configurar domínio + callback Discord em produção.

## Roadmap SaaS
- Multi-tenant rigoroso por organização.
- Billing por organização/plano.
- Observabilidade (Sentry + logs + métricas).
- Filas assíncronas para sync Discord e ingestão de partidas.
