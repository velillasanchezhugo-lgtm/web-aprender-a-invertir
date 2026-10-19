-- umotion Academy · Esquema de Supabase para cuentas opcionales y recordatorios.
-- Ejecutar en el editor SQL del proyecto (Supabase → SQL Editor). Ver docs/CUENTAS-Y-AVISOS.md.

-- 1. Progreso de cada persona (una fila por cuenta). Solo la propia persona puede leerlo o cambiarlo.
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint progress_size check (pg_column_size(data) < 600000)
);
alter table public.progress enable row level security;
drop policy if exists "progress_select_own" on public.progress;
drop policy if exists "progress_insert_own" on public.progress;
drop policy if exists "progress_update_own" on public.progress;
drop policy if exists "progress_delete_own" on public.progress;
create policy "progress_select_own" on public.progress for select using (auth.uid() = user_id);
create policy "progress_insert_own" on public.progress for insert with check (auth.uid() = user_id);
create policy "progress_update_own" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "progress_delete_own" on public.progress for delete using (auth.uid() = user_id);

-- 2. Suscripciones a notificaciones (con o sin cuenta). Sin políticas: solo el servidor (clave service_role) accede.
create table if not exists public.push_subscriptions (
  endpoint text primary key,
  p256dh text not null,
  auth text not null,
  user_id uuid references auth.users (id) on delete cascade,
  last_active date,
  streak integer not null default 0,
  last_sent date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.push_subscriptions enable row level security;
create index if not exists push_subscriptions_pending on public.push_subscriptions (last_active, last_sent);

-- 3. (Opcional) Hora exacta con Supabase en lugar de Vercel Cron (el plan Hobby de Vercel envía con hasta 59 min de margen).
-- Requiere las extensiones pg_cron y pg_net. Sustituye TU-DOMINIO y TU-CRON-SECRET.
-- create extension if not exists pg_cron; create extension if not exists pg_net;
-- select cron.schedule('recordatorio-14utc', '0 14 * * *', $$ select net.http_get('https://TU-DOMINIO/api/cron-reminder', headers := '{"Authorization":"Bearer TU-CRON-SECRET"}'::jsonb) $$);
-- select cron.schedule('recordatorio-15utc', '0 15 * * *', $$ select net.http_get('https://TU-DOMINIO/api/cron-reminder', headers := '{"Authorization":"Bearer TU-CRON-SECRET"}'::jsonb) $$);
