import ImageLoader from './ImageLoader';
import EmptyUser from '../../Img/input_pic.png';

export default function Profile() {
  return (
    <div
      className="centering"
      style={{
        width: '100%',
      }}
    >
      <ImageLoader
        size={140}
        image={EmptyUser}
        callback={(image) => console.log(image)}
      />
    </div>
  );
}
