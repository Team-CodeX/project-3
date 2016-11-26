import React, { Component } from 'react';
import PostItem from './PostItem/PostItem.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import styles from './PostItems.css';

class PostItems extends Component {

    showProducts() {
      return props.products.map((item, i) =>
        <PostItem
          key={i}
          title={item.title}
          images={item.images}
          description={item.description}
          id={item.post_id}
        />
      );
    }


  componentWillMount() {
    this.props.getAllProducts();
  }

  render() {
    return(
      <div className={styles['side-bar']}>
        <p>{this.showProducts()}</p>
        <SearchBox />
        <PostItem />
      </div>
    );
  }
}
export default PostItems;