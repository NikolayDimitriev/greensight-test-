# greensight-test

Тестовое задание

С помощью этого задания мы хотим оценить уровень ваших навыков. Задание состоит из двух частей: обязательная – необходимый минимум и дополнительная. Из дополнительной выполните один или несколько пунктов на ваше усмотрение. Если вы хотите пройти у нас стажировку, то достаточно будет выполнить только обязательную часть.
Обязательная часть

1. Сверстать страницу, содержащую список вакансий с адаптивом БЕЗ ФОРМЫ. Верстка должна быть резиновой. Стили, шрифты, отступы должны соответствовать макету. Выпадающий список селекта можно не стилизовать, оставить нативным.
2. Вакансии получить по API.
3. В карточке вакансии часть текста описания скрывается под кнопкой “more details”. Добавьте механизм скрытия/раскрытия.
4. На странице достаточно отображать первые 5 вакансий.
   Обратите внимание, что возвращаемые API данные могут не соответствовать тексту полей, отображаемых на макете. Вы в праве отобразить те поля, которые посчитаете нужными.

Дополнительная часть

1. Добавить фильтрацию по типу работы (full time, part time). Фильтрацию можно отменить используя кнопку “clear sorting”. Обратите внимание, что повторный запрос на получение всех вакансий делать не нужно. Данные о типах работы лучше брать из данных, полученных по API.
2. Добавить кнопку “Show more” (в макетах ее нет, по стилям сделайте такую же, как кнопка “Send”). При клике показывать еще 5 вакансий. Если вакансий не осталось, то кнопку нужно скрыть.
3. Сверстать форму. В поле для телефона добавить маску ввода номера. Поле email проверять на валидность введенного email. Сделать все поля кроме комментария обязательными. При клике на кнопку “send” в алерте выводить в человекочитаемом виде данные из формы.
   Желательно использовать React или Vue, но необязательно. Вы вправе использовать любой стейт менеджер или не использовать вообще. Будьте готовы аргументировать свое решение.

API вакансий
API и методы работы с ней вы найдете по ссылке – hh api (https://github.com/hhru/api/blob/master/docs/vacancies.md#%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D0%BF%D0%BE-%D0%B2%D0%B0%D0%BA%D0%B0%D0%BD%D1%81%D0%B8%D1%8F%D0%BC). В документации к апи сказано, что обязательно необходимо зарегистрировать приложение. Этого делать не нужно, так как публиковать приложение не требуется. А запросы при локальной разработке ходят без проблем.
