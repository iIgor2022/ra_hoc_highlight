import uniqid from 'uniqid'
import Article from './article'
import withDataHighlight from './HOCs/dataHighLight'
import Video from './video';

const ArticleHighlight = withDataHighlight(Article);
const VideoHighlight = withDataHighlight(Video);

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case "video":
        return (
          <VideoHighlight key={uniqid()} { ...item }/>
        );
      case "article":
        return (
          <ArticleHighlight key={uniqid()} { ...item }/>
        );
    }
  });
}