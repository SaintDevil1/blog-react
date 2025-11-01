Области хранения данных:
- база данный на json-server
- BFF
- redux store

сущности приложения:
- пользователь:база данных(список пользователь), bff (сессия текущего), стор ( отображение в браузере)
- роль пользователя : БД (список ролей), BFF (сессия пользователя с ролью),стор(использование на клиенте)
- статья: бд (список статей), стор(отображение в браузере)
- комментарий:бд (список коментарий), стор (тображение в браузере)

таблицы бд:
- пользователи - users: id / login / password / registed_at  / role_id
- роли- roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- коментарии - comments:id / author_id / post_id / content
-

Схема состояния на Bff :
-сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):
- user: id / roleId
- posts: массив post: id / title / imageUrl / publishedAt / commentsCount
- post:  id / title / imageUrl / publishedAt / comments: массив comment: id / author / content / publishedAt
- users: массив user: id / login / registedAt / role
