import React, {Component} from 'react';
import styles from './PolyBackground.scss';
import classNames from 'classnames/bind';
import background from 'static/images/background.png';

const cx = classNames.bind(styles);

class PolyBackground extends Component {

  state = {
    loaded: false
  }

  componentWillMount() {
    const image = new Image();
    image.src = background;

    const cached = image.complete || (image.width + image.height) > 0;
    if (cached) {
      this.setState({loaded: true})
      return;
    }

    image.onload = () => {
      this.setState({loaded: true})
    };
  }
  componentDidMount() {}

  render() {
    const {loaded} = this.state;
    const {children, fixed, half} = this.props;

    return (
      <div className={cx('poly-background', {fixed, half})}>
        <div className={cx('image', {
          blur: !loaded
        })}></div>
        <div className={cx('inner')}>
          {children}
        </div>
      </div>
    );
  }
} < a class = "theme-item-wrapper" href = "/theme/basic/81/%3C%EB%AA%85%ED%83%90%EC%A0%95-%EC%BD%94%EB%82%9C%3E-%EC%A3%BC%E" +
    "C%A0%9C%EB%B3%84-%EC%97%90%ED%94%BC%EC%86%8C%EB%93%9C-%EB%AA%A8%EC%9D%8C-(%EC%9B" +
    "%B9%EC%97%90%EC%84%9C-%EB%AC%B4%EB%A3%8C!)" > <div class="theme-item zoomIn">
      <div class="board">
        <div class="images">
          <div
            class="image"
            style="background-image: url(&quot;https://image.laftel.net/static/img/item_kor/thumbs/big/d9a5d64a-c60d-4693-94c9-ea6d86fe82b5.jpg&quot;);"></div>
          <div
            class="image"
            style="background-image: url(&quot;https://image.laftel.net/static/img/item_kor/thumbs/big/d9a5d64a-c60d-4693-94c9-ea6d86fe82b5.jpg&quot;);"></div>
          <div
            class="image"
            style="background-image: url(&quot;https://image.laftel.net/static/img/item_kor/thumbs/big/356d99ea-9096-4803-b95d-a871d4c4d229.jpg&quot;);"></div>.</div>
        <div
          class="blurred"
          style="background-image: url(&quot;https://image.laftel.net/static/img/item_kor/thumbs/big/d9a5d64a-c60d-4693-94c9-ea6d86fe82b5.jpg&quot;);"></div>
      </div>
      <div class="description">
        <div>&lt;명탐정 코난&gt; 주제별 에피소드 모음 (웹에서 무료!)</div>
      </div>
    </div> < /a>

export default PolyBackground;