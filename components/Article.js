import styles from '../styles/Article.module.css'

const Article = ({ article }) => {
  const { imageUrl, source, title, body, url } = article;
  return (
    <div className="p-4  rounded-lg hover:bg-purple-100 shadow-lg border border-purple-200">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img className="rounded-lg" width={128} src={imageUrl} />
        <p className="mt-12 font-bold uppercase text-purple-900">{source}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold  text-justify mt-4 text-purple-900">
          {title}
        </h3>
        <p className={ `${styles.body} mt-4 text-justify` }>{body}</p>
      </div>

      <a href={url} className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg " >Read more</a>
    </div>
  );
};

export default Article;
