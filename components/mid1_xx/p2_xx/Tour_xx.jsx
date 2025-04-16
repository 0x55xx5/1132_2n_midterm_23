'use client';

const Tour_xx = ({ id, img, name, price, info, remote_img }) => {
  return (
    <div>
      <article class='single-tour'>
        <img src={remote_img} alt='Best of Paris in 7 Days Tour' />
        <footer>
          <div class='tour-info'>
            <h4>{name}</h4>
            <h4 class='tour-price'>${price}</h4>
          </div>
          <p>
            {info}
            <button>read more</button>
          </p>
          <button class='delete-btn'>not interested</button>
        </footer>
      </article>
    </div>
  );
};

export default Tour_xx;
