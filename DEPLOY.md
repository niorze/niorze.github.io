# Деплой niorze.ru

## Шаг 1. Купить домен (5 мин, 199₽)

1. Открой [reg.ru](https://reg.ru)
2. В поиске: `niorze` → `.ru` → «Заказать»
3. Зарегистрируйся / войди
4. Оплати ~199₽ (новым клиентам первая цена)
5. Домен появится в разделе «Мои домены»

## Шаг 2. Создать GitHub-аккаунт (2 мин)

Если нет аккаунта — [github.com/signup](https://github.com/signup).
Логин, email, пароль — всё.

## Шаг 3. Создать репозиторий (2 мин)

1. Нажми `+` → **New repository**
2. Repository name: `niorze` (или `niorze-dsgn`)
3. Visibility: **Public** (для бесплатного GitHub Pages)
4. **Не** добавляй README/gitignore (у нас уже есть файлы)
5. **Create repository**

## Шаг 4. Залить файлы (3 мин)

На странице пустого репозитория нажми **uploading an existing file**.

Перетащи все файлы из папки `C:\Users\user\Desktop\niorze-dsgn\`:
- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `.gitignore`
- папку `assets/`

Внизу: **Commit changes**.

## Шаг 5. Включить GitHub Pages (1 мин)

1. В репозитории → **Settings** (сверху)
2. Слева → **Pages**
3. **Branch**: `main` → `/root` → **Save**
4. Через ~1 минуту появится ссылка `https://ТВОЙ_ЛОГИН.github.io/niorze/` — сайт уже работает здесь.

## Шаг 6. Подключить niorze.ru (15 мин)

### 6.1 На REG.RU настроить DNS

1. Мои домены → `niorze.ru` → **Управление DNS**
2. Удали все существующие A-записи
3. Добавь четыре A-записи (хост `@`, те IP у GitHub Pages):
   ```
   @   A   185.199.108.153
   @   A   185.199.109.153
   @   A   185.199.110.153
   @   A   185.199.111.153
   ```
4. Добавь CNAME для `www`:
   ```
   www   CNAME   ТВОЙ_ЛОГИН.github.io.
   ```
   (точка в конце обязательна)

### 6.2 На GitHub указать домен

1. Settings → Pages
2. **Custom domain**: `niorze.ru` → **Save**
3. Подожди 10-30 минут пока DNS распространится
4. Включи **Enforce HTTPS** (появится галочка после проверки домена)

## Готово

Сайт будет жить на **https://niorze.ru**.

---

## Дальнейшие правки

Чтобы обновить сайт — просто правь файлы на компьютере и загружай через GitHub (кнопка «Add file» → «Upload files»). Сайт обновится через ~30 секунд.

Если осилишь Git — лучше через него (`git add`, `git commit`, `git push`), но это не обязательно.
