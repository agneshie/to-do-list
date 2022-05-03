import './ListItem.styles.scss';

function ListItem({ listItem, ...otherProps}) {
  return(
    <li {...otherProps}>{listItem}</li>
  );
}

export default ListItem;