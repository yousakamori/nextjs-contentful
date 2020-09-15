import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function Post({ image, title, body, slug }) {
  return (
    <div className="container">
      <a href={image.fields.file.url}>
        <img alt={image.fields.title} src={image.fields.file.url} />
      </a>
      <div className="text">
        <h2>{title}</h2>
      </div>
      <div>
        { documentToReactComponents(body) }
      </div>
      <style jsx>{`
        .container {
          cursor: pointer;
          height: 453px;
          margin-bottom: 48px;
        }
        a {
          border-bottom: none;
        }
        a:hover {
          border-bottom: none;
        }
        .text {
          margin-top: -160px;
          padding: 24px;
          position: absolute;
        }
        h2 {
          color: white;
          font-size: 24px;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}

export default Post
