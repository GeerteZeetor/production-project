import { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

const data: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2023 год?',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
  views: 1022,
  createdAt: '26.06.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
  ]
};

describe('articleDetailsSlice', () => {
  test('test articleDetails service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: false, error: undefined };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined
    });
  });

  test('test articleDetails service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = { isLoading: true };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(data, '', '')
    )).toEqual({
      data,
      isLoading: false,
    });
  });
});
